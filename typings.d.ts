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
  icon: ReactNode.SVGProps<SVGSVGElement>;
};

export type MenuCardProps = {
  id: number;
  url: string;
  name: string;
  img: string;
  price: number;
};
