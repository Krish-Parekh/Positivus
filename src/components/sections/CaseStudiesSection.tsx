"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import TitleWrapper from "../ui/TitleWrapper";
import Typography from "../Typography";
import { MdArrowOutward } from "react-icons/md";

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

const caseStudies = [
  "For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.",
  "For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords and a 200% increase in organic traffic.",
  "For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales.",
];

export default function CaseStudiesSection() {
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
            <Typography variant={2}>Case Studies</Typography>
          </TitleWrapper>
        </motion.div>
        <motion.span
          className="max-w-2xl text-center md:text-start"
          variants={childVariants}
        >
          Explore Real-Life Examples of Our Proven Digital Marketing Success
          through Our Case Studies
        </motion.span>
      </motion.div>
      <motion.ul
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="grid rounded-md bg-secondary p-16 md:grid-cols-3"
      >
        {caseStudies.map((study, index) => (
          <motion.li
            key={index}
            variants={childVariants}
            className="space-y-6 p-4 text-tertiary md:first:border-r-2 md:last:border-l-2"
          >
            <p>{study}</p>
            <div className="flex gap-4 text-primary">
              <span>Learn More</span>
              <MdArrowOutward size={24} />
            </div>
          </motion.li>
        ))}
      </motion.ul>
    </section>
  );
}
