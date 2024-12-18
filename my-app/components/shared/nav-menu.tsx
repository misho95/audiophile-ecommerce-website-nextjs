import { navLinks } from "@/lib/data";
import Link from "next/link";
import style from "./nav-menu.module.css";
import Image from "next/image";
import Button from "../ui/button";

const NavMenu = () => {
  return navLinks.slice(1, 4).map((link) => {
    return (
      <Link href={link.url} key={link.id} className={style.links}>
        <div className={style.onTop}>
          <Image
            width={104}
            height={104}
            alt={link.title}
            src={link.icon}
            className={style.styledImg}
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
        </div>
        <div className={style.styledBackground} />
      </Link>
    );
  });
};

export default NavMenu;
