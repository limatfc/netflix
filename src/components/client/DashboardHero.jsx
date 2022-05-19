import useAccountProvider from "../../store/useAccountProvider";
import logoLetter from "../../assets/icons/logo-letter.png";
import play from "../../assets/icons/play.png";
import info from "../../assets/icons/info_white.png";
import sound from "../../assets/icons/sound.png";
import classes from "../../styles/client/Hero.module.css";
import showComingSoon from "../../scripts/logic/showComingSoon";

export default function DashboardHero() {
  const { titles } = useAccountProvider();

  const randomIndex = Math.floor(Math.random() * titles.length);
  let label = "";
  if (titles[randomIndex].type === "Series") {
    const isComingSoon = showComingSoon(titles[randomIndex]);
    label = isComingSoon;
  }
  console.log(label);
  return (
    <div className={classes.hero}>
      <img
        className={classes.background}
        src={titles[randomIndex].cover}
        alt="description"
      />
      <div className={classes.logo}>
        <img src={logoLetter} alt="logo" />
        <span className={classes.type}>{titles[randomIndex].type}</span>
      </div>
      <div className={classes.logowrapper}>
        <img src={titles[randomIndex].logo} alt="show's logo" />
      </div>
      <h2 className={classes.coming}>{label && "Coming soon"}</h2>
      <h3>{titles[randomIndex].description}</h3>
      <div className={classes.buttons}>
        <button className={`${classes.icon} ${classes.play}`}>
          <img src={play} alt="play icon" />
          <span>Play</span>
        </button>
        <button className={`${classes.icon} ${classes.info}`}>
          <img src={info} alt="info icon" />
          <span>More Info</span>
        </button>
        <div className={classes.empty}></div>
        <div className={classes.sound}>
          <img src={sound} alt="sound icon" />
          <span>13+</span>
        </div>
      </div>
    </div>
  );
}
