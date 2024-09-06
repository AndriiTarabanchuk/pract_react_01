import React, { useState } from "react";
import css from "./Calculate.module.css";
// type Value = "+" | "-" | "*" | "/";

const Calculate = () => {
  const [operation, setOperation] = useState("");
  const [value1, setValue1] = useState(0);
  const [value2, setValue2] = useState(0);
  const [result, setResult] = useState<string | number>(0);
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    switch (operation) {
      case "+":
        setResult(value1 + value2);
        break;
      case "-":
        setResult(value1 - value2);
        break;
      case "*":
        setResult(value1 * value2);
        break;
      case "/":
        setResult(value1 / value2);
        break;
      default:
        console.log("Operation not used..");
        setResult(0);
        break;
    }
  }
  function handleOperation(event: React.ChangeEvent<HTMLInputElement>): void {
    setOperation(event.target.value);
  }
  function handleValue1(event: React.ChangeEvent<HTMLInputElement>): void {
    setValue1(+event.target.value);
  }
  function handleValue2(event: React.ChangeEvent<HTMLInputElement>): void {
    setValue2(+event.target.value);
  }

  return (
    <div className={css.calculate}>
      <h2 className={css.calculate__title}> Calculate</h2>
      <form className={css.calculate__form} onSubmit={handleSubmit}>
        <label>
          <span> Input + , - , * , /</span>
          <input type="text" value={operation} onChange={handleOperation} />
        </label>
        <label>
          <span>Input value 1 </span>
          <input type="number" value={value1} onChange={handleValue1} />
        </label>
        <label>
          <span>Input value 2 </span>
          <input type="number" value={value2} onChange={handleValue2} />
        </label>
        <h4>result -{result}</h4>
        <button type="submit">Calculate</button>
      </form>
    </div>
  );
};

export default Calculate;
