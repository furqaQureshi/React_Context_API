import React from "react";
import NoteContext from "./NoteContext";

function NoteState(props) {
  const light = {
    'name': "Furqan",
    'class': 5,
  };
  return (
    <NoteContext.Provider value={light}>
        {props.children}
        </NoteContext.Provider>
  );
}
export default NoteState;
