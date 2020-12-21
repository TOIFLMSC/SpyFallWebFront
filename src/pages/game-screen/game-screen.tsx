import React, { useEffect, useState } from "react";
import "./game-screen.css";
import Button from "react-bootstrap/Button";
import { useSelector, useDispatch } from "react-redux";
import { ApplicationState } from "../../store";
import LocationItem from "../../components/location-item/location-item";
import ClipboardIcon from "../../assets/icons/clipboard-icon.svg";
import PlayersList from "../../components/players-list/players-list";
import { SetGameState, GameState } from "../../store/game/";

interface Props {}

const GameScreen: React.FC<Props> = (props) => {
  const gameData = useSelector((state: ApplicationState) => state.game);
  const user = useSelector((state: ApplicationState) => state.user);
  const { login } = useSelector((state: ApplicationState) => state.user.user);
  const dispatch = useDispatch();
  const isAdmin = gameData.status === "Created";

  const gameStartHandler = () => {
    fetch(`/lobby/start/${gameData.token}`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json;charset=utf-8",
      },
    }).then((response) => console.log(response));
  };
  let role = "";
  let clickable = false;
  let playersList = null;
  let startButton = isAdmin ? (
      <Button variant="success" onClick={gameStartHandler}>
        Start
      </Button>
  ) : null;
  if (gameData.status === "Started") {
    if (gameData.currentloc === "") clickable = true;
    startButton = null;
    playersList = <PlayersList playersList={gameData.allplayers} />;
    role = gameData.currentloc === "" ? "Spy" : "Peaceful";
    fetch(`/lobby/checkresult/${gameData.token}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((response) => updateGameState(response.lobby));
  }

  if (gameData.status === "Spy won") {
    alert("Spy won");
    sessionStorage.clear();
  }

  if (gameData.status === "Peaceful won") {
    alert("Peaceful won");
    sessionStorage.clear();
  }

  const updateGameState = (lobby: GameState) => {
    console.log("update!");
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
  };

  useEffect(() => {
    if (!sessionStorage.getItem("isConnecting")) {
      if (isAdmin) {
        fetch(`/lobby/adminconnect/${gameData.token}`, {
          method: "POST",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
            "Content-Type": "application/json;charset=utf-8",
          },
          body: JSON.stringify({ login: login }),
        })
          .then((response) => response.json())
          .then((response) => {
            updateGameState(response.lobby);
          });
      } else {
        fetch(`/lobby/connect/${gameData.token}`, {
          method: "POST",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
            "Content-Type": "application/json;charset=utf-8",
          },
          body: JSON.stringify({ login: login }),
        })
          .then((response) => response.json())
          .then((response) => {
            updateGameState(response.lobby);
          });
      }
      sessionStorage.setItem("isConnecting", "true");
    }
  }, []);

  const copyClickHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    navigator.clipboard.writeText(gameData.token);
  };

  console.log(gameData);
  const locationItems = gameData.locations.map((location, index) => {
    return (
      <LocationItem
        key={location + index}
        location={location}
        clickable={clickable}
        token={gameData.token}
        login={login}
        updateGameState={updateGameState}
      />
    );
  });
  return (
    <section className="game">
      {role ? (
        <p className="game__role">
          You are <span style={{ fontWeight: "bold" }}>{role}</span>
        </p>
      ) : null}
      <label className="game__token">
        Game Token: <input disabled type="text" value={gameData.token} />
        <button className="clipboard-btn" onClick={copyClickHandler}>
          <img className="svg-icon" src={ClipboardIcon} />
        </button>
      </label>
      <ul className="game__list">{locationItems}</ul>
      {startButton}
      {playersList}
    </section>
  );
};

export default GameScreen;
