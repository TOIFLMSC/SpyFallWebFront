import React from "react";

interface Props {
  playerName: string;
}

const PlayerItem: React.FC<Props> = ({ playerName }) => {
  return (
    <li>
      <p>{playerName}</p>
    </li>
  );
};

export default PlayerItem;
