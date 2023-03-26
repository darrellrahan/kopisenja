import {
  footerAbout,
  footerContact,
  footerLegal,
  footerSocials,
} from "@/app/data";
import Link from "next/link";
import React from "react";
import { BsArrowRight } from "react-icons/bs";

function Footer() {
  return (
    <footer className="absolute bottom-auto inset-x-16 pt-32 pb-8 space-y-24">
      <div className="flex justify-between">
        <div className="space-y-12 text-center w-72">
          <div className="space-y-4">
            <p className="font-light text-xl">Subscribe Newsletter</p>
            <div className="flex items-center">
              <input
                type="email"
                className="bg-transparent border border-grey placeholder:text-grey p-2 w-full"
                placeholder="Alamat Email"
              />
              <button
                type="submit"
                className="bg-gold text-1.6rem font-bold text-black p-2 transition-all duration-300 ease-linear hover:bg-gold99"
              >
                <BsArrowRight />
              </button>
            </div>
          </div>
          <div>
            <div className="space-y-4">
              <p className="font-light text-xl">Sosial Media</p>
              <div className="flex items-center justify-center gap-2">
                {footerSocials.map((data) => (
                  <Link
                    key={data.id}
                    href={data.url}
                    className="text-3xl transition-all duration-300 ease-linear hover:text-gold"
                  >
                    <data.icon />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-16">
          <div className="space-y-4">
            <h3 className="font-extrabold text-lg">Kebijakan</h3>
            <ul className="space-y-2.5">
              {footerLegal.map((data) => (
                <li>
                  <Link
                    href={data.url}
                    key={data.id}
                    className="text-grey text-lg transition-all duration-300 ease-linear hover:text-gold"
                  >
                    {data.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="font-extrabold text-lg">Tentang</h3>
            <ul className="space-y-2.5">
              {footerAbout.map((data) => (
                <li>
                  <Link
                    href={data.url}
                    key={data.id}
                    className="text-grey text-lg transition-all duration-300 ease-linear hover:text-gold"
                  >
                    {data.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="font-extrabold text-lg">Kontak</h3>
            <ul className="space-y-2.5">
              {footerContact.map((data) => (
                <li key={data.id} className="text-grey">
                  {!data.url ? (
                    <p className="flex items-center gap-4">
                      <span className="text-2xl">
                        <data.icon />
                      </span>
                      <span className="text-lg">{data.text}</span>
                    </p>
                  ) : (
                    <Link
                      href={data.url}
                      className="flex items-center gap-4 transition-all duration-300 ease-linear hover:text-gold"
                    >
                      <span className="text-2xl">
                        <data.icon />
                      </span>
                      <span className="text-lg">{data.text}</span>
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="space-y-6">
        <hr className="border border-gold" />
        <p className="text-grey text-center">
          &copy; {new Date().getFullYear()} Kopi Senja
        </p>
      </div>
    </footer>
  );
}

export default Footer;
