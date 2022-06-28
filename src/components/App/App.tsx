import React from "react";
import { Route, Routes } from "react-router-dom";
import PageWrapper from "../layout/page-wrapper/PageWrapper";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import Profile from "../pages/profile/Profile";
import NotFound from "../pages/not-found/NotFound";
import { AuthorizationProvider } from "../../context";

const App = () => {
  return (
    <AuthorizationProvider>
      <Routes>
        <Route path="/" element={<PageWrapper />}>
          <Route index element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </AuthorizationProvider>
  );
};

export default App;
