import React from "react";

interface IWidthWrapperProps {
  children: React.ReactNode;
}

export default function WidthWrapper({ children }: IWidthWrapperProps) {
  return <div className="w-screen mx-auto md:max-w-6xl">{children}</div>;
}
