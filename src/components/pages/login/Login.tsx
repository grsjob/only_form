import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { IUser } from "../../../types/user";

const Login = () => {
  const {
    register,
    formState: { errors, isSubmitting },
    handleSubmit,
    reset,
  } = useForm<IUser>({});

  const onSubmit = (data: IUser) => {
    console.log(data);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>
        Логин
        <input {...register("login", { required: true })} />
      </label>
      {errors.login && <p>Обязательное поле</p>}
      <label>
        Пароль
        <input type="password" {...register("password", { required: true })} />
        {errors.password && <p>Обязательное поле</p>}
      </label>
      <label>
        Запомнить пароль
        <input type="checkbox" {...register("isRememberPassword")} />
      </label>
      <button type="submit" disabled={isSubmitting}>
        Войти
      </button>
    </form>
  );
};

export default Login;
