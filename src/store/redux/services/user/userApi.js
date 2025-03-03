import { links } from '../../../../constants/links';
import { api } from '../api';

export const userApi = api.injectEndpoints({
  endpoints: build => ({
    login: build.mutation({
      query: credentials => {
        const params = {
          url: links.login,
          method: 'POST',
          body: credentials,
        };

        return params;
      },
    }),
    signInSocial: build.mutation({
      query: credentials => {
        const params = {
          url: links.signInSocial,
          method: 'POST',
          body: credentials,
        };

        return params;
      },
    }),
    registerWithQuiz: build.mutation({
      query: data => ({
        url: links.registerWithQuiz,
        method: 'POST',
        body: data,
      }),
    }),
    analizePhoto: build.mutation({
      query: ({ data, token }) => ({
        url: `${links.analizePhoto}?SaveAnalysis=true`,
        method: 'POST',
        body: data,
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'multipart/form-data',
        },
      }),
    }),
    analizePhotoAfterRegister: build.mutation({
      query: ({ data, token }) => {
        return {
          url: `${links.analizePhoto}?SaveAnalysis=true`,
          method: 'POST',
          body: data,
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'multipart/form-data',
          },
        };
      },
      invalidatesTags: (result, error, arg) =>
        !error
          ? [
              { type: 'User' },
              { type: 'User', id: 'ITEM' },
              { type: 'User', id: result.id },
            ]
          : '',
    }),
    getUser: build.query({
      query: ({ token, IncludeImages }) => {
        return {
          url: `${links.user}?includeImage=true`,
          headers: { Authorization: `Bearer ${token}` },
        };
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
        result?.id
          ? [
              { type: 'User', id: result.id },
              { type: 'User', id: 'ITEM' },
            ]
          : [{ type: 'User', id: 'ITEM' }],
    }),
    editAnalysis: build.mutation({
      query: ({ token, data }) => ({
        url: links.editAnalysis,
        method: 'PUT',
        body: data,
        headers: { Authorization: `Bearer ${token}` },
      }),
      invalidatesTags: (result, error, arg) =>
        !error
          ? [
              { type: 'User' },
              { type: 'User', id: 'ITEM' },
              { type: 'User', id: result.id },
            ]
          : '',
    }),
    forgotPassword: build.query({
      query: ({ email }) => {
        return {
          url: `${links.user}/forgot-password?email=${email}`,
        };
      },
      transformResponse: responseData => {
        const data = responseData;

        if (data) {
          return data;
        } else {
          return {};
        }
      },
    }),
    resetPassword: build.mutation({
      query: ({ data }) => ({
        url: links.resetPasssword,
        method: 'POST',
        body: data,
      }),
    }),
    changePassword: build.mutation({
      query: ({ data }) => ({
        url: links.changePasssword,
        method: 'POST',
        body: data,
      }),
    }),
    changeEmail: build.mutation({
      query: ({ data, token }) => ({
        url: links.changeEmail,
        method: 'POST',
        body: data,
        headers: { Authorization: `Bearer ${token}` },
      }),
    }),
    getAccountAnalyses: build.query({
      query: ({ token, pageSize, pageNumber }) => {
        let url = `${links.accountAnalyses}?PageSize=${pageSize}&PageNumber=${pageNumber}`;

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
    }),
    getAccountProcedures: build.query({
      query: ({ token }) => {
        const params = {
          url: links.beautyProcedure,
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
        result
          ? [
              ...result.map(({ id }) => ({
                type: 'BeautyProcedures',
                id
              })),
              { type: 'BeautyProcedures', id: 'LIST' },
            ]
          : [{ type: 'BeautyProcedures', id: 'ITEM' }],
    }),
    createAccountProcedures: build.mutation({
      query: ({ token, data }) => ({
        url: links.beautyProcedure,
        method: 'POST',
        body: data,
        headers: { Authorization: `Bearer ${token}` },
      }),
      invalidatesTags: (result, error, arg) =>
        !error && Array.isArray(result)
          ? [
              ...result.map(({ id }) => ({
                type: 'BeautyProcedures',
                id
              })),
              { type: 'BeautyProcedures', id: 'LIST' },
            ]
          : [{ type: 'BeautyProcedures', id: 'ITEM' }],
    }),
    editAccountProcedures: build.mutation({
      query: ({ token, data }) => ({
        url: links.beautyProcedure,
        method: 'PUT',
        body: data,
        headers: { Authorization: `Bearer ${token}` },
      }),
      invalidatesTags: (result, error, arg) =>
        !error && Array.isArray(result)
          ? [
              ...result.map(({ id }) => ({
                type: 'BeautyProcedures',
                id
              })),
              { type: 'BeautyProcedures', id: 'LIST' },
            ]
          : [{ type: 'BeautyProcedures', id: 'ITEM' }],
    }),
    deleteAccountProcedures: build.mutation({
      query: ({ token, data }) => ({
        url: links.beautyProcedure,
        method: 'DELETE',
        body: data,
        headers: { Authorization: `Bearer ${token}` },
      }),
      invalidatesTags: (result, error, arg) =>
        !error
          ? [
              { type: 'BeautyProcedures', id: 'LIST' },
            ]
          : [{ type: 'BeautyProcedures', id: 'ITEM' }],
    }),
    deleteAccount: build.mutation({
      query: token => ({
        url: links.user,
        method: 'DELETE',
        headers: { Authorization: `Bearer ${token}` },
      }),
    }),
  }),
});

export const {
  useLoginMutation,
  useSignInSocialMutation,
  useAnalizePhotoMutation,
  useRegisterWithQuizMutation,
  useGetUserQuery,
  useEditAnalysisMutation,
  useGetAccountAnalysesQuery,
  useGetAccountProceduresQuery,
  useCreateAccountProceduresMutation,
  useEditAccountProceduresMutation,
  useDeleteAccountProceduresMutation,
  useForgotPasswordQuery,
  useResetPasswordMutation,
  useChangePasswordMutation,
  useChangeEmailMutation,
  useAnalizePhotoAfterRegisterMutation,
  useDeleteAccountMutation,
} = userApi;
