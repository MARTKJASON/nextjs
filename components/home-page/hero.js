import Image from "next/image";
import classes from "./hero.module.css";

function Hero() {
  return (
    <section className={classes.hero}>
      <div className="clasess.image">
        <Image
          src='/images/profile.jpg'
          alt="Profile"
          width={300}
          height={300}
        />
      </div>
      <h1> Hi I am Mark</h1>
      <p>I blog about my journey on web development </p>
    </section>
  );
}

export default Hero;
