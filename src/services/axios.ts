import axios, { AxiosError } from "axios";
import { getCookies } from "@/helpers";
import { useSaveUser } from "@/hooks";
import { authRefresh } from "@/api/auth";
import { ITokens } from "@/types/tokens";

const baseURL = import.meta.env.VITE_ENDPOINT;

const httpClient = axios.create({
  baseURL,
  timeout: 10000,
});

httpClient.interceptors.request.use(
  async (config) => {
    const { token } = getCookies() as unknown as ITokens;

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

httpClient.interceptors.response.use(
  (response) => {
    return response;
  },
  async function (error: AxiosError) {
    const originalRequest = error.config || {};
    if (error.response?.status === 403) {
      const { refreshToken } = getCookies() as unknown as ITokens;
      const { saveTokens } = useSaveUser();
      const response = await authRefresh({ refreshToken });
      const data = response.data;
      axios.defaults.headers.common["Authorization"] = `Bearer ${data.token}`;
      saveTokens(data);
      return httpClient(originalRequest);
    }
    return Promise.reject(error);
  }
);

export { httpClient };
