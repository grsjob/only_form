import React from "react";
import { Route, Routes } from "react-router-dom";
import PageWrapper from "../layout/page-wrapper/PageWrapper";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import Profile from "../pages/profile/Profile";
import NotFound from "../pages/not-found/NotFound";
import { IAutorizationContext, AuthorizationContext } from "../../context";

const App = () => {
  const authorization: IAutorizationContext = {
    isAuthorized: false,
    logIn() {
      this.isAuthorized = true;
      console.log(`isAuthorized ${this.isAuthorized}`);
    },
    logOut() {
      this.isAuthorized = false;
      console.log(`isAuthorized ${this.isAuthorized}`);
    },
  };
  return (
    <AuthorizationContext.Provider value={authorization}>
      <Routes>
        <Route path="/" element={<PageWrapper />}>
          <Route index element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </AuthorizationContext.Provider>
  );
};

export default App;
