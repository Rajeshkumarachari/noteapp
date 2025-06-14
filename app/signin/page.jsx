"use client";
import { signInWithEmailAndPassword } from "firebase/auth";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { auth } from "../firebase/config";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";

export default function SignIn() {
  const user = useSelector((store) => store?.user?.user);
  console.log(user);
  const router = useRouter();
  const [error, setError] = useState("");
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  useEffect(() => {
    if (user) {
      router.push("/");
    }
  }, [user]);

  function getLoginData(e) {
    const { id, value } = e.target;
    setLoginData((prev) => ({ ...prev, [id]: value }));
  }
  //console.log(loginData);

  const loginUser = async (e) => {
    e.preventDefault();
    setError("");
    const { email, password } = loginData;
    if (!email || !password) {
      setError("Email and password are required");
      return;
    }
    try {
      const loginUser = await signInWithEmailAndPassword(auth, email, password);
      router.push("/");
    } catch (error) {
      setError(error.message);
    }
  };
  return (
    <div className=" bg-red-50 h-[95vh] ">
      <div className=" flex mx-10 py-3 ">
        <p className=" text-gray-700">
          Homepage / <span className=" font-semibold"> Login Page</span>
        </p>
      </div>

      <div className="  flex items-center justify-center ">
        <div className="  border-red-500 border-2 m-2  w-[30%] rounded-xl ">
          <div className="bg-red-200 rounded-tl-xl rounded-tr-xl">
            <h1 className="mx-2">Login</h1>
          </div>
          <hr />
          <h1 className=" text-center font-bold text-2xl">Login</h1>
          <form action="" className=" m-3">
            <label>Email</label>
            <input
              type="email"
              id="email"
              placeholder="Email"
              value={loginData.email}
              onChange={getLoginData}
              className=" border w-full rounded-md px-2 "
            />
            <label>Password</label>
            <input
              type="password"
              id="password"
              placeholder="Password"
              value={loginData.password}
              onChange={getLoginData}
              className=" border w-full rounded-md px-2 "
            />
          </form>{" "}
          {error && (
            <p className=" text-center text-red-700 font-semibold text-sm">
              {error}{" "}
            </p>
          )}
          <div className=" flex justify-around my-3">
            <button
              onClick={loginUser}
              className=" bg-red-200 px-4  py-1 rounded-md cursor-pointer"
            >
              Login
            </button>
            <button className=" bg-blue-200 px-4 py-1 rounded-md cursor-pointer">
              <Link href={"/signup"}>Register</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
