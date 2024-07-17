import { cn } from "@/utils/cn";
import React from "react";

type variants = "primary" | "secondary";

interface ITitleWrapperProps {
  variant: variants;
  children: React.ReactNode;
  classNames?: string;
}

const titleStyles: Record<variants, string> = {
  primary: "bg-primary",
  secondary: "bg-secondary",
};

export default function TitleWrapper({
  variant,
  children,
  classNames,
}: ITitleWrapperProps) {
  return (
    <div className={cn(classNames, titleStyles[variant], "rounded-lg p-1")}>
      {children}
    </div>
  );
}
