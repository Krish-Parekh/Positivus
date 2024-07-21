"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import TitleWrapper from "@/components/ui/TitleWrapper";
import Typography from "@/components/Typography";
import Button from "@/components/Button";
import Image from "next/image";
import ContactIcon from "@/assets/ContactIcon.png";

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

export default function ContactSection() {
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
            <Typography variant={2}>Contact Us</Typography>
          </TitleWrapper>
        </motion.div>
        <motion.span
          className="max-w-2xl text-center md:text-start"
          variants={childVariants}
        >
          Connect with Us: Let's Discuss Your Digital Marketing Needs
        </motion.span>
      </motion.div>
      <motion.div
        className="flex items-center gap-x-6 overflow-hidden rounded-md bg-tertiary"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <div className="flex-1 p-16">
          <form className="space-y-6">
            <div className="flex flex-col gap-y-4">
              <label>Name</label>
              <input
                className="rounded-xl border border-black p-4 text-slate-300"
                type="text"
                placeholder="Name"
              />
            </div>
            <div className="flex flex-col gap-y-4">
              <label>Email</label>
              <input
                className="rounded-xl border border-black p-4 text-slate-300"
                type="email"
                placeholder="Email"
              />
            </div>
            <div className="flex flex-col gap-y-4">
              <label>Message</label>
              <textarea
                className="rounded-xl border border-black p-4 text-slate-300"
                placeholder="Message"
                rows={7}
              />
              <Button
                variant="secondary"
                classNames="mt-4 rounded-xl px-6 py-4 text-white"
              >
                Send Message
              </Button>
            </div>
          </form>
        </div>
        <Image src={ContactIcon} alt="Contact Icon" className="h-fit w-fit" />
      </motion.div>
    </section>
  );
}
