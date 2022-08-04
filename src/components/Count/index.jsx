import React from "react";
import "./styles.css";

export function Count(){
    return (
        <div className="counter__container">
            <p>
                <strong>Counter:</strong> 0
            </p>
            <button>Adicionar</button>
        </div>
    )
}