import {
  FooterContact,
  FooterLink,
  FooterSocials,
  HeaderIcons,
  Location,
  MenuCardProps,
  MenuProps,
  MenuSidebar,
  NavLink,
  OpenHour,
  Team,
} from "../typings";
import {
  AiOutlineInstagram,
  AiOutlineGithub,
  AiOutlineMail,
  AiOutlineSearch,
  AiOutlineShoppingCart,
  AiOutlineYoutube,
  AiOutlineFacebook,
  AiOutlineTwitter,
  AiOutlineLinkedin,
  AiOutlineWhatsApp,
} from "react-icons/ai";
import { BsTelephone } from "react-icons/bs";
import { IoLocationOutline } from "react-icons/io5";
import { RxPerson } from "react-icons/rx";

export const navLink: NavLink[] = [
  { id: 1, text: "Beranda", url: "/" },
  { id: 2, text: "Menu", url: "/menu" },
  { id: 3, text: "Reservasi", url: "/reservation" },
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
    img: "/assets/svg/hotcappucino.svg",
    name: "Hot Cappucino",
    price: 40000,
  },
  {
    id: 2,
    url: "/menu/hot-mocha",
    img: "/assets/svg/hotmocha.svg",
    name: "Hot Mocha",
    price: 55000,
  },
  {
    id: 3,
    url: "/menu/caramel-macchiato",
    img: "/assets/svg/caramelmacchiato.svg",
    name: "Iced Caramel Macchiato",
    price: 50000,
  },
  {
    id: 4,
    url: "/menu/flat-white",
    img: "/assets/svg/flatwhite.svg",
    name: "Flat White",
    price: 55000,
  },
  {
    id: 5,
    url: "/menu/americano",
    img: "/assets/svg/americano.svg",
    name: "Americano",
    price: 28000,
  },
  {
    id: 6,
    url: "/menu/affogato",
    img: "/assets/svg/affogato.svg",
    name: "Affogato",
    price: 60000,
  },
  {
    id: 7,
    url: "/menu/irish",
    img: "/assets/svg/irish.svg",
    name: "Irish Coffee",
    price: 75000,
  },
];

export const locations: Location[] = [
  {
    id: 1,
    location:
      "Jl. Kliningan No.6, Turangga, Kec. Lengkong, Kota Bandung, Jawa Barat 40264",
  },
  {
    id: 2,
    location:
      "Jl. Slontongan No.19, Turangga, Kec. Kujangsari, Kota Bandung, Jawa Barat 40264",
  },
  {
    id: 3,
    location:
      "Jl. Embah Malim No.69, Babakan Sari, Kec. Kiaracondong, Kota Bandung, Jawa Barat 40264",
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
    image: "/assets/svg/darrell.svg",
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
    image: "/assets/svg/nopa.svg",
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

export const footerSocials: FooterSocials[] = [
  { id: 1, icon: AiOutlineInstagram, url: "https://www.instagram.com" },
  { id: 2, icon: AiOutlineYoutube, url: "https://www.youtube.com" },
  { id: 3, icon: AiOutlineTwitter, url: "https://www.twitter.com" },
  { id: 4, icon: AiOutlineFacebook, url: "https://www.facebook.com" },
  { id: 5, icon: AiOutlineLinkedin, url: "https://www.linkedin.com" },
  { id: 6, icon: AiOutlineWhatsApp, url: "https://www.whatsapp.com" },
];

export const footerAbout: FooterLink[] = [
  { id: 1, text: "Tentang Kami", url: "/" },
  { id: 2, text: "Tim", url: "/" },
  { id: 3, text: "Karir", url: "/" },
];

export const footerContact: FooterContact[] = [
  { id: 1, icon: BsTelephone, text: "+(62) 6653 8065" },
  {
    id: 2,
    icon: AiOutlineMail,
    text: "kopisenja@gmail.com",
    url: "mailto:kopisenja@gmail.com",
  },
  {
    id: 3,
    icon: IoLocationOutline,
    text: "Jl Kliningan no 69420, Kota Bandung",
  },
];

export const footerLegal: FooterLink[] = [
  { id: 1, text: "Ketentuan Penggunaan", url: "/" },
  { id: 2, text: "Syarat & Ketentuan", url: "/" },
  { id: 3, text: "Kebijakan Privasi", url: "/" },
];

export const menuSidebar: MenuSidebar[] = [
  {
    id: 1,
    name: "Special",
    menus: [
      {
        id: 1,
        url: "/menu/irish",
        img: "/assets/svg/irish.svg",
        name: "Irish Coffee",
        price: 75000,
      },
      {
        id: 2,
        url: "/menu/premium-roast",
        img: "/assets/svg/premiumroast.svg",
        name: "Premium Roast",
        price: 65000,
      },
      {
        id: 3,
        url: "/menu/affogato",
        img: "/assets/svg/affogato.svg",
        name: "Affogato",
        price: 60000,
      },
    ],
  },
  {
    id: 2,
    name: "Black Coffee",
    menus: [
      {
        id: 1,
        url: "/menu/espresso",
        img: "/assets/svg/espresso.svg",
        name: "Espresso",
        price: 25000,
      },
      {
        id: 2,
        url: "/menu/americano",
        img: "/assets/svg/americano.svg",
        name: "Americano",
        price: 28000,
      },
      {
        id: 3,
        url: "/menu/long-black",
        img: "/assets/svg/longblack.svg",
        name: "Long Black",
        price: 30000,
      },
      {
        id: 4,
        url: "/menu/ristretto",
        img: "/assets/svg/ristretto.svg",
        name: "Ristretto",
        price: 32000,
      },
    ],
  },
  {
    id: 3,
    name: "White Coffee",
    menus: [
      {
        id: 1,
        url: "/menu/flat-white",
        img: "/assets/svg/flatwhite.svg",
        name: "Flat White",
        price: 55000,
      },
    ],
  },
  {
    id: 4,
    name: "Caramel",
    menus: [
      {
        id: 1,
        url: "/menu/ice-caramel",
        img: "/assets/svg/icecaramel.svg",
        name: "Ice Caramel",
        price: 50000,
      },
      {
        id: 2,
        url: "/menu/cappucino-caramel",
        img: "/assets/svg/cappucinocaramel.svg",
        name: "Cappucino Caramel",
        price: 55000,
      },
      {
        id: 3,
        url: "/menu/caramel-macchiato",
        img: "/assets/svg/caramelmacchiato.svg",
        name: "Iced Caramel Macchiato",
        price: 50000,
      },
    ],
  },
  {
    id: 5,
    name: "Cappucino",
    menus: [
      {
        id: 1,
        url: "/menu/hot-cappucino",
        img: "/assets/svg/hotcappucino.svg",
        name: "Hot Cappucino",
        price: 40000,
      },
      {
        id: 2,
        url: "/menu/ice-cappucino",
        img: "/assets/svg/icecappucino.svg",
        name: "Ice Cappucino",
        price: 42000,
      },
      {
        id: 3,
        url: "/menu/cappucino-caramel",
        img: "/assets/svg/cappucinocaramel.svg",
        name: "Cappucino Caramel",
        price: 55000,
      },
      {
        id: 4,
        url: "/menu/cappucino-vanilla",
        img: "/assets/svg/cappucinovanilla.svg",
        name: "Cappucino Vanilla",
        price: 50000,
      },
      {
        id: 5,
        url: "/menu/cappucino-mocha",
        img: "/assets/svg/cappucinomocha.svg",
        name: "Cappucino Mocha",
        price: 45000,
      },
      {
        id: 6,
        url: "/menu/cappucino-classic",
        img: "/assets/svg/cappucinoclassic.svg",
        name: "Cappucino Classic",
        price: 55000,
      },
    ],
  },
  {
    id: 6,
    name: "Mocha",
    menus: [
      {
        id: 1,
        url: "/menu/hot-mocha",
        img: "/assets/svg/hotmocha.svg",
        name: "Hot Mocha",
        price: 55000,
      },
      {
        id: 2,
        url: "/menu/cappucino-mocha",
        img: "/assets/svg/cappucinomocha.svg",
        name: "Cappucino Mocha",
        price: 45000,
      },
    ],
  },
];

export const menu: MenuProps[] = [
  {
    id: "hot-mocha",
    img: "/assets/svg/hotmocha.svg",
    name: "Hot Mocha",
    desc: "Minuman ini menggunakan espresso yang digabungkan dengan es batu, susu, karamel dan topping whipped cream di atasnya sehingga menjadikan rasa yang unik.",
    price: 55000,
  },
  {
    id: "cappucino-mocha",
    img: "/assets/svg/cappucinomocha.svg",
    name: "Cappucino Mocha",
    desc: "Minuman ini menggunakan espresso yang digabungkan dengan es batu, susu, karamel dan topping whipped cream di atasnya sehingga menjadikan rasa yang unik.",
    price: 45000,
  },
  {
    id: "hot-cappucino",
    img: "/assets/svg/hotcappucino.svg",
    name: "Hot Cappucino",
    desc: "Minuman ini menggunakan espresso yang digabungkan dengan es batu, susu, karamel dan topping whipped cream di atasnya sehingga menjadikan rasa yang unik.",
    price: 40000,
  },
  {
    id: "ice-cappucino",
    img: "/assets/svg/icecappucino.svg",
    name: "Ice Cappucino",
    desc: "Minuman ini menggunakan espresso yang digabungkan dengan es batu, susu, karamel dan topping whipped cream di atasnya sehingga menjadikan rasa yang unik.",
    price: 42000,
  },
  {
    id: "cappucino-caramel",
    img: "/assets/svg/cappucinocaramel.svg",
    name: "Cappucino Caramel",
    desc: "Minuman ini menggunakan espresso yang digabungkan dengan es batu, susu, karamel dan topping whipped cream di atasnya sehingga menjadikan rasa yang unik.",
    price: 55000,
  },
  {
    id: "cappucino-vanilla",
    img: "/assets/svg/cappucinovanilla.svg",
    name: "Cappucino Vanilla",
    desc: "Minuman ini menggunakan espresso yang digabungkan dengan es batu, susu, karamel dan topping whipped cream di atasnya sehingga menjadikan rasa yang unik.",
    price: 50000,
  },
  {
    id: "cappucino-mocha",
    img: "/assets/svg/cappucinomocha.svg",
    name: "Cappucino Mocha",
    desc: "Minuman ini menggunakan espresso yang digabungkan dengan es batu, susu, karamel dan topping whipped cream di atasnya sehingga menjadikan rasa yang unik.",
    price: 45000,
  },
  {
    id: "cappucino-classic",
    img: "/assets/svg/cappucinoclassic.svg",
    name: "Cappucino Classic",
    desc: "Minuman ini menggunakan espresso yang digabungkan dengan es batu, susu, karamel dan topping whipped cream di atasnya sehingga menjadikan rasa yang unik.",
    price: 55000,
  },
  {
    id: "ice-caramel",
    img: "/assets/svg/icecaramel.svg",
    name: "Ice Caramel",
    desc: "Minuman ini menggunakan espresso yang digabungkan dengan es batu, susu, karamel dan topping whipped cream di atasnya sehingga menjadikan rasa yang unik.",
    price: 50000,
  },
  {
    id: "cappucino-caramel",
    img: "/assets/svg/cappucinocaramel.svg",
    name: "Cappucino Caramel",
    desc: "Minuman ini menggunakan espresso yang digabungkan dengan es batu, susu, karamel dan topping whipped cream di atasnya sehingga menjadikan rasa yang unik.",
    price: 55000,
  },
  {
    id: "caramel-macchiato",
    img: "/assets/svg/caramelmacchiato.svg",
    name: "Iced Caramel Macchiato",
    desc: "Minuman ini menggunakan espresso yang digabungkan dengan es batu, susu, karamel dan topping whipped cream di atasnya sehingga menjadikan rasa yang unik.",
    price: 50000,
  },
  {
    id: "flat-white",
    img: "/assets/svg/flatwhite.svg",
    name: "Flat White",
    desc: "Minuman ini menggunakan espresso yang digabungkan dengan es batu, susu, karamel dan topping whipped cream di atasnya sehingga menjadikan rasa yang unik.",
    price: 55000,
  },
  {
    id: "espresso",
    img: "/assets/svg/espresso.svg",
    name: "Espresso",
    desc: "Minuman ini menggunakan espresso yang digabungkan dengan es batu, susu, karamel dan topping whipped cream di atasnya sehingga menjadikan rasa yang unik.",
    price: 25000,
  },
  {
    id: "americano",
    img: "/assets/svg/americano.svg",
    name: "Americano",
    desc: "Minuman ini menggunakan espresso yang digabungkan dengan es batu, susu, karamel dan topping whipped cream di atasnya sehingga menjadikan rasa yang unik.",
    price: 28000,
  },
  {
    id: "long-black",
    img: "/assets/svg/longblack.svg",
    name: "Long Black",
    desc: "Minuman ini menggunakan espresso yang digabungkan dengan es batu, susu, karamel dan topping whipped cream di atasnya sehingga menjadikan rasa yang unik.",
    price: 30000,
  },
  {
    id: "ristretto",
    img: "/assets/svg/ristretto.svg",
    name: "Ristretto",
    desc: "Minuman ini menggunakan espresso yang digabungkan dengan es batu, susu, karamel dan topping whipped cream di atasnya sehingga menjadikan rasa yang unik.",
    price: 32000,
  },
  {
    id: "irish",
    img: "/assets/svg/irish.svg",
    name: "Irish Coffee",
    desc: "Minuman ini menggunakan espresso yang digabungkan dengan es batu, susu, karamel dan topping whipped cream di atasnya sehingga menjadikan rasa yang unik.",
    price: 75000,
  },
  {
    id: "premium-roast",
    img: "/assets/svg/premiumroast.svg",
    name: "Premium Roast",
    desc: "Minuman ini menggunakan espresso yang digabungkan dengan es batu, susu, karamel dan topping whipped cream di atasnya sehingga menjadikan rasa yang unik.",
    price: 65000,
  },
  {
    id: "affogato",
    img: "/assets/svg/affogato.svg",
    name: "Affogato",
    desc: "Minuman ini menggunakan espresso yang digabungkan dengan es batu, susu, karamel dan topping whipped cream di atasnya sehingga menjadikan rasa yang unik.",
    price: 60000,
  },
];

export const related: MenuCardProps[] = [
  {
    id: 1,
    url: "/menu/hot-cappucino",
    img: "/assets/svg/hotcappucino.svg",
    name: "Hot Cappucino",
    price: 40000,
  },
  {
    id: 2,
    url: "/menu/hot-mocha",
    img: "/assets/svg/hotmocha.svg",
    name: "Hot Mocha",
    price: 55000,
  },
  {
    id: 3,
    url: "/menu/caramel-macchiato",
    img: "/assets/svg/caramelmacchiato.svg",
    name: "Iced Caramel Macchiato",
    price: 50000,
  },
  {
    id: 4,
    url: "/menu/irish",
    img: "/assets/svg/irish.svg",
    name: "Irish Coffee",
    price: 75000,
  },
];
