import React from "react";

type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  return <div className="max-w-7xl mx-auto">{children}</div>;
}
