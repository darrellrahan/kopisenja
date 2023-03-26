import React from "react";
import Image from "next/image";
import { team } from "../../data";
import Link from "next/link";

function Team() {
  return (
    <div className="text-white space-y-8 py-8">
      <Image
        src="assets/svg/tim-line.svg"
        alt="Kopi Senja"
        width={1239}
        height={58}
        className="w-full"
      />
      <div className="flex justify-center gap-48">
        {team.map((person) => (
          <div key={person.id} className="space-y-6">
            <div>
              <Image
                src={person.image}
                alt={person.name}
                width={200}
                height={200}
              />
            </div>
            <div className="flex flex-col items-center gap-1">
              <div className="flex gap-4">
                {person.socials.map((social) => (
                  <Link
                    href={social.url}
                    key={social.id}
                    className="text-2xl hover:text-gold transition-all duration-300 ease-linear"
                  >
                    <social.icon />
                  </Link>
                ))}
              </div>
              <p className="text-gold font-extrabold text-lg">{person.name}</p>
              <p>{person.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Team;
