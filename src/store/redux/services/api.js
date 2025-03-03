import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiUrl = process.env.API_URL;
export const apiUrlDev = process.env.API_URL_DEV;
const url = 'https://pos.updatebyz.com';

export const api = createApi({
  reducerPath: 'splitApi',
  baseQuery: fetchBaseQuery({
    baseUrl: apiUrl,
    prepareHeaders: headers => {
      headers.set('Accept', 'application/json');

      return headers;
    },
  }),
  endpoints: () => ({}),
  tagTypes: [
    'User',
    'CountryAverage',
    'AgeAverage',
    'ProfessionAverage',
    'CountryMenAverage',
    'CountryWomen',
    'Top',
    'BeautyProcedures',
  ],
});
