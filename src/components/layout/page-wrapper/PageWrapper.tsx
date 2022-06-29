import React from "react";
import Header from "../header/Header";
import { Outlet } from "react-router";
import { StyledMain } from "./pageWrapperStyles";

const PageWrapper = () => {
  return (
    <>
      <Header />
      <StyledMain>
        <Outlet />
      </StyledMain>
    </>
  );
};

export default PageWrapper;
