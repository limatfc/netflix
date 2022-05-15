import { useState } from "react";
import classes from "../../styles/admin/Forms.module.css";
import InputField from "../InputField";
import set from "../../data/AddEpisode.json";
import useAccountProvider from "../../store/useAccountProvider";
import { editDocument } from "../../scripts/firebase/fireStore";

export default function EditEpisode({ setEditItem, episode, id }) {
  const [input, setInput] = useState(episode);
  const [status, setStatus] = useState(null);
  const [error, setError] = useState(null);
  const { editEpisode } = useAccountProvider();
  const check = (input) => input !== "";
  const number = (input) => input > 0 && input !== "";
  let label = status === 0 ? "Loading" : "Edit episode information";

  async function onEdit(event) {
    event.preventDefault();
    const editedTitle = await editEpisode(id, episode.id, input);
    const data = editDocument("titles", id, editedTitle);
    if (data.result) {
      setStatus(1);
      setEditItem(false);
    }
    if (data.error) {
      setStatus(2);
      setError(data.error);
    }
  }

  return (
    <div>
      <div
        onClick={() => setEditItem(false)}
        className={classes.backdrop}
      ></div>
      <div className={classes.overlayer}>
        <form onSubmit={onEdit}>
          <small>{error && error}</small>
          <h2>To edit the episode, please complete the information below:</h2>
          <InputField setup={set.se} state={[input, setInput]} check={number} />
          <InputField setup={set.ep} state={[input, setInput]} check={number} />
          <InputField setup={set.de} state={[input, setInput]} check={check} />
          <InputField setup={set.qe} state={[input, setInput]} check={check} />
          <InputField setup={set.th} state={[input, setInput]} check={check} />
          <button type="submit">{label}</button>
          <button type="button" onClick={() => setEditItem(false)}>
            Close
          </button>
        </form>
      </div>
    </div>
  );
}
