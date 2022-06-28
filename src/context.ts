import { createContext } from "react";

export interface IAutorizationContext {
  isAuthorized: boolean;
  logIn: () => void;
  logOut: () => void;
}
export const AuthorizationContext = createContext<IAutorizationContext | null>(null);
