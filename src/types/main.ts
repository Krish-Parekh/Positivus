import { StaticImageData } from "next/image";

export interface INavItem {
  id: string;
  title: string;
  link: string;
}

export interface ICompany {
  name: string;
  image: StaticImageData;
}
