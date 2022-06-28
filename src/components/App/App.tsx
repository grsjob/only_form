import React from "react";
import { Route, Routes } from "react-router-dom";
import PageWrapper from "../layout/page-wrapper/PageWrapper";
import Login from "../pages/login/Login";
import Profile from "../pages/profile/Profile";
import NotFound from "../pages/not-found/NotFound";
import PrivateOutlet from "../PrivateOutlet/PrivateOutlet";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<PageWrapper />}>
        <Route index element={<Login />} />
        <Route path="/profile" element={<PrivateOutlet />}>
          <Route index element={<Profile />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default App;
