import axios from "axios";
const authToken = "authToken";

const axiosAdminApi = axios.create({
  baseURL: `${process.env.NEXT_ADMIN_API_URL}`,
});

axiosAdminApi.interceptors.request.use(
  (config) => {
    let localToken = localStorage.getItem(authToken) || "";
    let token = `Bearer ${JSON.parse(localToken)}`;
    if (localToken) {
      config.headers["Authorization"] = token;
    }
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

axiosAdminApi.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    if (error.response && error.response.status === 401) {
      try {
        const refreshToken = await refreshAccessToken();

        error.config.headers.Authorization = `Bearer  ${refreshToken}`;

        return axiosAdminApi.request(error.config);
      } catch (refreshError) {
        throw refreshError;
      }
    }

    return Promise.reject(error);
  }
);

const refreshAccessToken = async () => {
  try {
    const response = await axiosAdminApi.post("/api/v1/auth/refresh-token", {});

    const newToken = response.data.token;

    return newToken;
  } catch (error) {
    throw error;
  }
};

export default axiosAdminApi;