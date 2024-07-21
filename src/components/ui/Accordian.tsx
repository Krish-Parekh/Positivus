import React, { useState } from "react";
import { ImMinus, ImPlus } from "react-icons/im";
import { cn } from "@/utils/cn";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { IAccordionItem } from "@/types/main";

interface AccordionProps {
  items: IAccordionItem[];
}

const OpenCloseVariant: Variants = {
  initial: {
    height: 0,
    opacity: 0,
  },
  animate: {
    height: "auto",
    opacity: 1,
  },
  exit: {
    height: 0,
    opacity: 0,
  },
};

const ListVariant: Variants = {
  initial: {
    opacity: 0,
    y: -20,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const ItemVariant: Variants = {
  initial: {
    opacity: 0,
    y: -10,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
};

export default function Accordion({ items }: AccordionProps) {
  const [activeIds, setActiveIds] = useState<number[]>([]);

  const onToggle = (id: number) => {
    setActiveIds((prevActiveIds) =>
      prevActiveIds.includes(id)
        ? prevActiveIds.filter((activeId) => activeId !== id)
        : [...prevActiveIds, id]
    );
  };

  return (
    <motion.div
      className="space-y-12"
      initial="initial"
      animate="animate"
      variants={ListVariant}
    >
      {items.map((item) => {
        const { id, title, description } = item;
        const isActive = activeIds.includes(id);
        const ACTIVE_CLASS_NAME = isActive ? "bg-primary" : "bg-tertiary";
        const workId = id.toString().padStart(2, "0");
        return (
          <motion.div
            key={workId}
            className={cn(
              "cursor-pointer space-y-10 rounded-md p-12",
              ACTIVE_CLASS_NAME
            )}
            onClick={() => onToggle(id)}
            variants={ItemVariant}
          >
            <div className="flex justify-between">
              <div className="flex items-center gap-x-4">
                <h1 className="text-5xl font-bold">{workId}</h1>
                <span className="text-3xl font-medium">{title}</span>
              </div>
              <div className="flex h-14 w-14 cursor-pointer items-center justify-center rounded-full border-2 border-opacity-40 bg-tertiary">
                {isActive ? <ImMinus size={24} /> : <ImPlus size={24} />}
              </div>
            </div>
            <AnimatePresence>
              {isActive && (
                <motion.div
                  variants={OpenCloseVariant}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <p className="border-t-2 border-t-black pt-8">
                    {description}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        );
      })}
    </motion.div>
  );
}
