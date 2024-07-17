import React from "react";
import Button from "@/components/Button";
import Image from "next/image";
import HeroImage from "@/assets/HeroIcon.png";
import CompanyCarousel from "./CompanyCarousel";

export default function Hero() {
  return (
    <main className="mx-4 h-screen p-4">
      <div className="flex flex-col justify-evenly gap-16">
        <div className="flex items-center justify-between gap-8">
          <div className="flex flex-col gap-y-8">
            <div className="flex flex-col gap-y-4">
              <h1 className="text-2 text-5xl font-semibold leading-tight tracking-tight">
                Navigating the <br /> digital landscape <br /> for success
              </h1>
              <Image
                src={HeroImage}
                className="md:hidden"
                alt="Hero Image"
                width={999}
                height={999}
              />
              <p className="text-2 leading-7">
                Our digital marketing agency helps businesses grow and succeed
                online through a range of services including SEO, PPC, social
                media marketing, and content creation.
              </p>
            </div>
            <Button variant="secondary" classNames="px-4 py-4 md:self-start">
              Book a consultation
            </Button>
          </div>
          <Image
            src={HeroImage}
            className="hidden md:flex"
            alt="Hero Image"
            width={999}
            height={999}
          />
        </div>
        <CompanyCarousel />
      </div>
    </main>
  );
}
