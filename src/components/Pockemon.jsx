import { error } from "@pnotify/core";
import { useState, useEffect } from "react";

export const Pockemon = () => {
  const [pockemon, setPockemon] = useState([]);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=10")
      .then((res) => res.json())
      .then((res) => setPockemon(res.results))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      {pockemon.map((item) => (
        <div key={item.name}>{item.name}</div>
      ))}
    </div>
  );
};
