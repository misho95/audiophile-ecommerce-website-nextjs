import Button from "../ui/button";
import style from "./zx9-hero.module.css";

const Zx9Hero = () => {
  return (
    <article className={style.styledArticle}>
      <div className={style.styledInfo}>
        <h1>zx9 speaker</h1>
        <p>
          Upgrade to premium speakers that are phenomenally built to deliver
          truly remarkable sound.
        </p>
        <Button variant="secondary">see product</Button>
      </div>
    </article>
  );
};

export default Zx9Hero;
