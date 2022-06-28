import React from "react";
import Header from "../header/Header";
import { Outlet } from "react-router";

const PageWrapper = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default PageWrapper;
