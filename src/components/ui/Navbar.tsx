"use client";

import React, { useCallback, useState } from "react";
import Image from "next/image";
import { navItems } from "@/constants/data";
import { RiMenu5Fill } from "react-icons/ri";
import Typography from "@/components/Typography";
import CompanyIcon from "@/assets/CompanyIcon.png";
import Button from "@/components/Button";
import { AnimatePresence, motion, Variants } from "framer-motion";

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
  const [showMenu, setShowMenu] = useState(false);

  const renderMenuItems = useCallback(
    () => (
      <>
        {navItems.map((item) => (
          <motion.li key={item.id} variants={navItemVariants}>
            <Typography variant={6}>{item.title}</Typography>
          </motion.li>
        ))}
        <motion.li variants={navItemVariants}>
          <Button
            variant="outline"
            classNames="px-4 py-2 group relative overflow-hidden  transition-all"
          >
            <span className="absolute bottom-0 left-0 h-48 w-full origin-bottom translate-y-full transform overflow-hidden rounded-xl bg-black/5 transition-all duration-300 ease-out group-hover:translate-y-14"></span>
            Request a quote
          </Button>
        </motion.li>
      </>
    ),
    []
  );

  return (
    <nav className="mx-4 flex items-center justify-between p-4">
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
      <AnimatePresence>
        {showMenu && (
          <motion.ul
            variants={navLinksVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="absolute right-4 top-20 flex flex-col gap-y-4 rounded-xl bg-white p-4 shadow-md md:hidden"
          >
            {renderMenuItems()}
          </motion.ul>
        )}
      </AnimatePresence>
      <div className="flex items-center">
        <RiMenu5Fill
          className="block h-7 w-7 cursor-pointer md:hidden"
          onClick={() => setShowMenu((prev) => !prev)}
        />
        <motion.ul
          variants={navLinksVariants}
          initial="hidden"
          animate="visible"
          className="hidden cursor-pointer items-center gap-x-10 md:flex"
        >
          {renderMenuItems()}
        </motion.ul>
      </div>
    </nav>
  );
}
