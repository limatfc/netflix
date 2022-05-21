import logoLetter from "../../assets/icons/logo-letter.png";
import play from "../../assets/icons/play.png";
import plus from "../../assets/icons/plus.png";
import like from "../../assets/icons/like.png";
import dislike from "../../assets/icons/dislike.png";
import sound from "../../assets/icons/sound.png";
import close from "../../assets/icons/close.png";
import classes from "../../styles/client/DetailsHeader.module.css";

export default function DetailsHeader({ item }) {
  return (
    <header className={classes.detailsHeader}>
      <div className={classes.logo}>
        <img src={logoLetter} alt="logo" />
        <span className={classes.type}>{item.type}</span>
      </div>
      <div className={classes.titleLogoWrapper}>
        <img src={item.logo} alt="show's logo" />
      </div>
      <button className={`${classes.icon} ${classes.close}`}>
        <img src={close} alt="close icon" />
      </button>
      <img className={classes.cover} src={item.cover} alt="cover" />
      <div className={classes.buttons}>
        <button className={classes.play}>
          <img src={play} alt="play icon" />
          <span>Play</span>
        </button>
        <button className={classes.icon}>
          <img src={plus} alt="plus icon" />
        </button>
        <button className={classes.icon}>
          <img src={like} alt="like icon" />
        </button>
        <button className={classes.icon}>
          <img src={dislike} alt="dislike icon" />
        </button>
        <div className={classes.empty}></div>
        <button className={classes.icon}>
          <img src={sound} alt="sound icon" />
        </button>
      </div>
    </header>
  );
}
