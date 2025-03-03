import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { userApi } from '../../services/user/userApi';

const initialState = {
  photoAnalizeData: null,
};

const userDataSlice = createSlice({
  name: 'userData',
  initialState,

  reducers: {},

  extraReducers: builder => {
    builder.addMatcher(
      userApi.endpoints.analizePhoto.matchFulfilled,
      (state, action) => {
        state.photoAnalizeData = action.payload;
      }
    );
    builder.addMatcher(
      userApi.endpoints.analizePhotoAfterRegister.matchFulfilled,
      (state, action) => {
        state.photoAnalizeData = action.payload;
      }
    );
  },
});

// export const {  } = userDataSlice.actions;
export default userDataSlice.reducer;
