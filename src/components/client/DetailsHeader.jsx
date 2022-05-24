import logoLetter from "../../assets/icons/logo-letter.png";
import play from "../../assets/icons/play.png";
import sound from "../../assets/icons/sound.png";
import close from "../../assets/icons/close.png";
import { useState } from "react";
import classes from "../../styles/client/DetailsHeader.module.css";
import useAccountProvider from "../../store/useAccountProvider";
import LikeTitle from "./LikeTitle";
import DislikeTitle from "./DislikeTitle";
import AddTitleMyList from "./AddTitleMyList";

export default function DetailsHeader({
  item,
  setShowModal,
  openYoutubeVideo,
}) {
  const { account } = useAccountProvider();
  const find =
    account.titlePreferences.find((title) => title.id === item.id) || false;
  const [dislikedTitle, setDislikedTitle] = useState(find.isDisliked);
  const [likedTitle, setLikedTitle] = useState(find.isLiked);
  const actions = [setDislikedTitle, setLikedTitle];

  function onOpenVideo() {
    let query = "";
    item.type === "Series"
      ? (query = item.episodes[0].query)
      : (query = item.query);
    openYoutubeVideo(query);
  }

  return (
    <header className={classes.detailsHeader}>
      <div className={classes.logo}>
        <img src={logoLetter} alt="logo" />
        <span className={classes.type}>{item.type}</span>
      </div>
      <div className={classes.titleLogoWrapper}>
        <img src={item.logo} alt="show's logo" />
      </div>
      <button
        onClick={() => setShowModal(false)}
        className={`${classes.icon} ${classes.close}`}
      >
        <img src={close} alt="close icon" />
      </button>
      <img className={classes.cover} src={item.cover} alt="cover" />
      <div className={classes.buttons}>
        <button onClick={onOpenVideo} className={classes.play}>
          <img src={play} alt="play icon" />
          <span>Play</span>
        </button>
        <AddTitleMyList item={item} />
        <LikeTitle item={item} actions={actions} getter={likedTitle} />
        <DislikeTitle item={item} actions={actions} getter={dislikedTitle} />
        <div className={classes.empty}></div>
        <button className={`${classes.icon} ${classes.sound}`}>
          <img src={sound} alt="sound icon" />
        </button>
      </div>
    </header>
  );
}
