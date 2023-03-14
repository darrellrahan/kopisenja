import {
  HeaderIcons,
  MenuCardProps,
  NavLink,
  OpenHour,
  ShopDropdown,
  Team,
} from "../typings";
import {
  AiOutlineInstagram,
  AiOutlineGithub,
  AiOutlineMail,
  AiOutlineSearch,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { RxPerson } from "react-icons/rx";

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
    icon: AiOutlineSearch,
  },
  {
    id: 2,
    url: "/cart",
    icon: AiOutlineShoppingCart,
  },
  {
    id: 3,
    url: "/login",
    icon: RxPerson,
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

export const openHour: OpenHour[] = [
  { id: 1, day: "Senin", hour: "11:00-20:00" },
  { id: 2, day: "Selasa", hour: "11:00-20:00" },
  { id: 3, day: "Rabu", hour: "11:00-20:00" },
  { id: 4, day: "Kamis", hour: "11:00-20:00" },
  { id: 5, day: "Jumat", hour: "13:00-22:00" },
  { id: 6, day: "Sabtu", hour: "10:00-23:00" },
  { id: 7, day: "Minggu", hour: "10:00-23:00" },
];

export const team: Team[] = [
  {
    id: 1,
    image: "assets/svg/darrell.svg",
    socials: [
      {
        id: 1,
        icon: AiOutlineGithub,
        url: "https://github.com/darrellrahan",
      },
      {
        id: 2,
        icon: AiOutlineMail,
        url: "mailto:drafa0609@gmail.com",
      },
      {
        id: 3,
        icon: AiOutlineInstagram,
        url: "https://www.instagram.com/darrell.rr",
      },
    ],
    name: "Darrell Rafa Raihan",
    title: "Frontend Developer",
  },
  {
    id: 2,
    image: "assets/svg/nopa.svg",
    socials: [
      {
        id: 1,
        icon: AiOutlineMail,
        url: "mailto:2122119008.siswa@smkn4bdg.sch.id",
      },
      {
        id: 2,
        icon: AiOutlineInstagram,
        url: "https://www.instagram.com/shaviranopa_",
      },
    ],
    name: "Wulan Shavira Nopa",
    title: "UI/UX Designer",
  },
];
