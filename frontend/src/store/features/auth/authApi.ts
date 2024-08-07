import toast from 'react-hot-toast';

import { apiSlice } from '../api/apiSlice';
import { userLoggedIn } from './authSlice';

export const authApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // login endpoint here
    login: builder.mutation({
      query: (data) => ({
        url: 'users/login',
        method: 'POST',
        body: data,
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled;

          // setting logged data to redux state
          dispatch(
            userLoggedIn({
              user: result.data.data.user,
            })
          );

          toast.success(result.data.message);
        } catch (error: any) {
          toast.error(error?.error?.data?.message);
        }
      },
    }),

    // logout endpoint here
    logout: builder.mutation({
      query: () => ({
        url: 'users/logout',
        method: 'POST',
      }),
      async onQueryStarted(arg, { queryFulfilled }) {
        try {
          const result = await queryFulfilled;
          toast.success(result.data.message);
        } catch (error: any) {
          toast.error(error?.error?.data?.message);
        }
      },
    }),
  }),
});

export const { useLoginMutation, useLogoutMutation } =
  authApi;
