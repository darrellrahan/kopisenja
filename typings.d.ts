import { IconType } from "react-icons";
import { IconBaseProps } from "react-icons/lib/esm/iconBase";
import { IconContext } from "react-icons/lib/esm/iconContext";

export type NavLink = {
  id: number;
  text: string;
  url?: string;
};

export type ShopDropdown = {
  id: number;
  text: string;
  url: string;
};

export type HeaderIcons = {
  id: number;
  url?: string;
  icon: IconType;
};

export type MenuCardProps = {
  id: number;
  url: string;
  name: string;
  img: string;
  price: number;
};

export type Location = {
  id: number;
  location: string;
};

export type OpenHour = {
  id: number;
  day: string;
  hour: string;
};

export type Team = {
  id: number;
  image: string;
  socials: { id: number; icon: IconType; url: string }[];
  name: string;
  title: string;
};

export type FooterSocials = {
  id: number;
  url: string;
  icon: IconType;
};

export type FooterLink = {
  id: number;
  text: string;
  url: string;
};

export type FooterContact = {
  id: number;
  icon: IconType;
  text: string;
  url?: string;
};
