export const selectUser = state => state.auth.user;
export const selectUserId = state => state.auth.userId;
export const selectToken = state => state.auth.token;
export const selectError = state => state.auth.authError;
export const selectHasSubscription = state => state.auth.hasSubscription;
export const selectIsSplashLoading = state => state.auth.isSplashLoading;
export const selectIsFullyRegistred = state => state.auth.isFullyRegistred;
