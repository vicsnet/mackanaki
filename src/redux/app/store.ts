import { configureStore } from "@reduxjs/toolkit";
import registerReducer from "../features/authentication/registerSlice";
import loginReducer from "../features/authentication/loginSlice";
import googleAuthReducer from "../features/authentication/googleAuthSlice";
import categoryReducer from "../features/Category/categorySlice";
import countryReducer from "../features/Country/countrySlice";
import countryStateReducer from "../features/CountryState/countryStateSlice";
import verifyEmailReducer from "../features/authentication/verifyEmailSlice";
import userProfileReducer from "../features/user/userProfileSlice";

export const store = configureStore({
  reducer: {
    register: registerReducer,
    category: categoryReducer,
    country: countryReducer,
    states: countryStateReducer,
    verifyEmail: verifyEmailReducer,
    login: loginReducer,
    userProfile: userProfileReducer,
    googleAuth: googleAuthReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
