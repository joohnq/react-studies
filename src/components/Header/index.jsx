import React from "react";
import './styles.css'

export function Header(props) {
    return (
        <header className="header__website">
            <strong>{props.name}</strong>
            <nav>
                <ul>
                    <li>{props.links[0]}</li>
                    <li>{props.links[1]}</li>
                    <li>{props.links[2]}</li>
                    <li>{props.links[3]}</li>
                </ul>
            </nav>
        </header>
    )
}