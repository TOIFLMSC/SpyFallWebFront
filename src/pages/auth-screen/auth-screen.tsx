import React, { SyntheticEvent, useState } from "react";
import { useDispatch } from "react-redux";
import "./auth-screen.css";
import Button from "react-bootstrap/Button";
import { axiosInstance } from "../../services/api";
import { Link } from "react-router-dom";
import { AppRoute } from "../../const";
import { changeAuth, setCurrentUser } from "../../store/user/actions";

interface Props {
  redirectTo: () => void;
  redirectToRegister: () => void;
}
const AuthScreen: React.FC<Props> = ({ redirectTo }) => {
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
      .post("/user/login", JSON.stringify(authData))
      .then((response) => {
        if (response.data.message !== "Logged in") throw response.data.message;
        localStorage.setItem("token", response.data.account.token);
        dispatch(
          setCurrentUser({
            login: username,
            token: response.data.account.token,
          })
        );
        localStorage.setItem("login", username);
        redirectTo();
      })
      .catch((error: string) => {
        setErrorMessage(error);
      });
  };
  return (
    <section className="login">
      <h2 className="login__title">Добро пожаловать в SpyFall!</h2>
      <p className="login__text">Войдите в свой аккаунт</p>
      {message}
      <form className="login__form" action="" onSubmit={handleSubmit}>
        <p className="login__field">
          <label className="login__label" htmlFor="login">
            Логин
          </label>
          <input
            className="login__input"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
            type="text"
            name="login"
          />
        </p>
        <p className="login__field">
          <label className="login__label" htmlFor="password">
            Пароль
          </label>
          <input
            className="login__input"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            type="password"
            name="password"
          />
          <span className="login__error">Неверный пароль</span>
        </p>
        <Button variant="primary" type="submit">
          Войти
        </Button>
      </form>
      <p>
        Нет аккаунта? <Link to={AppRoute.REGISTER}>Зарегистрируетесь</Link>
      </p>
    </section>
  );
};

export default AuthScreen;
