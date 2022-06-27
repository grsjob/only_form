import React from "react";
import { useForm } from "react-hook-form";

const App = () => {
  const {
    register,
    formState: { errors, isSubmitting },
    watch,
    handleSubmit,
  } = useForm();
  return (
    <form>
      <label>
        Логин
        <input {...register("login", { required: true })} />
      </label>
      <label>
        Пароль
        <input {...register("password", { required: true })} />
      </label>
      <label>
        Запомнить пароль
        <input type="checkbox" />
      </label>
      <button>Войти</button>
    </form>
  );
};

export default App;
