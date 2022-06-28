import React from "react";
import { Navigate } from "react-router-dom";
import { Outlet } from "react-router";
import { useStore } from "../../state/storeHooks";

const PrivateOutlet = () => {
  const { isAuthorized } = useStore(({ app }) => app);
  return isAuthorized ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateOutlet;
