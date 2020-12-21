import React from "react";
import "./menu-button.css";

interface Props {
  text: string;
  clickHandler: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const MenuButton: React.FC<Props> = ({ text, clickHandler }) => {
  return (
    <button className="welcome__menu__button" onClick={clickHandler}>
      {text}
    </button>
  );
};

export default MenuButton;
