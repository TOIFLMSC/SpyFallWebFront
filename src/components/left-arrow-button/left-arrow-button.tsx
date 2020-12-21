import React from "react";
import "./left-arrow-button.css";

interface Props {
  clickHandler: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const LeftArrowButton: React.FC<Props> = ({clickHandler}) => {
  return (
    <button onClick={clickHandler} className="left-arrow-button">
      <i className="far fa-arrow-alt-circle-left"></i>
    </button>
  );
};

export default LeftArrowButton;
