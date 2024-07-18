"use client";

import React from "react";
import Marquee from "react-fast-marquee";


interface ICarouselProps {
  children: React.ReactNode;
}

export default function Carousel({ children }: ICarouselProps) {
  return <Marquee gradient>{children}</Marquee>;
}
