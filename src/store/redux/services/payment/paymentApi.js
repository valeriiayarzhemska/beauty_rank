import { links } from '../../../../constants/links';
import { api } from '../api';

export const userApi = api.injectEndpoints({
  endpoints: build => ({
    createPayment: build.mutation({
      query: ({ credentials, token }) => {
        const params = {
          url: links.createPayment,
          method: 'POST',
          body: credentials,
          headers: { Authorization: `Bearer ${token}` },
        };

        return params;
      },
    }),
    activateSubscription: build.mutation({
      query: ({ credentials, token }) => {
        const params = {
          url: links.changeSubscription,
          method: 'POST',
          body: credentials,
          headers: { Authorization: `Bearer ${token}` },
        };

        return params;
      },
    }),
  }),
});

export const {
  useCreatePaymentMutation,
  useActivateSubscriptionMutation,
} = userApi;
