"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import style from "./burger-menu.module.css";
import NavMenu from "./nav-menu";

const BurgerMenu = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      document.documentElement.classList.add("hide-scroll");
      document.documentElement.scrollTo(0, 0);
    } else {
      document.documentElement.classList.remove("hide-scroll");
    }
  }, [open]);

  return (
    <>
      <button onClick={() => setOpen(!open)} className={style.burgerButton}>
        <Image
          style={{ objectFit: "cover" }}
          width={16}
          height={15}
          alt=""
          src="/assets/shared/tablet/icon-hamburger.svg"
        />
      </button>
      {open && (
        <div className={style.container}>
          <div className={style.burgerMenu}>
            <NavMenu />
          </div>
        </div>
      )}
    </>
  );
};

export default BurgerMenu;
