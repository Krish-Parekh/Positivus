import { IAccordionItem, ICompany, INavItem, IService } from "@/types/main";
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
  },
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

export const accordianItems: IAccordionItem[] = [
  {
    id: 1,
    title: "Consultation",
    description:
      "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
  },
  {
    id: 2,
    title: "Research and Strategy Development",
    description:
      "We will conduct thorough research to identify your target audience, competitors, and industry trends. Based on our findings, we will develop a comprehensive marketing strategy that aligns with your business goals and objectives.",
  },
  {
    id: 3,
    title: "Implementation",
    description:
      "Once the strategy is finalized, we will begin implementing the marketing plan. This may include creating content, designing ads, and launching campaigns across various platforms.",
  },
  {
    id: 4,
    title: "Monitoring and Optimization",
    description:
      "We will continuously monitor the performance of your marketing campaigns and make adjustments as needed to optimize results. Our goal is to ensure that your marketing efforts are delivering the best possible return on investment.",
  },
  {
    id: 5,
    title: "Reporting and Communication",
    description:
      "We will provide regular reports on the performance of your marketing campaigns, including key metrics such as engagement, conversion rates, and ROI. This will allow you to track the progress of your marketing efforts and make informed decisions about future strategies.",
  },
  {
    id: 6,
    title: "Continual Improvement",
    description:
      "Based on the results of our campaigns, we will review our strategies and make refinements as needed to improve performance. Our goal is to continuously optimize your marketing efforts to achieve the best possible results.",
  },
];
