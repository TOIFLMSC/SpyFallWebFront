import React from "react";
import { Switch, Route, Router as BrowserRouter } from "react-router-dom";
import RegisterScreen from "./pages/register-screen/register-screen";
import browserHistory from "./browser-history";
import { AppRoute } from "./const";
import AuthScreen from "./pages/auth-screen/auth-screen";
import PrivateRoute from "./components/private-route/private-route";
import WelcomeScreen from "./pages/welcome-screen/welcome-screen";
import CreateLobby from "./pages/create-lobby/create-lobby";
import GameScreen from "./pages/game-screen/game-screen";

import { useSelector } from "react-redux";
import { ApplicationState } from "./store/";
import ConnectScreen from "./pages/connect-screen/connect-screen";

interface Props {}

const App: React.FC<Props> = () => {
  const isAuthenticated = useSelector(
    (state: ApplicationState) => state.user.isAuthenticated
  );
  sessionStorage.setItem("isConnecting", "");
  return (
    <BrowserRouter history={browserHistory}>
      <Switch>
        <Route
          // exact
          path={AppRoute.LOGIN}
          render={({ history }) => (
            <AuthScreen
              redirectTo={() => history.push(AppRoute.ROOT)}
              redirectToRegister={() => history.push(AppRoute.REGISTER)}
            />
          )}
        />
        <Route
          path={AppRoute.REGISTER}
          render={({ history }) => (
            <RegisterScreen redirectTo={() => history.push(AppRoute.LOGIN)} />
          )}
        />
        <PrivateRoute
          path={AppRoute.CREATE_LOBBY}
          render={({ history }: any) => {
            return <CreateLobby history={history} />;
          }}
        />
        <PrivateRoute
          path={AppRoute.GAME}
          render={({ history }: any) => {
            return <GameScreen />;
          }}
        />
        <PrivateRoute
          path={AppRoute.CONNECT}
          render={({ history }: any) => {
            return <ConnectScreen history={history} />;
          }}
        />
        <PrivateRoute
          path={AppRoute.ROOT}
          render={({ history }: any) => {
            return <WelcomeScreen history={history} />;
          }}
        />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
