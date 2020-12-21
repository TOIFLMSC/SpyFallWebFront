import React, { SyntheticEvent, useState } from "react";
import { useDispatch } from "react-redux";
import "./register-screen.css";
import Button from "react-bootstrap/Button";
import { axiosInstance } from "../../services/api";
import { AppRoute } from "../../const";
import { Link } from "react-router-dom";

interface Props {
  redirectTo: () => void;
}

const RegisterScreen: React.FC<Props> = ({ redirectTo }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const dispatch = useDispatch();
  let message = errorMessage ? (
    <p className="error_message">{errorMessage}</p>
  ) : null;
  if (errorMessage) {
  }

  const handleSubmit = (event: SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();
    const authData = {
      login: username,
      password: password,
    };
    axiosInstance
      .post("/user/new", JSON.stringify(authData))
      .then((response) => {
        if (response.data.message !== "Account has been created")
          throw response.data.message;
        redirectTo();
      })
      .catch((error: any) => {
        setErrorMessage(error);
      });
  };
  return (
    <section className="register">
      <h2 className="register__title">Добро пожаловать в SpyFall!</h2>
      <p className="register__text">Регистрация</p>
      {message}
      <form className="register__form" action="" onSubmit={handleSubmit}>
        <p className="register__field">
          <label className="register__label" htmlFor="register">
            Логин
          </label>
          <input
            className="register__input"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
            type="text"
            name="login"
          />
        </p>
        <p className="register__field">
          <label className="register__label" htmlFor="password">
            Пароль
          </label>
          <input
            className="register__input"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            type="password"
            name="password"
          />
          <span className="register__error">Неверный пароль</span>
        </p>
        <Button variant="primary" type="submit">
          Регистрация
        </Button>
      </form>
      <p>
        Есть аккаунт? <Link to={AppRoute.LOGIN}>Войдите</Link>
      </p>
    </section>
  );
};

export default RegisterScreen;
