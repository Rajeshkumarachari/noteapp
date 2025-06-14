"use client";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CiStickyNote } from "react-icons/ci";
import Note from "./components/Note";
import DisplayNotes from "./components/DisplayNotes";
import { MdOutlineClear } from "react-icons/md";
import { deleteAllNotes } from "./redux/noteSlice";
const Home = () => {
  const username = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  return (
    <div className=" h-screen bg-red-50">
      <div className="">
        <p className=" text-red-400 mx-5">
          Homepage / <span className=" font-semibold"> Your Notes</span>
        </p>
        <div className="flex">
          {username && (
            <p className=" text-2xl font-semibold mx-10 my-3">
              Good morning {username.user}{" "}
            </p>
          )}
          <h1
            className=" flex  items-center gap-1 cursor-pointer hover:text-underline"
            onClick={() => setShow(!show)}
          >
            Click to Create a note
            <CiStickyNote className=" bg-blue-200  size-10 rounded cursor-pointer p-1 " />
          </h1>

          <h1
            onClick={() => dispatch(deleteAllNotes())}
            className=" flex mx-10 my-3 p-2 rounded hover:bg-red-200 cursor-pointer font-semibold"
          >
            Clear all Notes
          </h1>
        </div>
        <div className="">{show && <Note />}</div>
        <DisplayNotes />
      </div>
    </div>
  );
};

export default Home;
