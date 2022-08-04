import React from "react";
import "./styles.css";

export function Menu(props) {

  const linksList = props.links.map((element, index) => (
    <li key={index}>{element}</li>
  ))

  return (
    <nav>
      <ul>
        {linksList}
      </ul>
    </nav>
  );
}
