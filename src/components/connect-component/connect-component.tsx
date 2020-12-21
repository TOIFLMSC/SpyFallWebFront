import React, { useState } from "react";
import "./connect-component.css";
import Button from "react-bootstrap/Button";
import { ChangeGameToken } from "../../store/game/";
import { useDispatch } from "react-redux";
import { AppRoute } from "../../const";

interface Props {
  history: any;
}

const ConnectComponent: React.FC<Props> = ({ history }) => {
  const [gameToken, setGameToken] = useState("");
  const dispatch = useDispatch();

  const connectLobbyHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    dispatch(ChangeGameToken(gameToken));
    history.push(AppRoute.GAME);
  };

  return (
    <section className="connect_lobby">
      <label>
        Token:{" "}
        <input
          type="text"
          value={gameToken}
          onChange={(event) => setGameToken(event.target.value)}
        />
      </label>
      <Button variant="success" onClick={connectLobbyHandler}>
        Connect
      </Button>{" "}
    </section>
  );
};

export default ConnectComponent;
