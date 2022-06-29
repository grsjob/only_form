import React from "react";
import { useForm, Controller } from "react-hook-form";
import { IUser } from "../../../types/user";
import { store } from "../../../state/store";
import { logIn } from "../../../state/slices/AppSlice";
import { useNavigate } from "react-router";
import { useStore } from "../../../state/storeHooks";
import {
  rememberPassword,
  setCurrentUser,
} from "../../../state/slices/UserSlice";
import {
  StyledCheckbox,
  StyledError,
  StyledForm,
  StyledInput,
  StyledInputWrapper,
  StyledLabelForCheckbox,
  StyledLableForInput,
  StyledSubmitButton,
} from "./loginStyles";

const Login = () => {
  const { users } = useStore(({ user }) => user);
  const navigate = useNavigate();
  const {
    register,
    formState: { errors, isSubmitting },
    handleSubmit,
    setValue,
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
      store.dispatch(setCurrentUser(registeredUser.login));

      navigate("/profile");
    }
  };
  const handleBlur = (e) => {
    const user = users.find((user) => user.login === e.target.value);
    if (user?.isRememberPassword) setValue("password", user.password);
  };
  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <StyledLableForInput>Логин</StyledLableForInput>
      <Controller
        name="login"
        control={control}
        rules={{ required: true }}
        render={({ field }) => (
          <StyledInputWrapper>
            <StyledInput {...field} errors={errors.login} onBlur={handleBlur} />
            {errors.login && <StyledError>Обязательное поле</StyledError>}
          </StyledInputWrapper>
        )}
      />

      <StyledLableForInput>Пароль</StyledLableForInput>
      <StyledInputWrapper>
        <StyledInput
          errors={errors.password}
          type="password"
          {...register("password", { required: true })}
        />
        {errors.password && <StyledError>Обязательное поле</StyledError>}
      </StyledInputWrapper>

      <StyledCheckbox
        className="visually-hidden "
        type="checkbox"
        id="isRememberPassword"
        {...register("isRememberPassword")}
      />
      <StyledLabelForCheckbox
        className="lableCheckbox"
        htmlFor="isRememberPassword"
      >
        Запомнить пароль
      </StyledLabelForCheckbox>

      <StyledSubmitButton type="submit" disabled={isSubmitting}>
        Войти
      </StyledSubmitButton>
    </StyledForm>
  );
};

export default Login;
