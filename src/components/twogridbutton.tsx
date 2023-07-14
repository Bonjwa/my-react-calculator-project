import React from "react";
import "../App.css";
import { type ButtonProps } from "./onegridbutton";

const TwoGridButton: React.FC<ButtonProps> = function({ symbol, func }){
  return <div className="grid-item-2" onClick={()=>{func(symbol)}}>{symbol}</div>;
};

export default TwoGridButton;

//hello github
