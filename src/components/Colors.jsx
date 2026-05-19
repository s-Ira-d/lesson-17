import { useState, useEffect } from "react";

export const Colors = () => {
  const colors = ["red", "blue", "green", "purple"];

  const [bgColor, setBgColor] = useState("white");

  const randomColor = () => {
    const randomIndex = Math.floor(Math.random() * colors.length);
    setBgColor(colors[randomIndex]);
  };

  return (
    <div
      style={{
        backgroundColor: bgColor,
        minHeight: "100vh",
        padding: "20px",
      }}
    >
      {colors.map((color) => (
        <button
          key={color}
          onClick={() => setBgColor(color)}
          style={{
            marginRight: "10px",
            padding: "10px 20px",
            cursor: "pointer",
          }}
        >
          {color}
        </button>
      ))}

      <button
        onClick={randomColor}
        style={{
          padding: "10px 20px",
          cursor: "pointer",
        }}
      >
        Random color
      </button>
    </div>
  );
};
