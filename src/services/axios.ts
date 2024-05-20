import axios, { AxiosError } from "axios";
import { useState, useEffect } from "react";

const baseURL = import.meta.env.VITE_ENDPOINT;

export const httpClient = axios.create({
  baseURL,
  timeout: 10000,
});

const useFetch = <T>(url: string) => {
  const [data, setData] = useState<T[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<AxiosError | null>(null);

  useEffect(() => {
    let isMounted = true;

    const fetchData = async () => {
      try {
        const response = await httpClient.get(url);

        if (isMounted) {
          setData(response.data);
        }
      } catch (error) {
        if (axios.isAxiosError(error)) {
          setError(error as AxiosError);
        } else {
          console.error(error);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    return () => {
      isMounted = false;
    };
  }, [url]);

  return { data, loading, error };
};

export default useFetch;
