import React, { useState } from "react";
import "./create-lobby-component.css";
import Button from "react-bootstrap/Button";
import LeftArrowButton from "../left-arrow-button/left-arrow-button";
import RightArrowButton from "../right-arrow-button/right-arrow-button";
import { SetGameState } from "../../store/game/";
import { useDispatch } from "react-redux";
import { AppRoute } from "../../const";

interface Props {
  history: any;
}

const CreateLobbyComponent: React.FC<Props> = ({ history }) => {
  const [amountSpies, setAmountSpies] = useState(1);
  const [amountPlayers, setAmountPlayers] = useState(4);
  const dispatch = useDispatch();

  const createLobbyHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    console.log("hellop");
    const lobbyData = {
      amountpl: +amountPlayers,
      amountspy: +amountSpies,
    };

    fetch("/lobby/create", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(lobbyData),
    })
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        const lobby = response.lobby;
        dispatch(
          SetGameState({
            token: lobby.token,
            locations: lobby.locations,
            currentloc: lobby.currentloc,
            amountpl: lobby.amountpl,
            amountspy: lobby.amountspy,
            spyplayers: lobby.spyplayers,
            allplayers: lobby.allplayers,
            status: lobby.status,
          })
        );
        history.push(AppRoute.GAME);
      });
  };

  return (
    <section className="create_lobby">
      <label>
        <span>Amount of players</span>
        <span className="create_lobby__amount">
          <LeftArrowButton
            clickHandler={() => setAmountPlayers(amountPlayers - 1)}
          />
          <input disabled type="text" value={amountPlayers} />
          <RightArrowButton
            clickHandler={() => setAmountPlayers(amountPlayers + 1)}
          />
        </span>
      </label>
      <label>
        <span>Amount of spies</span>
        <span className="create_lobby__amount">
          <LeftArrowButton
            clickHandler={() => setAmountSpies(amountSpies - 1)}
          />
          <input disabled type="text" value={amountSpies} />
          <RightArrowButton
            clickHandler={() => setAmountSpies(amountSpies + 1)}
          />
        </span>
      </label>
      <Button variant="success" onClick={createLobbyHandler}>
        Create
      </Button>{" "}
    </section>
  );
};

export default CreateLobbyComponent;
