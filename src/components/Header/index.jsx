import React from "react";
import "./styles.css";
import { Menu } from "../Menu";

export function Header(props) {
  return (
    <header className="header__website">
      <strong>{props.name}</strong>
      <Menu links={props.links} />
    </header>
  );
}
