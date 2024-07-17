import { cn } from "@/utils/cn";
import React from "react";

type variants = "primary" | "secondary" | "outline";

interface IButtonProps {
  variant: variants;
  children: React.ReactNode;
  classNames?: string;
  onClick?: () => void;
}

const buttonStyles: Record<variants, string> = {
  primary: "bg-primary text-secondary",
  secondary: "bg-secondary text-tertiary",
  outline: "border border-secondary text-secondary",
};

export default function Button({
  variant,
  children,
  classNames,
  onClick,
}: IButtonProps) {
  return (
    <button
      className={cn(
        buttonStyles[variant],
        "cursor-pointer rounded-xl px-8 py-4",
        classNames
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
