import { IUser } from "../types/user";

const users: IUser[] = [
  {
    login: "steve.jobs@example.com",
    password: "password",
    isRememberMe: false,
  },
];

export function checkAuth(user: IUser): IUser {
  const registeredUser: IUser = users.find((u) => {
    if (u.login === user.login && u.password === user.password) {
      return user;
    }
  });
  return registeredUser;
}
