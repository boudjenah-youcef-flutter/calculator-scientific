import { useState } from "react";
import DisplayWindow from "./DisplayWindow";
import KeysWindow from "./KeysWindow";

const Calculator = () => {
  const [expression, setExpression] = useState("");
  const [displayExp, setDisplayExp] = useState("");
  const [result, setResult] = useState("0");

  const scifun = {
    sin: Math.sin,
    cos: Math.cos,
    tan: Math.tan,
    ln: Math.log,
    log: Math.log10,
    π: Math.PI,
    e: Math.E,
    "^": "**",
    "√": Math.sqrt,
  };

  function calcresult() {
    if (expression.length !== 0) {
      try {
        // Use eval with care; sanitize if possible
        let computedResult = eval(expression);
        setResult(computedResult);
      } catch {
        setResult("An error occurred!");
      }
    } else {
      setResult("An error occurred!");
    }
  }

  function HandelBtn(value) {
    if (value === "AC") {
      setExpression("");
      setDisplayExp("");
      setResult("0");
    } else if (value === "DEL") {
      setDisplayExp(displayExp.slice(0, -1));
      setExpression(expression.slice(0, -1));
    } else if (scifun.hasOwnProperty(value)) {
      if (typeof scifun[value] === "function") {
        setExpression(expression + `${value}(`);
        setDisplayExp(displayExp + value + "(");
      } else {
        setExpression(expression + scifun[value]);
        setDisplayExp(displayExp + value);
      }
    } else if (value === "=") {
      calcresult();
    } else {
      setExpression(expression + value);
      setDisplayExp(displayExp + value);
    }
  }

  return (
    <div className="calculator">
      <DisplayWindow expression={displayExp} result={result} />
      <KeysWindow HandelBtn={HandelBtn} />
    </div>
  );
};

export default Calculator;
