import { links } from '../../../../constants/links';
import { api } from '../api';

export const analizeDataApi = api.injectEndpoints({
  endpoints: build => ({
    getCountryAverage: build.query({
      query: ({ token, pageSize, gender, pageNumber }) => {
        let url = `${links.statisticsAverage}?FilteringType=1&PageSize=${pageSize}&PageNumber=${pageNumber}`

        if (gender && gender !== 'all') {
          url += `&Gender=${gender}`
        }

        const params = {
          url,
          headers: { Authorization: `Bearer ${token}` },
        };

        return params;
      },
      transformResponse: responseData => {
        const data = responseData;

        if (data) {
          return data;
        } else {
          return {};
        }
      },
      providesTags: result =>
        result?.items
          ? [
            ...result.items.map(({ key }) => ({ type: 'CountryAverage', key })),
            { type: 'CountryAverage', id: 'LIST' },
          ]
          : [{ type: 'CountryAverage', id: 'LIST' }],
    }),
    getThreeCountriesAverage: build.query({
      query: ({ token, beautyAnalysisId }) => {
        let url = `${links.threeCountriesAverage}?beautyAnalysisId=${beautyAnalysisId}`

        const params = {
          url,
          headers: { Authorization: `Bearer ${token}` },
        };

        return params;
      },
      transformResponse: responseData => {
        const data = responseData;

        if (data) {
          return data;
        } else {
          return {};
        }
      },
      providesTags: result =>
        result?.items
          ? [
            ...result.items.map(({ key }) => ({ type: 'CountryAverage', key })),
            { type: 'CountryAverage', id: 'LIST' },
          ]
          : [{ type: 'CountryAverage', id: 'LIST' }],
    }),
    getThreeUsersAverage: build.query({
      query: ({ token, beautyAnalysisId }) => {
        let url = `${links.threeUsersAverage}?beautyAnalysisId=${beautyAnalysisId}`

        const params = {
          url,
          headers: { Authorization: `Bearer ${token}` },
        };

        return params;
      },
      transformResponse: responseData => {
        const data = responseData;

        if (data) {
          return data;
        } else {
          return {};
        }
      },
      providesTags: result =>
        result?.items
          ? [
            ...result.items.map(({ key }) => ({ type: 'CountryAverage', key })),
            { type: 'CountryAverage', id: 'LIST' },
          ]
          : [{ type: 'CountryAverage', id: 'LIST' }],
    }),
   /*  getAgeAverage: build.query({
      query: token => ({
        url: `${links.statisticsAverage}?FilteringType=2`,
        headers: { Authorization: `Bearer ${token}` },
      }),
      transformResponse: responseData => {
        const data = responseData;

        if (data) {
          return data;
        } else {
          return {};
        }
      },
      providesTags: result =>
        result?.analysisStatisticsItems
          ? [
            ...result.analysisStatisticsItems.map(({ key }) => ({ type: 'AgeAverage', key })),
            { type: 'AgeAverage', id: 'LIST' },
          ]
          : [{ type: 'AgeAverage', id: 'LIST' }],
    }),
    getProfessionAverage: build.query({
      query: token => ({
        url: `${links.statisticsAverage}?FilteringType=3`,
        headers: { Authorization: `Bearer ${token}` },
      }),
      transformResponse: responseData => {
        const data = responseData;

        if (data) {
          return data;
        } else {
          return {};
        }
      },
      providesTags: result =>
        result?.analysisStatisticsItems
          ? [
            ...result.analysisStatisticsItems.map(({ key }) => ({ type: 'ProfessionAverage', key })),
            { type: 'ProfessionAverage', id: 'LIST' },
          ]
          : [{ type: 'ProfessionAverage', id: 'LIST' }],
    }), */
    getTop: build.query({
      query: ({ token, pageSize, includeImages, gender, pageNumber }) => {
        let url = `${links.statisticsTop}?PageSize=${pageSize}&PageNumber=${pageNumber}`

        if (includeImages) {
          url += `&IncludeImages=true`
        }

        if (gender && gender !== 'all') {
          url += `&Gender=${gender}`
        }

        const params = {
          url,
          headers: { Authorization: `Bearer ${token}` },
        };

        return params;
      },
      transformResponse: responseData => {
        const data = responseData;

        if (data) {
          return data;
        } else {
          return [];
        }
      },
      providesTags: result =>
        result?.items
          ? [
            ...result?.items?.map(({ key }) => ({ type: 'Top', key })),
            { type: 'Top', id: 'LIST' },
          ]
          : [{ type: 'Top', id: 'LIST' }],
    }),
  }),
});

export const {
  useGetCountryAverageQuery,
  useGetThreeCountriesAverageQuery,
  useGetTopQuery,
  useGetThreeUsersAverageQuery,
} = analizeDataApi;
