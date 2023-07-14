import { useState } from "react";
import "./App.css";
import OneGridButton from "./components/onegridbutton";
import TwoGridButton from "./components/twogridbutton";

function App() {
  const [cOperand, setCcOperand] = useState<string>("");
  const [result, setResult] = useState<string>("");

  function inputButton(button: string) {
    //returns the selected button if screen is showing blank or 0
    if (cOperand == "" || cOperand == "0") {
      return setCcOperand(button);
    }

    //if the last digit is 0, simply adds the selected button to the screen
    if (cOperand.slice(-1)=="0"){
      return setCcOperand(cOperand+button)
    }
    
    //if the screen's last digit is a number, add the selected button to the screen
    if (parseFloat(cOperand.slice(-1))) {
      return setCcOperand(cOperand + button);
    }

    if (button=="0"){
      return setCcOperand(cOperand + button)
    }

    //if the last digit is not a number and the selected digit is a number, 
    if (!parseFloat(cOperand.slice(-1)) && !parseFloat(button)) {
      return cOperand;
    } else {
      return setCcOperand(cOperand + button);
    }
  }

  function allclear(): void {
    setCcOperand("");
    setResult("");
  }

  function deleteLast(): void {
    setCcOperand(cOperand.slice(0, -1));
    setResult("");
  }

  function evaluate() {

    //current bug with the calculator, when running the eval function on leading zeroes, it throws an error.
    if (cOperand.slice(-1) == "0") {
      console.log("0 detected");
      return setResult(String(eval(cOperand)));
    }
    if (!parseFloat(cOperand.slice(-1))) {
      return setResult("Invalid Syntax");
    }
    try {
      setCcOperand(String(eval(cOperand)));
      setResult(String(eval(cOperand)));
    } catch (error) {
      setResult(`Invalid Syntax: ${error}`)
    }
    
  }

  const buttonCharacters: string[] = [
    "+",
    "1",
    "2",
    "3",
    "-",
    "4",
    "5",
    "6",
    "*",
    "7",
    "8",
    "9",
    "/",
  ];

  return (
    <>
      <div className="grid-container">
        <div className="grid-item-screen">
          <div className="previous-operand">{cOperand}</div>
          <div className="current-operand">{result}</div>
        </div>
        <TwoGridButton symbol={"AC"} func={allclear}/>
        <OneGridButton symbol="DEL" func={deleteLast} />
        {buttonCharacters.map((string: string): JSX.Element => {
          return <OneGridButton symbol={string} func={inputButton} />;
        })}
        <TwoGridButton symbol={"0"} func={inputButton}/>
        <OneGridButton symbol="." func={inputButton} />
        <OneGridButton symbol="=" func={evaluate} />
      </div>
    </>
  );
}

export default App;
