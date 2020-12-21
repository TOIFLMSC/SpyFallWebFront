import React from "react";
import "./welcome-screen.css";
import MenuButton from "../../components/menu-button/menu-button";
import browserHistory from "../../browser-history";
import { AppRoute } from "../../const";

interface Props {
  history: any;
}

const WelcomeScreen: React.FC<Props> = ({history}) => {
  const redirectToCreateLobbyScreen = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    history.push(AppRoute.CREATE_LOBBY);
  };

  const redirectToConnectLobbyScreen = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    history.push(AppRoute.CONNECT);
  };

  const redirectToSettingsScreen = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    history.push(AppRoute.SETTINGS);
  };

  return (
    <section className="welcome">
      <div className="welcome__menu">
        <MenuButton
          text="Create Lobby"
          clickHandler={redirectToCreateLobbyScreen}
        />
        <MenuButton
          text="Connect"
          clickHandler={redirectToConnectLobbyScreen}
        />
        <MenuButton text="Settings" clickHandler={redirectToSettingsScreen} />
      </div>
    </section>
  );
};

export default WelcomeScreen;
