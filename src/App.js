import { useState } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const clearHandler = () => {
    setResult("");
    setInput("");
  };

  const backSpaceHandler = () => {
    setResult("");
    setInput(input.slice(0, -1));
  };
  const resultCheckHandler = () => {
    setResult(eval(input).toString());
  };

  const inputClickHandler = (e) => {
    setInput(input.concat(e.target.name));
  };

  return (
    <div className="container">
      <div className="resultScreen">
        <form>
          <input
            type="text"
            value={input}
            readOnly
            className={`${result ? "inputSmall" : "inputLarge"}`}
          />
        </form>
        {result && <div className="resultDisplay">{result}</div>}
      </div>
      <div className="buttons">
        <button
          id="clearBtn"
          name="clear"
          onClick={clearHandler}
          className="colored"
        >
          clear
        </button>
        <button name="c" onClick={backSpaceHandler} className="colored">
          C
        </button>
        <button name="/" onClick={inputClickHandler} className="colored">
          &divide;
        </button>
        <button name="7" onClick={inputClickHandler}>
          7
        </button>
        <button name="8" onClick={inputClickHandler}>
          8
        </button>
        <button name="9" onClick={inputClickHandler}>
          9
        </button>
        <button name="*" onClick={inputClickHandler} className="colored">
          &times;
        </button>
        <button name="4" onClick={inputClickHandler}>
          4
        </button>
        <button name="5" onClick={inputClickHandler}>
          5
        </button>
        <button name="6" onClick={inputClickHandler}>
          6
        </button>
        <button name="-" onClick={inputClickHandler} className="colored">
          &ndash;
        </button>
        <button name="1" onClick={inputClickHandler}>
          1
        </button>
        <button name="2" onClick={inputClickHandler}>
          2
        </button>
        <button name="3" onClick={inputClickHandler}>
          3
        </button>
        <button name="+" onClick={inputClickHandler} className="colored">
          +
        </button>
        <button name="0" onClick={inputClickHandler}>
          0
        </button>
        <button name="." onClick={inputClickHandler}>
          .
        </button>
        <button
          id="equalToBtn"
          name="="
          onClick={resultCheckHandler}
          className="colored"
        >
          =
        </button>
      </div>
    </div>
  );
}

export default App;
