"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import TitleWrapper from "@/components/ui/TitleWrapper";
import Typography from "@/components/Typography";
import Accordian from "@/components/ui/Accordian";
import { accordianItems } from "@/constants/data";

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

export default function WorkingProcessSection() {
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
            <Typography variant={2}>Our Working Process </Typography>
          </TitleWrapper>
        </motion.div>
        <motion.span
          className="max-w-2xl text-center md:text-start"
          variants={childVariants}
        >
          Step-by-Step Guide to Achieving Your Business Goals
        </motion.span>
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <Accordian items={accordianItems} />
      </motion.div>
    </section>
  );
}
