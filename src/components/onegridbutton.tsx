import React from "react";
import "../App.css";
interface ButtonProps {
  symbol: string;
  func: (string: string) => void;
}

const OneGridButton: React.FC<ButtonProps> = ({ symbol, func }) => {
  return (
    <div
      className="grid-item"
      onClick={() => {
        func(symbol);
      }}
    >
      {symbol}
    </div>
  );
};

export default OneGridButton;
