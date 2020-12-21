import React from "react";
import { GameState } from "../../store/game";
import "./location-item.css";

interface Props {
  location: string;
  clickable: boolean;
  token: string;
  login: string;
  updateGameState: (lobby: GameState) => void;
}

const LocationItem: React.FC<Props> = ({ location, clickable, login, token, updateGameState }) => {
  const classes = clickable ? "location location_btn" : "location"
  const clickHandler = (event: React.MouseEvent<HTMLLIElement>) => {
    fetch(`/lobby/checklocation/${token}`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify({ login: login, location: location }),
    })
    .then(response => response.json())
    .then(response => updateGameState(response.lobby))
  }
  return <li onClick={clickable ? clickHandler : () => ('')} className={classes} >{location}</li>;
};

export default LocationItem;
