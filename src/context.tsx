import React, { useContext } from "react";
import { createContext, ReactNode, useReducer } from "react";

type Action = { type: "logIn" } | { type: "logOut" };
type Dispatch = (action: Action) => void;
type State = { isAuthorized: boolean };
type AuthorizationProviderProps = { children: ReactNode };

const AuthorizationStateContext = createContext<
  { state: State; dispatch: Dispatch } | undefined
>(undefined);

const authorizationReducer = (state: State, action: Action) => {
  switch (action.type) {
    case "logIn": {
      return { isAuthorized: (state.isAuthorized = true) };
    }
    case "logOut": {
      return { isAuthorized: (state.isAuthorized = false) };
    }
    default: {
      throw new Error("Unknown action type");
    }
  }
};

const AuthorizationProvider = ({ children }: AuthorizationProviderProps) => {
  const [state, dispatch] = useReducer(authorizationReducer, {
    isAuthorized: false,
  });
  const authorization = { state, dispatch };
  return (
    <AuthorizationStateContext.Provider value={authorization}>
      {children}
    </AuthorizationStateContext.Provider>
  );
};

const useAuthorization = () => {
  const authorization = useContext(AuthorizationStateContext);
  if (authorization === undefined) {
    throw new Error(
      "useAuthorizationState must be used with a AuthorizationProvider",
    );
  }
  return authorization;
};

export { AuthorizationProvider, useAuthorization };
