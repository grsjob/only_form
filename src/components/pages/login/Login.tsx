import React from "react";
import { useForm, Controller } from "react-hook-form";
import { IUser } from "../../../types/user";
import { store } from "../../../state/store";
import { logIn } from "../../../state/slices/AppSlice";
import { useNavigate } from "react-router";
import { useStore } from "../../../state/storeHooks";
import { rememberPassword } from "../../../state/slices/UserSlice";
import CustomInput from "../../custom-input/CustomInput";

const Login = () => {
  const { users } = useStore(({ user }) => user);
  const navigate = useNavigate();
  const {
    register,
    formState: { errors, isSubmitting },
    handleSubmit,
    setValue,
    getValues,
    control,
  } = useForm<IUser>({ defaultValues: { login: "" } });

  const onSubmit = (data: IUser) => {
    const registeredUser = users.find((user) => {
      if (user.login === data.login && user.password === data.password) {
        return user;
      }
    });
    if (registeredUser) {
      if (data.isRememberPassword) {
        store.dispatch(rememberPassword(registeredUser.login));
      }
      store.dispatch(logIn());
      navigate("/profile");
    }
  };
  const handleBlur = (e) => {
    const user = users.find((user) => user.login === e.target.value);
    if (user) setValue("password", user.password);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>
        Логин
        <Controller
          name="login"
          control={control}
          rules={{ required: true }}
          render={({ field, fieldState: { error } }) => (
            <>
              <input {...field} onBlur={handleBlur} />
              {error && <p>Обязательное поле логин</p>}
            </>
          )}
        />
      </label>

      <label>
        Пароль
        <input type="password" {...register("password", { required: true })} />
        {errors.password && <p>Обязательное поле пароль</p>}
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
