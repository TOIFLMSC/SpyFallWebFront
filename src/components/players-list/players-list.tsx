import React from "react";
import "./players-list.css"
import PlayerItem from "../player-item/player-item";

interface Props {
  playersList: Array<string>;
}

const PlayersList: React.FC<Props> = ({ playersList }) => {
  const players = playersList.map((player) => (
    <PlayerItem key={player} playerName={player} />
  ));
  return (
    <section className="players">
      <ul className="players__list">{players}</ul>
    </section>
  );
};

export default PlayersList;
