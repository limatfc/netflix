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
      <button className={classes.play}>
        <img src={close} alt="close icon" />
      </button>
      <img src={item.cover} alt="description" />
      <div className={classes.buttons}>
        <button className={classes.play}>
          <img src={play} alt="play icon" />
          <span>Play</span>
        </button>
        <button>
          <img src={plus} alt="plus icon" />
        </button>
        <button>
          <img src={like} alt="like icon" />
        </button>
        <button>
          <img src={dislike} alt="dislike icon" />
        </button>
        <div className={classes.empty}></div>
        <button>
          <img src={sound} alt="sound icon" />
        </button>
      </div>
    </header>
  );
}
