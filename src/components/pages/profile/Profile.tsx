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
        Здравствуйте, <StyledCurrentUser>{currentUser.login}</StyledCurrentUser>
      </StyledTitle>
      <StyledLogOut onClick={() => store.dispatch(logOut())}>
        Выйти
      </StyledLogOut>
    </>
  );
};

export default Profile;
