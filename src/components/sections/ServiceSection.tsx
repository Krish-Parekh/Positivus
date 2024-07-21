"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import TitleWrapper from "@/components/ui/TitleWrapper";
import Typography from "@/components/Typography";
import ServiceCard from "@/components/ui/ServiceCard";
import { services } from "@/constants/data";
import Button from "../Button";
import Image from "next/image";
import CTABlock from "@/assets/CTABlock.png";

const containerVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.3,
      ease: "easeInOut",
    },
  },
};

const childVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function ServiceSection() {
  return (
    <section className="mx-4 mt-20 space-y-10 p-4">
      <motion.div
        className="flex flex-col items-center gap-8 md:flex-row"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <motion.div variants={childVariants}>
          <TitleWrapper variant="primary">
            <Typography variant={2}>Services</Typography>
          </TitleWrapper>
        </motion.div>
        <motion.span
          className="max-w-2xl text-center md:text-start"
          variants={childVariants}
        >
          At our digital marketing agency, we offer a range of services to help
          businesses grow and succeed online. These services include:
        </motion.span>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 gap-8 md:grid-cols-2"
        initial="hidden"
        whileInView="visible"
        variants={containerVariants}
      >
        {services.map((service, index) => (
          <motion.div key={index} variants={childVariants}>
            <ServiceCard
              key={service.title}
              title={service.title}
              variants={service.variants}
              image={service.image}
            />
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={containerVariants}
        className="relative mt-20 flex items-center rounded-md bg-tertiary p-8 shadow-lg md:flex-row md:p-16"
      >
        <motion.div className="max-w-xl space-y-4">
          <h1 className="text-2 text-3xl font-semibold leading-tight tracking-tight">
            Let’s make things happen
          </h1>
          <p className="text-2 leading-7">
            Contact us today to learn more about how our digital marketing
            services can help your business grow and succeed online.
          </p>
          <Button variant="secondary" classNames="px-4 py-4 w-full md:w-auto">
            <span>Get your free proposal</span>
          </Button>
        </motion.div>
        <motion.div className="absolute right-10 hidden md:block md:flex-1">
          <Image
            src={CTABlock}
            alt="CTA Block"
            className="mx-auto"
            width={350}
            height={350}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
