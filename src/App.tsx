import React from "react";
import { ThemeContextProvider } from "./context/theme/ThemeContext";
import { Home } from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { ChangePassword, EditUserProfile, PublicProfile, UserProfile } from "./pages/Profile";
import { CreatePost } from "./pages/Post";
import { Wallet } from "./pages/Wallet";
import PrivateRoute from "./pages/auth/PrivateRoute";

// import NotFound from "./pages/Error/NotFound";

function App() {
  return (
    <AnimatePresence>
      <ThemeContextProvider>
        <Routes>
          <Route path="/*" element={<Home />} />

          <Route path="/post/create" element={<CreatePost />} />

          <Route path="/profile" element={<PublicProfile />} />
          {/* <Route element={<PrivateRoute />}> */}
            <Route path="/profile/:id" element={<UserProfile />} />
          <Route path="/profile/:id/edit" element={<EditUserProfile />} />
          <Route path="/profile/change-password" element={<ChangePassword />} />
          <Route path="/profile/wallet" element={<Wallet />} />
          {/* </Route> */}
          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
      </ThemeContextProvider>
    </AnimatePresence>
  );
}

export default App;
