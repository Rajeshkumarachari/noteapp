"use client";
import { createUserWithEmailAndPassword } from "firebase/auth";
import Link from "next/link";
import React, { useState } from "react";
import { auth } from "../firebase/config";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { setUser } from "../redux/userSlice";
export default function SignUp() {
  const [error, setError] = useState("");
  const router = useRouter();
  const dispatch = useDispatch();
  const [registerData, setRegisterData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  function getUserData(e) {
    const { id, value } = e.target;
    setRegisterData((prev) => ({ ...prev, [id]: value }));
  }
  const handleSignUp = async (e) => {
    setError("");
    e.preventDefault();
    const { username, email, password, confirmPassword } = registerData;
    if (username.trim() === "") {
      setError("User name should not be empty");
      return;
    } else if (username.length <= 3) {
      setError("User name should be minimum 4 letters ");
      return;
    }
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        username,
        email,
        password
      );
      dispatch(setUser(username));
      router.push("/");
    } catch (error) {
      setError(error.message);
    }
  };
  //console.log(registerData);
  return (
    <div className=" bg-red-50 h-[95vh] ">
      <div className=" flex mx-10 py-3 ">
        <p className=" text-gray-700">
          Homepage / <span className=" font-semibold"> SignUp Page</span>
        </p>
      </div>

      <div className="  flex items-center justify-center ">
        <div className="  border-red-500 border-2 m-2  w-[30%] rounded-xl ">
          <div className="bg-red-200 rounded-tl-xl rounded-tr-xl">
            <h1 className="mx-2">SignUp</h1>
          </div>
          <hr />
          <h1 className=" text-center font-bold text-2xl">SignUp</h1>
          <form action="" className=" m-3">
            <label>Username</label>
            <input
              type="text"
              id="username"
              placeholder="username"
              value={registerData.username}
              onChange={getUserData}
              className=" border w-full rounded-md px-2 "
            />
            <label>Email</label>
            <input
              type="email"
              id="email"
              placeholder="Email"
              value={registerData.email}
              onChange={getUserData}
              className=" border w-full rounded-md px-2 "
            />
            <label>Password</label>
            <input
              type="password"
              id="password"
              placeholder="Password"
              value={registerData.password}
              onChange={getUserData}
              className=" border w-full rounded-md px-2 "
            />
            <label>Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              placeholder=" Confirm Password"
              value={registerData.confirmPassword}
              onChange={getUserData}
              className=" border w-full rounded-md px-2 "
            />
          </form>
          {error && (
            <p className=" text-center text-red-700 font-semibold text-sm">
              {error}{" "}
            </p>
          )}
          <div className=" flex justify-around my-3">
            <button
              onClick={handleSignUp}
              className=" bg-green-200 px-4  py-1 rounded-md cursor-pointer"
            >
              Register
            </button>
            <button className=" bg-red-200 px-4 py-1 rounded-md cursor-pointer">
              <Link href={"/signin"}>Login</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
