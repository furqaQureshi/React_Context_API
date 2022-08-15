import React from "react";
import { useContext } from "react";
import NoteContext from "../Context/NoteContext";

function Home() {
  const a = useContext(NoteContext);
  return (
    <div>
      <h1>hii my name is {a.name}</h1>
    </div>
  );
}

export default Home;
