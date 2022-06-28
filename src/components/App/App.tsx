import React from "react";
import { Route, Routes } from "react-router-dom";
import PageWrapper from "../layout/page-wrapper/PageWrapper";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import Profile from "../pages/profile/Profile";
import NotFound from "../pages/not-found/NotFound";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<PageWrapper />}>
        <Route index element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default App;
