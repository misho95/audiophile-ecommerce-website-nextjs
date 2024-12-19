"use client";

import { ReactNode } from "react";
import style from "./layout.module.css";
import { usePathname } from "next/navigation";

const Layout = ({ children }: { children: ReactNode }) => {
  const pathname = usePathname();

  return (
    <>
      <div className={style.title}>{pathname.slice(1)}</div>
      <div>{children}</div>
    </>
  );
};

export default Layout;
