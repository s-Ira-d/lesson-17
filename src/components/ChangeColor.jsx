import { useState } from "react";

export const ChangeColor = () => {
  const [color, setColor] = useState("red");

  return (
    <div>
      <div
        style={{
          backgroundColor: background - color,
          width: "100px",
          height: "100px",
        }}
      ></div>
      <input
        type="color"
        value={color}
        onChange={(e) => {
          setColor(e.target.value);
        }}
      />
    </div>
  );
};
