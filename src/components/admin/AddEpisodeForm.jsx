import classes from "../../styles/admin/Forms.module.css";
import set from "../../data/AddEpisode.json";
import InputField from "../InputField";
import { useState } from "react";
import useAccountProvider from "../../store/useAccountProvider";
import addEpisodeInitialState from "../../data/addEpisodeInitialState.json";
import { editDocument } from "../../scripts/firebase/fireStore";

export default function AddEpisodeForm({ setAddEpisode, data }) {
  const { titles, addEpisode } = useAccountProvider();
  const [input, setInput] = useState(addEpisodeInitialState);
  const [error, setError] = useState("");
  const [status, setStatus] = useState(null);
  const check = (input) => input !== "";
  const number = (input) => input > 0 && input !== "";
  const find = titles.find((item) => item.id === data.id);

  async function onAdd(event) {
    event.preventDefault();
    input.id = find.episodes.length;
    find.episodes = [...find.episodes, input];
    setStatus(0);
    const result = await editDocument("titles", data.id, find);

    if (result.result) {
      addEpisode(find);
      setAddEpisode(false);
      setStatus(1);
    }
    if (result.error) {
      setError(result.error);
      setStatus(2);
    }
  }
  let label = status === 0 ? "Loading" : "Add a new episode";
  return (
    <div>
      <div
        onClick={() => setAddEpisode(false)}
        className={classes.backdrop}
      ></div>
      <div className={classes.overlayer}>
        <form onSubmit={onAdd}>
          <small>{error && error}</small>
          <h2>To add a new episode, please complete the information below:</h2>
          <InputField setup={set.se} state={[input, setInput]} check={number} />
          <InputField setup={set.ep} state={[input, setInput]} check={number} />
          <InputField setup={set.de} state={[input, setInput]} check={check} />
          <InputField setup={set.qe} state={[input, setInput]} check={check} />
          <InputField setup={set.th} state={[input, setInput]} check={check} />
          <button type="submit">{label}</button>
          <button type="button" onClick={() => setAddEpisode(false)}>
            Close
          </button>
        </form>
      </div>
    </div>
  );
}
