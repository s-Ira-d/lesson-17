import { useState } from "react";

export const Counter = () => {
  const [count, setCount] = useState(0);

  const Add = () => {
    if (count < 10) {
      setCount(count + 1);
    } else {
      console.log("Максимум досягнуто");
    }
  };

  const Minus = () => {
    if (count > 0) {
      setCount(count - 1);
    } else {
      console.log("Мінімум досягнуто");
    }
  };

  return (
    <div>
      <p>{count}</p>
      <button onClick={Add}>+</button>
      <button onClick={Minus}>-</button>
    </div>
  );
};
