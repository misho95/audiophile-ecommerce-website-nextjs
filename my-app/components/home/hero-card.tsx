import Button from "../ui/button";
import style from "./hero-card.module.css";

const HeroCard = () => {
  return (
    <section className={style.heroCard}>
      <div className={style.heroCardCenter}>
        <article className={style.heroArticle}>
          <h4>new product</h4>
          <h1>xx99 mark ii headphones</h1>
          <p>
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>
          <Button>see porudct</Button>
        </article>
      </div>
    </section>
  );
};

export default HeroCard;
