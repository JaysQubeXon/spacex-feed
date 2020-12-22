import { createApi, fetchBaseQuery } from "@rtk-incubator/rtk-query";
import { Launch, Rocket } from "../index.d";

export const spacexApi = createApi({
  reducerPath: "spacexApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.spacexdata.com/v4/",
    headers: { "Content-Type": "application/json" },
  }),
  endpoints: (builder) => ({
    getLaunches: builder.query<Launch[], unknown>({
      query: () => "launches",
    }),
    getRockets: builder.query<Rocket[], unknown>({
      query: () => "rockets",
    }),
  }),
});

export const { useGetLaunchesQuery, useGetRocketsQuery } = spacexApi;
