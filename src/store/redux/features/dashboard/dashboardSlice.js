import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isUserWoman: true,
  inputsProcedures: [],
  hasRanges: false,
  proceduresFromBack: {},
  registrationQuizValues: {},
  beautyPlanValues: {},
  showCreateBeautyPlan: false,
  shareInstagramValues: {},
  photoToAnalize: null,
  showSubscriptionPage: false,
  isSkipVisible: true,
};

const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState,

  reducers: {
    setIsUserWoman: (state, action) => {
      state.isUserWoman = action.payload;
    },
    setInputsProcedures: (state, action) => {
      state.inputsProcedures = action.payload;
    },
    setHasRanges: (state, action) => {
      state.hasRanges = action.payload;
    },
    setRegistrationQuizValues: (state, action) => {
      state.registrationQuizValues = action.payload;
    },
    setBeautyPlanValues: (state, action) => {
      state.beautyPlanValues = action.payload;
    },
    setProceduresFromBack: (state, action) => {
      state.proceduresFromBack = action.payload;
    },
    setShareInstagramValues: (state, action) => {
      state.shareInstagramValues = action.payload;
    },
    setPhotoToAnalize: (state, action) => {
      state.photoToAnalize = action.payload;
    },
    setShowCreateBeautyPlan: (state, action) => {
      state.showCreateBeautyPlan = action.payload;
    },
    setShowSubscriptionPage: (state, action) => {
      state.showSubscriptionPage = action.payload;
    },
    setIsSkipVisible: (state, action) => {
      state.isSkipVisible = action.payload;
    },
  },

  extraReducers: builder => {},
});

export const {
  setInputsProcedures,
  setHasRanges,
  setBeautyPlanValues,
  setProceduresFromBack,
  setRegistrationQuizValues,
  setShareInstagramValues,
  setIsUserWoman,
  setPhotoToAnalize,
  setShowCreateBeautyPlan,
  setShowSubscriptionPage,
  setIsSkipVisible,
} = dashboardSlice.actions;
export default dashboardSlice.reducer;
