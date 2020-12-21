import React from "react";
import "./right-arrow-button.css";

interface Props {
  clickHandler: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const RightArrowButton: React.FC<Props> = ({clickHandler}) => {
  return (
    <button onClick={clickHandler} className="right-arrow-button">
      <i className="far fa-arrow-alt-circle-right"></i>
    </button>
  );
};

export default RightArrowButton;
