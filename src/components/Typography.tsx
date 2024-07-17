import { cn } from "@/utils/cn";
import React from "react";

type variants = 1 | 2 | 3 | 4 | 5 | 6 | 7;
interface ITypographyProps {
  variant: variants;
  children: React.ReactNode;
}

const typographyStyles: Record<variants, string> = {
  1: "text-4xl md:text-5xl font-bold leading-tight tracking-tight",
  2: "text-3xl md:text-4xl font-semibold tracking-tight",
  3: "text-2xl md:text-3xl font-semibold tracking-tight",
  4: "text-xl font-medium",
  5: "text-lg font-medium",
  6: "text-base",
  7: "text-sm",
};

export default function Typography({ variant, children }: ITypographyProps) {
  switch (variant) {
    case 1:
      return <h1 className={cn(typographyStyles[variant])}>{children}</h1>;
    case 2:
      return <h2 className={cn(typographyStyles[variant])}>{children}</h2>;
    case 3:
      return <h3 className={cn(typographyStyles[variant])}>{children}</h3>;
    case 4:
      return <h4 className={cn(typographyStyles[variant])}>{children}</h4>;
    case 5:
      return <h5 className={cn(typographyStyles[variant])}>{children}</h5>;
    case 6:
      return <h6 className={cn(typographyStyles[variant])}>{children}</h6>;
    case 7:
      return <p className={cn(typographyStyles[variant])}>{children}</p>;
    default:
      return <p className={cn(typographyStyles[7])}>{children}</p>;
  }
}
