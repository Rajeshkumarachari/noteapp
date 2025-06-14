import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <nav className="bg-blue-200 h-10 flex justify-between text-blue-500 font-semibold">
      <div className=" flex items-center mx-20">
        <h1>Keep Notes</h1>
      </div>
      <div className="flex gap-2 items-center mx-10">
        <h1 className=" cursor-pointer">About</h1>
        <h1 className=" cursor-pointer">Notes</h1>
        <h1 className=" cursor-pointer">Account</h1>
        <Link href={"/signin "}>
          <h1 className=" cursor-pointer">Login</h1>
        </Link>
      </div>
    </nav>
  );
}
