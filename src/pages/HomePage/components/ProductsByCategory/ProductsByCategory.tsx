import { ProductsList } from "@/components";
import { useEffect, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { IProductCard } from "@/types/products";
import { fetchProductsByCategory } from "@/services/products";
import { formatFetchedProductsForCard } from "@/decorators/productFormatters";
import { RootState } from "@/store";
import { AxiosDataResponse, PaginateParams } from "../../types";

interface IFetchProductsProps {
  category: string;
  pagination: PaginateParams;
}

const initialPaginationParams = {
  limit: 12,
  skip: 0,
  total: 0,
};

export const ProductsByCategory = () => {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState<IProductCard[]>([]);
  const currentCategory = useSelector(
    (state: RootState) => state.categories.currentCategory
  );

  const [skipCount, setSkipCount] = useState(0);
  const [paginationParams, setPaginationParams] = useState<PaginateParams>({
    ...initialPaginationParams,
  });

  const hasMoreItems = useMemo(
    () => products.length < paginationParams.total,
    [paginationParams, skipCount, products]
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

      setPaginationParams(respPagination);

      return formatFetchedProductsForCard(products || []);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
    return [];
  };

  const fetchMoreProducts = async () => {
    const nextSkipCount = skipCount + 1;
    setSkipCount(nextSkipCount);

    const pagination = {
      ...paginationParams,
      skip: nextSkipCount * paginationParams.limit,
    };

    const products = await getProducts({
      pagination,
      category: currentCategory,
    });

    setProducts((prevProducts) => [...prevProducts, ...products]);
  };

  useEffect(() => {
    setSkipCount(0);
    setPaginationParams({ ...initialPaginationParams });

    const getProductsByCategory = async () => {
      const products = await getProducts({
        category: currentCategory,
        pagination: { ...initialPaginationParams },
      });
      setProducts(products);
    };

    getProductsByCategory();
  }, [currentCategory]);

  return (
    <ProductsList
      products={products}
      loading={loading}
      hasMoreItems={hasMoreItems}
      fetchMore={fetchMoreProducts}
    />
  );
};
