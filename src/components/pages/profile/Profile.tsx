import React from "react";
import { useStore } from "../../../state/storeHooks";
import { store } from "../../../state/store";
import { logOut } from "../../../state/slices/AppSlice";

const Profile = () => {
  const { currentUser } = useStore(({ user }) => user);

  return (
    <>
      <h2>Здравствуйте, {currentUser.login}</h2>
      <button onClick={() => store.dispatch(logOut())}>Выйти</button>
    </>
  );
};

export default Profile;
