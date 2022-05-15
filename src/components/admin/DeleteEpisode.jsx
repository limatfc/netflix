import { useState } from "react";
import { editDocument } from "../../scripts/firebase/fireStore";
import useAccountProvider from "../../store/useAccountProvider";
import classes from "../../styles/admin/Forms.module.css";

export default function DeleteEpisode({ setDeleteItem, episode, id }) {
  const [error, setError] = useState(null);
  const [status, setStatus] = useState(null);
  const { deleteEpisode } = useAccountProvider();

  let label = status === 0 ? "Loading" : "Yes, I am sure";

  async function onDelete() {
    setStatus(0);
    const find = deleteEpisode(id, episode.id);
    const data = await editDocument("titles", id, find);
    if (data.result) {
      setStatus(1);
      setDeleteItem(false);
    }
    if (data.error) {
      setStatus(2);
      setError(data.error);
    }
  }

  return (
    <div>
      <div
        onClick={() => setDeleteItem(false)}
        className={classes.backdrop}
      ></div>
      <div className={classes.overlayer}>
        <small>{error && error}</small>
        <h2>
          Are you sure you want to delete the episode {episode.episode} from
          season {episode.season}?
        </h2>
        <button onClick={onDelete}>{label}</button>
        <button onClick={() => setDeleteItem(false)}>Cancel</button>
      </div>
    </div>
  );
}
