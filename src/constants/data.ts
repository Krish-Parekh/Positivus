import { ICompany, INavItem } from "@/types/main";
import AmazonIcon from "@/assets/AmazonIcon.png";
import DribbleIcon from "@/assets/DribbleIcon.png";
import HubspotIcon from "@/assets/HubspotIcon.png";
import NetflixIcon from "@/assets/NetflixIcon.png";
import NotionIcon from "@/assets/NotionIcon.png";
import ZoomIcon from "@/assets/ZoomIcon.png";

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
