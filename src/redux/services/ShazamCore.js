import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const shazamCoreAPi = createApi({
  reducerPath: "shazamCoreAPi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://shazam-core.p.rapidapi.com/v1",
    prepareHeaders: (headers) => {
      headers.set("X-RapidAPI-Key", "143e73c398msh510959691bca88cp1bd30ajsn20dca0ca3495");

      return headers;
    },
  }),
  endpoints: (builder) => ({
    getTopCharts: builder.query({
      query: () => "/charts/world",
    }),
  }),
});

export const { useGetTopChartsQuery } = shazamCoreAPi;
