import React, { useEffect, useState } from "react";
import "./styles.css";

export class Count extends React.Component{
    render(){
        <div className="counter__container">
            <p>
                <strong>Counter:</strong> {count}
            </p>
            <button 
                onClick={() => setCount(count + 1)}> Adicionar
            </button>
        </div>
    }
}   
