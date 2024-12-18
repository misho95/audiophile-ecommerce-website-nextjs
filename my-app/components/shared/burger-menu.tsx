"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import style from "./burger-menu.module.css";
import { navLinks } from "@/lib/data";
import Link from "next/link";
import Button from "../ui/button";

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
            {navLinks.slice(1, 4).map((link) => {
              return (
                <Link href={link.url} key={link.id} className={style.links}>
                  <Image
                    width={103}
                    height={104}
                    alt={link.title}
                    src={link.icon}
                  />
                  <h3>{link.title}</h3>
                  <Button variant="icon">
                    shop{" "}
                    <Image
                      width={5}
                      height={10}
                      alt="shop"
                      src="/assets/shared/desktop/icon-arrow-right.svg"
                    />
                  </Button>
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
};

export default BurgerMenu;
