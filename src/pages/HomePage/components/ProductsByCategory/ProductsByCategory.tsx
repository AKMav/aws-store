import { ProductsList } from "@/components";
import { useEffect, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { IProductCard } from "@/types/products";
import { fetchProductsByCategory } from "@/services/products";
import { formatFetchedProductForCard } from "@/decorators/productFormatters";
import { RootState } from "@/store";
import { AxiosDataResponse, PaginateParams } from "../../types";

interface IProps {
  classes?: string;
}

interface IFetchProductsProps {
  category: string;
  pagination: PaginateParams;
}

const initialPaginationParams = {
  limit: 12,
  skip: 0,
  total: 0,
};

export const ProductsByCategory = ({ classes }: IProps) => {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState<IProductCard[]>([]);
  const currentCategory = useSelector(
    (state: RootState) => state.categories.currentCategory
  );

  const [skipCount, setSkipCount] = useState(0);
  const [paginationParams, setPaginationParams] = useState<PaginateParams>(
    initialPaginationParams
  );

  const hasMoreItems = useMemo(
    () => products.length < paginationParams.total,
    [paginationParams, skipCount]
  );

  const getProducts = async ({ category, pagination }: IFetchProductsProps) => {
    setLoading(true);

    try {
      const response = (await fetchProductsByCategory({
        category,
        queries: {
          limit: pagination.limit,
          skip: pagination.skip,
        },
      })) as AxiosDataResponse;

      const { products, ...respPagination } = response.data;
      const nextSkipCount = skipCount + 1;
      setSkipCount(nextSkipCount);

      const paginationData = {
        ...paginationParams,
        skip: nextSkipCount * paginationParams.limit,
        total: respPagination.total,
      };

      setPaginationParams(paginationData);

      return formatFetchedProductForCard(products || []);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
    return [];
  };

  const fetchMoreProducts = async () => {
    const products = await getProducts({
      category: currentCategory,
      pagination: paginationParams,
    });

    setProducts((prevProducts) => [...prevProducts, ...products]);
  };

  useEffect(() => {
    const getProductsByCategory = async () => {
      const products = await getProducts({
        category: currentCategory,
        pagination: initialPaginationParams,
      });
      setProducts(products);
    };

    getProductsByCategory();
  }, [currentCategory]);

  return (
    <>
      <ProductsList
        classes={classes}
        products={products}
        loading={loading}
        hasMoreItems={hasMoreItems}
        fetchMore={fetchMoreProducts}
      />
    </>
  );
};
