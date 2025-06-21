import { API_URL } from "@/app/lib/utils/env";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL,
  }),
  reducerPath: "api",
  tagTypes: [],
  endpoints: (build) => ({
  }),
});

export const {} = api;