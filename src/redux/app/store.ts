import { configureStore } from "@reduxjs/toolkit";
import registerReducer from "../features/authentication/registerSlice";
import loginReducer from "../features/authentication/loginSlice";
import categoryReducer from "../features/Category/categorySlice";
import countryReducer from "../features/Country/countrySlice";
import countryStateReducer from "../features/CountryState/countryStateSlice";
import verifyEmailReducer from "../features/authentication/verifyEmailSlice";

export const store = configureStore({
  reducer: {
    register: registerReducer,
    category: categoryReducer,
    country: countryReducer,
    states: countryStateReducer,
    verifyEmail: verifyEmailReducer,
    login: loginReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
