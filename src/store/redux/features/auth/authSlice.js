import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { userApi } from '../../services/user/userApi';

const initialState = {
  user: null,
  userId: null,
  token: null,
  authError: null,
  hasSubscription: false,
  isSplashLoading: false,
  isFullyRegistred: false,
};

export const setUser = createAsyncThunk(
  'auth/setUser',
  async payload => payload
);

export const setUserId = createAsyncThunk(
  'auth/setUserId',
  async payload => payload
);

export const setToken = createAsyncThunk(
  'auth/setToken',
  async payload => payload
);

export const setHasSubscription = createAsyncThunk(
  'auth/setHasSubscription',
  async payload => payload
);

export const setIsFullyRegistred = createAsyncThunk(
  'auth/setIsFullyRegistred',
  async payload => payload
);

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setIsSplashLoading: (state, action) => {
      state.isSplashLoading = action.payload;
    },
  },

  extraReducers: builder => {
    builder
      .addCase(setUser.fulfilled, (state, action) => {
        state.user = { ...state.user, ...action.payload };
      })
      .addCase(setUserId.fulfilled, (state, action) => {
        state.userId = action.payload.data;
      })
      .addCase(setToken.fulfilled, (state, action) => {
        state.token = action.payload;
      })
      .addCase(setHasSubscription.fulfilled, (state, action) => {
        state.hasSubscription = action.payload;
      })
      .addCase(setIsFullyRegistred.fulfilled, (state, action) => {
        state.isFullyRegistred = action.payload;
      })

      .addMatcher(userApi.endpoints.login.matchPending, (state, action) => {
        state.authError = null;
      })
      .addMatcher(userApi.endpoints.login.matchRejected, (state, action) => {
        state.authError = 'errorWentWrong';
      })

      .addMatcher(userApi.endpoints.getUser.matchFulfilled, (state, action) => {
        state.user = { ...state.user, ...action.payload };
        state.hasSubscription = action.payload?.hasSubscription ? true : false;
      })

      .addMatcher(
        userApi.endpoints.registerWithQuiz.matchFulfilled,
        (state, action) => {
          state.token = action.payload.token;
          state.userId = action.payload.userId;
          state.hasSubscription = false;
          state.user = action.payload;
        }
      );
  },
});

export const { setIsSplashLoading } = authSlice.actions;
export default authSlice.reducer;
