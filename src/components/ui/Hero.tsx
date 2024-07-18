"use client";

import React from "react";
import Button from "@/components/Button";
import Image from "next/image";
import HeroImage from "@/assets/HeroIcon.png";
import CompanyCarousel from "./CompanyCarousel";
import { motion, Variants } from "framer-motion";

const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.3,
    },
  },
};

const childFadeIn: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Hero() {
  return (
    <motion.main
      variants={fadeIn}
      initial="hidden"
      animate="visible"
      className="mx-4 h-screen p-4"
    >
      <motion.div
        className="flex flex-col h-full justify-evenly gap-16"
        variants={fadeIn}
      >
        <div className="flex items-center justify-between gap-8">
          <motion.div className="flex flex-col gap-y-8" variants={childFadeIn}>
            <motion.div
              className="flex flex-col gap-y-4"
              variants={childFadeIn}
            >
              <motion.h1
                className="text-2 text-5xl font-semibold leading-tight tracking-tight"
                variants={childFadeIn}
              >
                Navigating the <br /> digital landscape <br /> for success
              </motion.h1>
              <motion.div variants={childFadeIn}>
                <Image
                  src={HeroImage}
                  className="md:hidden"
                  alt="Hero Image"
                  width={999}
                  height={999}
                />
              </motion.div>
              <motion.p className="text-2 leading-7" variants={childFadeIn}>
                Our digital marketing agency helps businesses grow and succeed
                online through a range of services including SEO, PPC, social
                media marketing, and content creation.
              </motion.p>
            </motion.div>
            <motion.div variants={childFadeIn}>
              <Button variant="secondary" classNames="px-4 py-4 md:self-start">
                Book a consultation
              </Button>
            </motion.div>
          </motion.div>
          <motion.div className="w-full h-full" variants={childFadeIn}>
            <Image
              src={HeroImage}
              className="hidden md:flex"
              alt="Hero Image"
              width={999}
              height={999}
            />
          </motion.div>
        </div>
        <motion.div variants={childFadeIn}>
          <CompanyCarousel />
        </motion.div>
      </motion.div>
    </motion.main>
  );
}
