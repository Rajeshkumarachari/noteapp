import React from "react";
import { useSelector } from "react-redux";
import NoteCard from "./NoteCard";

const DisplayNotes = () => {
  const notes = useSelector((store) => store.note.note);
  console.log(notes);
  return (
    <div className=" flex gap-2 flex-wrap">
      {notes &&
        notes.map((note, i) => <NoteCard key={i} data={note} index={i} />)}
    </div>
  );
};

export default DisplayNotes;
