import { ICompany, INavItem, IService } from "@/types/main";
import AmazonIcon from "@/assets/AmazonIcon.png";
import DribbleIcon from "@/assets/DribbleIcon.png";
import HubspotIcon from "@/assets/HubspotIcon.png";
import NetflixIcon from "@/assets/NetflixIcon.png";
import NotionIcon from "@/assets/NotionIcon.png";
import ZoomIcon from "@/assets/ZoomIcon.png";

import ServiceOne from "@/assets/ServiceOne.png";
import ServiceTwo from "@/assets/ServiceTwo.png";
import ServiceThree from "@/assets/ServiceThree.png";
import ServiceFour from "@/assets/ServiceFour.png";
import ServiceFive from "@/assets/ServiceFive.png";
import ServiceSix from "@/assets/ServiceSix.png";

export const services: IService[] = [
  {
    title: "Search engine#Optimization",
    variants: "tertiary",
    image: ServiceOne,
  },
  {
    title: "Pay-per-click#Advertising",
    variants: "primary",
    image: ServiceTwo,
  },
  {
    title: "Social Media#Marketing",
    variants: "secondary",
    image: ServiceThree,
  }, 
  {
    title: "Email#Marketing",
    variants: "tertiary",
    image: ServiceFour,
  },
  {
    title: "Content#Creation",
    variants: "primary",
    image: ServiceFive,
  },
  {
    title: "Analytics and#Tracking",
    variants: "secondary",
    image: ServiceSix,
  }
];

export const companies: ICompany[] = [
  {
    name: "Amazon",
    image: AmazonIcon,
  },
  {
    name: "Dribble",
    image: DribbleIcon,
  },
  {
    name: "Hubspot",
    image: HubspotIcon,
  },
  {
    name: "Netflix",
    image: NetflixIcon,
  },
  {
    name: "Notion",
    image: NotionIcon,
  },
  {
    name: "Zoom",
    image: ZoomIcon,
  },
];

export const navItems: INavItem[] = [
  {
    id: "1",
    title: "About",
    link: "/",
  },
  {
    id: "2",
    title: "Services",
    link: "/",
  },
  {
    id: "3",
    title: "Use Cases",
    link: "/",
  },
  {
    id: "4",
    title: "Pricing",
    link: "/",
  },
  {
    id: "5",
    title: "Blog",
    link: "/",
  },
];
