"use client";

import React, { useState } from "react";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import { AiOutlineGoogle } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";

function FormArea() {
  const [currentForm, setCurrentForm] = useState("register");

  return (
    <div className="mx-24 bg-lighterBlack h-fit py-8">
      <div className="mx-8 space-y-8">
        <div className="flex justify-center font-bold">
          <button
            className={`px-6 py-2 rounded-50px z-50 transition-all duration-300 ease-linear ${
              currentForm === "register"
                ? "bg-gold"
                : "bg-darkerBlack shadow-loginToggler"
            }`}
            onClick={() => setCurrentForm("register")}
          >
            Daftar
          </button>
          <button
            className={`pl-14 pr-6 py-2 rounded-50px z-40 -translate-x-10 transition-all duration-300 ease-linear ${
              currentForm === "login"
                ? "bg-gold"
                : "bg-darkerBlack shadow-loginToggler"
            }`}
            onClick={() => setCurrentForm("login")}
          >
            Masuk
          </button>
        </div>
        <div className="flex flex-col gap-8">
          {currentForm === "register" && (
            <input
              type="text"
              placeholder="Nama"
              className="bg-darkerBlack shadow-loginToggler rounded-50px p-4 pl-6 text-lg placeholder:text-grey"
            />
          )}
          <input
            type="email"
            placeholder="Alamat Email"
            className="bg-darkerBlack shadow-loginToggler rounded-50px p-4 pl-6 text-lg placeholder:text-grey"
          />
          <input
            type="password"
            placeholder="Kata Sandi"
            className="bg-darkerBlack shadow-loginToggler rounded-50px p-4 pl-6 text-lg placeholder:text-grey"
          />
        </div>
        <div className="flex justify-center">
          <Link
            href="/"
            className="text-3xl text-black w-14 h-14 rounded-full bg-gold flex items-center justify-center hover:opacity-75 transition-all duration-300 ease-linear"
          >
            <BsArrowRight />
          </Link>
        </div>
      </div>
      <div className="my-8 flex items-center justify-between gap-4">
        <hr className="border border-grey w-full opacity-50" />
        <span className="text-grey text-sm">OR</span>
        <hr className="border border-grey w-full opacity-50" />
      </div>
      <div className="flex mx-8 justify-center gap-4">
        <button className="text-xl text-gold w-12 h-12 rounded-full bg-darkerBlack shadow-loginToggler flex items-center justify-center hover:opacity-50 transition-all duration-300 ease-linear">
          <AiOutlineGoogle />
        </button>
        <button className="text-xl text-gold w-12 h-12 rounded-full bg-darkerBlack shadow-loginToggler flex items-center justify-center hover:opacity-50 transition-all duration-300 ease-linear">
          <FaFacebookF />
        </button>
      </div>
    </div>
  );
}

export default FormArea;
