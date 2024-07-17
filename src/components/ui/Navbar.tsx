import React from "react";
import Image from "next/image";
import { navItems } from "@/constants/data";
import { RiMenu5Fill } from "react-icons/ri";
import Typography from "@/components/Typography";
import CompanyIcon from "@/assets/CompanyIcon.png";
import Button from "@/components/Button";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between p-6 mx-4">
      <div className="flex items-center gap-x-4">
        <Image
          src={CompanyIcon}
          alt="Company Icon"
          className="h-6 w-6 md:h-9 md:w-9"
        />
        <Typography variant={3}>Positivus</Typography>
      </div>
      <RiMenu5Fill className="block h-7 w-7 cursor-pointer md:hidden" />
      <ul className="hidden items-center gap-x-8 md:flex">
        {navItems.map((item) => {
          return (
            <li key={item.id}>
              <Typography variant={6}>{item.title}</Typography>
            </li>
          );
        })}
        <li>
          <Button variant="outline" classNames="px-4 py-2">
            Request a quote
          </Button>
        </li>
      </ul>
    </nav>
  );
}
