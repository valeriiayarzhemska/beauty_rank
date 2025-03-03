import { links } from '../../../../constants/links';
import { api } from '../api';

export const eventsApi = api.injectEndpoints({
  endpoints: build => ({
    updateEvents: build.mutation({
      query: data => {
        const params = {
          url: links.event,
          method: 'POST',
          body: data,
        };

        return params;
      },
    }),
  }),
});

export const { useUpdateEventsMutation } = eventsApi;
