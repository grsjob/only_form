import React, { useEffect } from "react";
import "../../assets/scss/App.scss";
import { Route, Routes } from "react-router-dom";
import PageWrapper from "../layout/page-wrapper/PageWrapper";
import Login from "../pages/login/Login";
import Profile from "../pages/profile/Profile";
import NotFound from "../pages/not-found/NotFound";
import PrivateOutlet from "../PrivateOutlet/PrivateOutlet";
import { store } from "../../state/store";
import { setCurrentUser } from "../../state/slices/UserSlice";
import { logIn } from "../../state/slices/AppSlice";

const App = () => {
  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      const currentUser = JSON.parse(user);
      store.dispatch(setCurrentUser(currentUser.login));
      store.dispatch(logIn());
    }
  }, []);
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
