import { StaticImageData } from "next/image";


export type variants = "primary" | "secondary" | "tertiary";

export interface IService {
  title: string;
  variants: variants;
  image: StaticImageData;
}

export interface INavItem {
  id: string;
  title: string;
  link: string;
}

export interface ICompany {
  name: string;
  image: StaticImageData;
}
