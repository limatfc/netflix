import { useState } from "react";
import classes from "../../styles/admin/Forms.module.css";
import splitString from "../../scripts/logic/splitString";
import initialState from "../../data/AddFormInitialState.json";
import {
  addDocumentWithNoId,
  editDocument,
} from "../../scripts/firebase/fireStore";
import useAccountProvider from "../../store/useAccountProvider";
import FileInput from "../FileInput";
import { addImage } from "../../scripts/logic/addImage";
import AddTextFields from "./AddTextFields";
import Select from "./Select";
import AddNumber from "./AddNumberFields";
import formCheck from "../../scripts/logic/formCheck";

export default function AddForm({ setShowModal }) {
  const [form, setForm] = useState(initialState);
  const [cover, setCover] = useState();
  const [thumb, setThumb] = useState();
  const [error, setError] = useState(null);
  const [status, setStatus] = useState(null);
  const { addTitle } = useAccountProvider();

  async function onAdd(event) {
    event.preventDefault();
    const run = formCheck(form);
    if (run) {
      setStatus(0);
      form.cast = splitString(form.cast);
      form.genres = splitString(form.genres);
      form.adjectives = splitString(form.adjectives);

      const data = await addDocumentWithNoId("titles", form);
      if (data.id) {
        form.id = data.id;
        const coverURL = await addImage(cover, data.id, "cover");
        if (coverURL.result) form.cover = coverURL.result;
        if (coverURL.error) setError(`${coverURL.error}. Please try again`);
        const thumbURL = await addImage(thumb, data.id, "thumb");
        if (thumbURL.error) setError(`${thumbURL.error}. Please try again`);
        if (thumbURL.result) form.thumb = thumbURL.result;
        const editForm = await editDocument("titles", data.id, form);
        if (editForm.result) {
          addTitle(form);
          setShowModal(false);
          setStatus(1);
        }
        if (editForm.error) setError(`${editForm.error}. Please try again`);
      }
      if (data.error) setError(`${data.error}. Please try again`);
      setStatus(2);
    }
    if (!run) setError(" Please check if all fields have been completed");
  }

  let label = status === 0 ? "Loading" : "Add a new title";

  return (
    <div>
      <div
        onClick={() => setShowModal(false)}
        className={classes.backdrop}
      ></div>
      <div className={classes.overlayer}>
        <form onSubmit={onAdd}>
          <small>{error && error}</small>
          <h2>To add a new title, please fill in the fields below:</h2>
          <AddTextFields state={[form, setForm]} />
          <Select state={[form, setForm]} />
          <FileInput label="cover" setter={setCover} />
          <FileInput label="thumbnail" setter={setThumb} />
          {form.type === "Series" && <AddNumber state={[form, setForm]} />}
          <button type="submit">{label}</button>
          <button type="button" onClick={() => setShowModal(false)}>
            Close
          </button>
        </form>
      </div>
    </div>
  );
}
