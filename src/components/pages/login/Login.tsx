import React, { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { IUser } from "../../../types/user";
import { store } from "../../../state/store";
import { logIn } from "../../../state/slices/AppSlice";
import { useNavigate } from "react-router";
import { setCurrentUser } from "../../../state/slices/UserSlice";
import {
  StyledCheckbox,
  StyledError,
  StyledForm,
  StyledInput,
  StyledInputWrapper,
  StyledLabelForCheckbox,
  StyledLableForInput,
  StyledServerError,
  StyledSubmitButton,
} from "./loginStyles";
import { checkAuth } from "../../../backend/backend";
import { useStore } from "../../../state/storeHooks";

const Login = () => {
  const { isAuthorized } = useStore(({ app }) => app);
  const [serverError, setServerError] = useState(false);
  const [invalidUser, setInvalidUser] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    if (isAuthorized) {
      navigate("/profile");
    }
  }, [isAuthorized]);
  const {
    register,
    formState: { errors, isSubmitting },
    handleSubmit,
    control,
  } = useForm<IUser>({ defaultValues: { login: "" } });

  const onSubmit = (data: IUser) => {
    const user = checkAuth(data);
    if (user) {
      if (data.isRememberMe) {
        localStorage.setItem("user", JSON.stringify(data));
      }
      store.dispatch(logIn());
      store.dispatch(setCurrentUser(user.login));

      navigate("/profile");
    } else {
      setServerError(true);
      setInvalidUser(data.login);
    }
  };

  return (
    !isAuthorized && (
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        {serverError && (
          <StyledServerError>
            Пользователя {invalidUser} не существует
          </StyledServerError>
        )}
        <StyledLableForInput>Логин</StyledLableForInput>
        <Controller
          name="login"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <StyledInputWrapper>
              <StyledInput {...field} errors={errors.login} />
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
          {...register("isRememberMe")}
        />
        <StyledLabelForCheckbox
          className="lableCheckbox"
          htmlFor="isRememberPassword"
        >
          Запомнить меня
        </StyledLabelForCheckbox>

        <StyledSubmitButton type="submit" disabled={isSubmitting}>
          Войти
        </StyledSubmitButton>
      </StyledForm>
    )
  );
};

export default Login;
