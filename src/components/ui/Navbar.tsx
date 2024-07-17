"use client";

import React from "react";
import Image from "next/image";
import { navItems } from "@/constants/data";
import { RiMenu5Fill } from "react-icons/ri";
import Typography from "@/components/Typography";
import CompanyIcon from "@/assets/CompanyIcon.png";
import Button from "@/components/Button";
import { motion, Variants } from "framer-motion";

const imageVariants: Variants = {
  hover: {
    rotate: "360deg",
    transition: { ease: "linear", damping: 0.5, duration: 0.5 },
  },
};

const navLinksVariants: Variants = {
  hidden: {
    y: 20,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
    },
  },
};

const navItemVariants: Variants = {
  hidden: {
    y: 20,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};

export default function Navbar() {
  return (
    <nav className="mx-4 flex items-center justify-between p-6 debug">
      <motion.div
        variants={navLinksVariants}
        initial="hidden"
        animate="visible"
        className="flex items-center gap-x-4"
      >
        <motion.div variants={imageVariants} whileHover="hover">
          <Image
            src={CompanyIcon}
            alt="Company Icon"
            className="h-6 w-6 cursor-pointer md:h-9 md:w-9"
          />
        </motion.div>
        <Typography variant={3}>Positivus</Typography>
      </motion.div>
      <div className="flex items-center">
        <RiMenu5Fill className="block h-7 w-7 cursor-pointer md:hidden" />
        <motion.ul
          variants={navLinksVariants}
          initial="hidden"
          animate="visible"
          className="hidden items-center cursor-pointer gap-x-10 md:flex"
        >
          {navItems.map((item) => (
            <motion.li key={item.id} variants={navItemVariants}>
              <Typography variant={6}>{item.title}</Typography>
            </motion.li>
          ))}
          <motion.li variants={navItemVariants}>
            <Button variant="outline" classNames="px-4 py-2">
              Request a quote
            </Button>
          </motion.li>
        </motion.ul>
      </div>
    </nav>
  );
}
