import HeroCard from "@/components/home/hero-card";
import NavMenu from "@/components/shared/nav-menu";
import styles from "./page.module.css";
import Zx9Hero from "@/components/home/zx9-hero";

export default function Home() {
  return (
    <main className={styles.styledMain}>
      <HeroCard />
      <section className={styles.styledSection}>
        <div className={styles.styledDiv}>
          <NavMenu />
        </div>
        <Zx9Hero />
      </section>
    </main>
  );
}
