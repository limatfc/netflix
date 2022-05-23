import classes from "../../styles/client/DetailsHeader.module.css";
import useAccountProvider from "../../store/useAccountProvider";
import { editDocument } from "../../scripts/firebase/fireStore";
import dislike from "../../assets/icons/dislike.png";
import dislikeClicked from "../../assets/icons/dislike-clicked.png";

export default function DislikeTitle({ item, actions, getter }) {
  const { uid, addTitlePreference, removeTitlePreference } =
    useAccountProvider();
  const [setDislikedTitle, setLikedTitle] = actions;

  async function onDislike() {
    const newPreference = { id: item.id, isLiked: false, isDisliked: true };
    const updatedArray = addTitlePreference(item.id, newPreference);
    const result = await editDocument("accounts", uid, {
      titlePreferences: updatedArray,
    });
    if (result) {
      setDislikedTitle(true);
      setLikedTitle(false);
    }
  }

  async function onNotDislike() {
    const newPreference = { id: item.id, isLiked: false, isDisliked: false };
    const updatedArray = removeTitlePreference(item.id, newPreference);
    const result = await editDocument("accounts", uid, {
      titlePreferences: updatedArray,
    });
    if (result) {
      setDislikedTitle(false);
      setLikedTitle(false);
    }
  }

  return (
    <>
      {!getter && (
        <button onClick={onDislike} className={classes.icon}>
          <img src={dislike} alt="dislike icon" />
        </button>
      )}
      {getter && (
        <button onClick={onNotDislike} className={classes.icon}>
          <img src={dislikeClicked} alt="dislikeClicked icon" />
        </button>
      )}
    </>
  );
}
