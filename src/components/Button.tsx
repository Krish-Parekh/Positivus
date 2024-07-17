import { cn } from "@/utils/cn";
import React from "react";

type buttonType = "primary" | "secondary" | "outline";

interface IButtonProps {
  type: buttonType;
  children: React.ReactNode;
  classNames?: string;
  onClick?: () => void;
}

const buttonStyles: Record<buttonType, string> = {
  primary: "bg-primary text-secondary",
  secondary: "bg-secondary text-tertiary",
  outline: "border border-secondary text-secondary",
};

export default function Button({
  type,
  children,
  classNames,
  onClick,
}: IButtonProps) {
  return (
    <button
      className={cn(
        buttonStyles[type],
        "cursor-pointer rounded-xl px-8 py-4",
        classNames
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
