import { HeaderIcons, MenuCardProps, NavLink, ShopDropdown } from "../typings";
import React from "react";

export const navLink: NavLink[] = [
  { id: 1, text: "Beranda", url: "/" },
  { id: 2, text: "Menu" },
  { id: 3, text: "Kontak", url: "/contact" },
];

export const shopDropdown: ShopDropdown[] = [
  { id: 1, text: "Menu", url: "/menu" },
  { id: 2, text: "Checkout", url: "/checkout" },
  { id: 3, text: "Keranjang", url: "/cart" },
];

export const headerIcons: HeaderIcons[] = [
  {
    id: 1,
    icon: (
      <svg
        width="24"
        height="26"
        viewBox="0 0 28 30"
        fill="white"
        xmlns="http://www.w3.org/2000/svg"
        className="transition-all duration-300 ease-linear hover:fill-gold"
      >
        <path d="M25.8222 30L16.0222 19.5C15.2444 20.1667 14.35 20.6944 13.3389 21.0833C12.3278 21.4722 11.2519 21.6667 10.1111 21.6667C7.28519 21.6667 4.89378 20.6178 2.93689 18.52C0.98 16.4222 0.00103704 13.86 0 10.8333C0 7.80556 0.978963 5.24333 2.93689 3.14667C4.89481 1.05 7.28622 0.00111111 10.1111 0C12.937 0 15.3284 1.04889 17.2853 3.14667C19.2422 5.24444 20.2212 7.80667 20.2222 10.8333C20.2222 12.0556 20.0407 13.2083 19.6778 14.2917C19.3148 15.375 18.8222 16.3333 18.2 17.1667L28 27.6667L25.8222 30ZM10.1111 18.3333C12.0556 18.3333 13.7086 17.6039 15.0702 16.145C16.4319 14.6861 17.1121 12.9156 17.1111 10.8333C17.1111 8.75 16.4303 6.97889 15.0687 5.52C13.707 4.06111 12.0545 3.33222 10.1111 3.33333C8.16667 3.33333 6.51363 4.06278 5.152 5.52167C3.79037 6.98056 3.11007 8.75111 3.11111 10.8333C3.11111 12.9167 3.79193 14.6878 5.15356 16.1467C6.51519 17.6056 8.1677 18.3344 10.1111 18.3333Z" />
      </svg>
    ),
  },
  {
    id: 2,
    url: "/cart",
    icon: (
      <svg
        width="30"
        height="24"
        viewBox="0 0 36 30"
        fill="white"
        xmlns="http://www.w3.org/2000/svg"
        className="transition-all duration-300 ease-linear hover:fill-gold"
      >
        <path d="M1.51579 6.3257e-05C1.11378 6.3257e-05 0.72823 0.158098 0.443965 0.439402C0.159699 0.720706 0 1.10224 0 1.50006C0 1.89788 0.159699 2.27941 0.443965 2.56072C0.72823 2.84202 1.11378 3.00006 1.51579 3.00006H4.88084L8.85827 18.75C9.19629 20.085 10.4044 21 11.7944 21H29.1805C30.5492 21 31.7118 20.1 32.0711 18.795L36 4.50005H10.6105L11.3684 7.50005H32.068L29.1789 18H11.7928L7.81693 2.25006C7.65269 1.6039 7.27408 1.03098 6.74174 0.623033C6.2094 0.215087 5.55412 -0.00427939 4.88084 6.3257e-05H1.51579ZM27.2842 21C24.7907 21 22.7368 23.0325 22.7368 25.5C22.7368 27.9675 24.7907 30 27.2842 30C29.7777 30 31.8316 27.9675 31.8316 25.5C31.8316 23.0325 29.7777 21 27.2842 21ZM13.6421 21C11.1486 21 9.09474 23.0325 9.09474 25.5C9.09474 27.9675 11.1486 30 13.6421 30C16.1356 30 18.1895 27.9675 18.1895 25.5C18.1895 23.0325 16.1356 21 13.6421 21ZM13.6421 24C14.497 24 15.1579 24.654 15.1579 25.5C15.1579 26.346 14.497 27 13.6421 27C12.7872 27 12.1263 26.346 12.1263 25.5C12.1263 24.654 12.7872 24 13.6421 24ZM27.2842 24C28.1391 24 28.8 24.654 28.8 25.5C28.8 26.346 28.1391 27 27.2842 27C26.4293 27 25.7684 26.346 25.7684 25.5C25.7684 24.654 26.4293 24 27.2842 24Z" />
      </svg>
    ),
  },
  {
    id: 3,
    url: "/login",
    icon: (
      <svg
        width="24"
        height="26"
        viewBox="0 0 28 30"
        stroke="white"
        xmlns="http://www.w3.org/2000/svg"
        className="transition-all duration-300 ease-linear hover:stroke-gold"
      >
        <path
          d="M2 28.5V27.0714C2 22.3376 6.02944 18.5 11 18.5H17C21.9705 18.5 26 22.3376 26 27.0714V28.5"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <path
          d="M14 13.5C10.6863 13.5 8 10.8137 8 7.5C8 4.18629 10.6863 1.5 14 1.5C17.3137 1.5 20 4.18629 20 7.5C20 10.8137 17.3137 13.5 14 13.5Z"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
];

export const homeMenuData: MenuCardProps[] = [
  {
    id: 1,
    url: "/menu/hot-cappucino",
    img: "assets/svg/hotcappuccino.svg",
    name: "Hot Cappuccino",
    price: 40000,
  },
  {
    id: 2,
    url: "/menu/americano",
    img: "assets/svg/americano.svg",
    name: "Americano",
    price: 28000,
  },
  {
    id: 3,
    url: "/menu/espresso",
    img: "assets/svg/espresso.svg",
    name: "Espresso",
    price: 25000,
  },
  {
    id: 4,
    url: "/menu/caramel-frappe",
    img: "assets/svg/icecaramel.svg",
    name: "Ice Caramel Frappe",
    price: 50000,
  },
  {
    id: 5,
    url: "/menu/long-black",
    img: "assets/svg/longblack.svg",
    name: "Long Black",
    price: 30000,
  },
  {
    id: 6,
    url: "/menu/affogato",
    img: "assets/svg/affogato.svg",
    name: "Affogato",
    price: 60000,
  },
  {
    id: 7,
    url: "/menu/cappuccino-caramel",
    img: "assets/svg/cappucinocaramel.svg",
    name: "Cappuccino Caramel",
    price: 55000,
  },
];
