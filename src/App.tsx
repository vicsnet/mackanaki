import React from "react";
import { ThemeContextProvider } from "./context/theme/ThemeContext";
import { Home } from "./pages/Home";
import { Navigate, Route, Routes } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { ChangePassword, EditUserProfile, PublicProfile, UserProfile } from "./pages/Profile";
import { CreatePost } from "./pages/Post";
import { Wallet } from "./pages/Wallet";
import { Signup, Login, EmailVerification, SignupOptions, PrivateRoute } from "./pages/Authentication";
import useAuth from "./hooks/useAuth";
import GoogleCallback from "./pages/Authentication/GoogleCallback";



// import NotFound from "./pages/Error/NotFound";

function App() {
  const isAuth = useAuth();
  return (
    <AnimatePresence mode="wait">

      <ThemeContextProvider>
        <Routes>
          <Route path="/*" element={<Home />} />


          <Route element={<PrivateRoute />}>
            <Route path="/profile/:id" element={< PublicProfile />} />
            <Route path="/profile/edit" element={<EditUserProfile />} />
            <Route path="/profile/change-password" element={<ChangePassword />} />
            <Route path="/profile/wallet" element={<Wallet />} />
            <Route path="/post/create" element={<CreatePost />} />
            <Route path="/profile" element={< UserProfile />} />
          </Route>

          <Route path="/auth/google" element={<GoogleCallback />}></Route>
          <Route path="/login" element={isAuth ? <Navigate to="/" /> : <Login />} />
          <Route path="/signup-options" element={isAuth ? <Navigate to="/" /> : <SignupOptions />} />
          <Route path='/signup' element={isAuth ? <Navigate to="/" /> : <Signup />} />
          <Route path="/verify-email" element={isAuth ? <Navigate to="/" /> : <EmailVerification />} />
          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
      </ThemeContextProvider>
    </AnimatePresence>
  );
}

export default App;
