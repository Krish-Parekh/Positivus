"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import TitleWrapper from "@/components/ui/TitleWrapper";
import Typography from "@/components/Typography";
import ServiceCard from "@/components/ui/ServiceCard";
import { services } from "@/constants/data";

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const childVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function ServiceSection() {
  return (
    <section className="mx-4 mt-20 h-screen space-y-10 p-4">
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
              title={service.title}
              variants={service.variants}
              image={service.image}
            />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
