import React from "react";
import { useStore } from "../../../state/storeHooks";
import { store } from "../../../state/store";
import { logOut } from "../../../state/slices/AppSlice";
import { StyledCurrentUser, StyledLogOut, StyledTitle } from "./profileStyles";

const Profile = () => {
  const { currentUser } = useStore(({ user }) => user);

  return (
    <>
      <StyledTitle>
        Здравствуйте, <StyledCurrentUser>{currentUser}</StyledCurrentUser>
      </StyledTitle>
      <StyledLogOut
        onClick={() => {
          localStorage.removeItem("user");
          store.dispatch(logOut());
        }}
      >
        Выйти
      </StyledLogOut>
    </>
  );
};

export default Profile;
