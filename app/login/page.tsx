"use client";

import Link from "next/link";
import React, { useState } from "react";
import Header from "../components/Header";
import { BsArrowRight } from "react-icons/bs";
import { AiOutlineGoogle } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import Image from "next/image";

function page() {
  const [currentForm, setCurrentForm] = useState("register");

  return (
    <main className="text-white min-h-screen">
      <Header />
      <div className="absolute top-16 bottom-0 inset-x-0 grid grid-cols-2">
        <div className="bg-loginBg bg-no-repeat bg-cover" />
        <div className="mx-24 my-12 bg-lighterBlack h-fit py-8">
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
                className={`pl-12 pr-6 py-2 rounded-50px z-40 -translate-x-10 transition-all duration-300 ease-linear ${
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
            <div>
              <Link href="/">
                <BsArrowRight />
              </Link>
            </div>
          </div>
          <Image
            src="assets/svg/or.svg"
            alt="or"
            width={561}
            height={25}
            className="w-full my-4"
          />
          <div className="flex ml-8">
            <button>
              <AiOutlineGoogle />
            </button>
            <button>
              <FaFacebookF />
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}

export default page;
