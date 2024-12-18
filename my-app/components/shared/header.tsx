import Image from "next/image";
import style from "./header.module.css";
import { navLinks } from "@/lib/data";
import Link from "next/link";
import BurgerMenu from "./burger-menu";

const Header = () => {
  return (
    <header className={style.header}>
      <div className={style.headerCenter}>
        <BurgerMenu />
        <Link href="/">
          <Image
            width={143}
            height={25}
            alt="logo"
            src="/assets/shared/desktop/logo.svg"
          />
        </Link>

        <nav className={style.nav}>
          {navLinks.map((link) => {
            return (
              <Link key={link.id} href={link.url}>
                {link.title}
              </Link>
            );
          })}
        </nav>
        <button className={style.cartButton}>
          <Image
            width={23}
            height={20}
            alt="cart"
            src="/assets/shared/desktop/icon-cart.svg"
          />
        </button>
      </div>
    </header>
  );
};

export default Header;
