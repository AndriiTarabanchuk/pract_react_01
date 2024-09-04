import React, { useState } from "react";
import css from "./Counter.module.css";

const Counter: React.FC = () => {
  const [count, setCount] = useState<number>(0);
  const handleClickDecrease = (): void => {
    //point 5
    if (count - 1 < 0) {
      return;
    }
    //point 4
    setCount(count - 1);
  };
  const handleClickIncrease = (): void => {
    //point 3
    setCount(count + 1);
  };

  return (
    <div className={css.counter}>
      <h2 className={css.counter__title}>Counter</h2>
      <h4 className={css.counter__current}>Current value: {count}</h4>
      <div className={css.counter__boxBtn}>
        <button className={css.counter__btn} onClick={handleClickDecrease}>
          Decrease to 1
        </button>
        <button className={css.counter__btn} onClick={handleClickIncrease}>
          Increase to 1
        </button>
      </div>
    </div>
  );
};

export default Counter;
