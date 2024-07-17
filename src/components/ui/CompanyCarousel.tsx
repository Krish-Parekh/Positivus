"use client";

import React from "react";
import AmazonIcon from "@/assets/AmazonIcon.png";
import DribbleIcon from "@/assets/DribbleIcon.png";
import HubspotIcon from "@/assets/HubspotIcon.png";
import NetflixIcon from "@/assets/NetflixIcon.png";
import NotionIcon from "@/assets/NotionIcon.png";
import ZoomIcon from "@/assets/ZoomIcon.png";
import Image from "next/image";
import Marquee from "react-fast-marquee";

const companyImages = [
  AmazonIcon,
  DribbleIcon,
  HubspotIcon,
  NetflixIcon,
  NotionIcon,
  ZoomIcon,
];

export default function CompanyCarousel() {
  return (
    <Marquee gradient>
      {companyImages.map((image, index) => (
        <Image
          key={index}
          src={image}
          alt="Company Logo"
          className="mr-20 h-fit w-fit cursor-pointer grayscale filter hover:filter-none"
        />
      ))}
    </Marquee>
  );
}
