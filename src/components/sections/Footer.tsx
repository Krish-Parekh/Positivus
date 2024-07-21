import React from "react";
import CompanyIconDark from "@/assets/CompanyIconDark.png";
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
import Image from "next/image";
import { navItems } from "@/constants/data";
import Button from "@/components/Button";
import TitleWrapper from "../ui/TitleWrapper";

export default function Footer() {
  return (
    <footer className="mx-4 mt-20 space-y-10 rounded-t-md bg-secondary p-16 text-tertiary">
      <div className="flex items-center justify-between">
        <div className="flex gap-x-4">
          <Image src={CompanyIconDark} alt="Company Icon" className="h-8 w-8" />
          <span className="text-lg font-semibold md:text-3xl">Positivus</span>
        </div>
        <div className="flex flex-1 justify-center gap-x-8">
          {navItems.map((item, index) => (
            <span key={index} className="text-3 text-sm underline md:text-base">
              {item.title}
            </span>
          ))}
        </div>
        <div className="flex gap-x-4">
          <FaLinkedin size={20} className="text-3" />
          <FaFacebook size={20} className="text-3" />
          <FaTwitter size={20} className="text-3" />
        </div>
      </div>

      <div className="flex justify-between gap-x-16">
        <div className="flex flex-col space-y-8">
          <TitleWrapper variant="primary" classNames="self-start">
            <span className="text-secondary">Contact Us:</span>
          </TitleWrapper>
          <ul className="space-y-4">
            <li>Email: info@positivus.com</li>
            <li>Phone: 555-597-7894</li>
            <li>Address: 1234 Main St</li>
          </ul>
        </div>
        <div className="flex items-center justify-end gap-x-4">
          <input
            className="border-3 rounded-xl border bg-transparent px-6 py-4 text-slate-300"
            type="email"
            placeholder="Email"
          />
          <Button variant="primary" classNames="px-4 py-4">
            Subscribe
          </Button>
        </div>
      </div>

      <div className="border-t-3 flex space-x-8 border-t-2 pt-12">
        <h1>© 2024 Positivus. All Rights Reserved.</h1>
        <span className="underline">Privacy Policy</span>
      </div>
    </footer>
  );
}
