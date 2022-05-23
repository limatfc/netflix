import classes from "../../styles/client/DetailsHeader.module.css";
import useAccountProvider from "../../store/useAccountProvider";
import { editDocument } from "../../scripts/firebase/fireStore";
import like from "../../assets/icons/like.png";
import likeClicked from "../../assets/icons/like-clicked.png";

export default function LikeTitle({ item, actions, getter }) {
  const { uid, addTitlePreference, removeTitlePreference } =
    useAccountProvider();
  const [setDislikedTitle, setLikedTitle] = actions;

  async function onLike() {
    const newPreference = { id: item.id, isLiked: true, isDisliked: false };
    const updatedArray = addTitlePreference(item.id, newPreference);
    const result = await editDocument("accounts", uid, {
      titlePreferences: updatedArray,
    });
    if (result) {
      setLikedTitle(true);
      setDislikedTitle(false);
    }
  }

  async function onNotLike() {
    const newPreference = { id: item.id, isLiked: false, isDisliked: false };
    const updatedArray = removeTitlePreference(item.id, newPreference);
    const result = await editDocument("accounts", uid, {
      titlePreferences: updatedArray,
    });
    if (result) {
      setLikedTitle(false);
      setDislikedTitle(false);
    }
  }

  return (
    <>
      {!getter && (
        <button onClick={onLike} className={classes.icon}>
          <img src={like} alt="like icon" />
        </button>
      )}
      {getter && (
        <button onClick={onNotLike} className={classes.icon}>
          <img src={likeClicked} alt="likeClicked icon" />
        </button>
      )}
    </>
  );
}
