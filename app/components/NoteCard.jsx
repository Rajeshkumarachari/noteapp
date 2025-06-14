import React from "react";
import { IoIosClose } from "react-icons/io";
import { FaRegEdit } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { deleteNote } from "../redux/noteSlice";

const NoteCard = ({ data, index }) => {
  console.log("key");
  const dispatch = useDispatch();
  return (
    <div className=" border w-[200px] rounded-lg h-[200px] ">
      <div className="bg-red-200 rounded-tl-lg rounded-tr-lg flex justify-between items-center">
        <h1 className=" px-3   ">{data.title} </h1>
        <div className="flex gap-4">
          <FaRegEdit className=" size-5 p- cursor-pointer  " />
          <IoIosClose
            onClick={() => dispatch(deleteNote(index))}
            className=" hover:bg-red-600 size-6 cursor-pointer rounded-tr-lg hover:text-white "
          />
        </div>
      </div>
      <hr />
      <h2 className="px-3">{data.description}</h2>
    </div>
  );
};

export default NoteCard;
