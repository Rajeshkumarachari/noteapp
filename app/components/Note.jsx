import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addNote } from "../redux/noteSlice";

const Note = () => {
  const dispatch = useDispatch();
  const [noteData, setNoteData] = useState({
    title: "",
    description: "",
  });
  function getNote(e) {
    const { id, value } = e.target;
    setNoteData((prev) => ({ ...prev, [id]: value }));
  }
  console.log(noteData);

  function addNoteToStore() {
    if (!noteData.description || !noteData.title) {
      return;
    }
    dispatch(addNote(noteData));
    setNoteData({ title: "", description: "" });
  }
  return (
    <div className="flex  items-center  justify-center my-3">
      <div className="  border rounded-lg   w-[30%]">
        <div className="flex justify-between items-center  w-full rounded-lg  bg-red-100">
          <p className=" ">Add Notes</p>
          <hr />
        </div>
        <div className="">
          <form action="" className=" mx-5">
            <input
              type="text"
              value={noteData.title}
              id="title"
              onChange={getNote}
              placeholder="Title"
              className=" bg-white w-full border my-4 rounded-lg px-2 "
            />
            <textarea
              className=" w-full bg-white border rounded-lg"
              value={noteData.description}
              id="description"
              onChange={getNote}
            ></textarea>
          </form>
          <div className=" flex justify-end gap-4 my-4">
            <button
              onClick={addNoteToStore}
              className=" bg-green-500 px-9 rounded-lg py-1 text-white cursor-pointer"
            >
              Add
            </button>
            <button className="bg-red-500 px-9 rounded-lg py-1 mr-2 text-white cursor-pointer">
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Note;
