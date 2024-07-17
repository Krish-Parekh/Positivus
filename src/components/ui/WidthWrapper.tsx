import React from "react";

interface IWidthWrapperProps {
  children: React.ReactNode;
}

export default function WidthWrapper({ children }: IWidthWrapperProps) {
  return <div className="mx-auto w-screen md:max-w-7xl">{children}</div>;
}
