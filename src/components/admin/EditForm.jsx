import classes from "../../styles/admin/Forms.module.css";
import AddTextFields from "./AddTextFields";
import { useState } from "react";
import Select from "./Select";
import FileInput from "../FileInput";
import splitString from "../../scripts/logic/splitString";
import formCheck from "../../scripts/logic/formCheck";
import { addImage } from "../../scripts/logic/addImage";
import { editDocument } from "../../scripts/firebase/fireStore";
import useAccountProvider from "../../store/useAccountProvider";

export default function EditForm({ setter, item }) {
  const [form, setForm] = useState(item);
  const [cover, setCover] = useState(item.cover);
  const [thumb, setThumb] = useState(item.thumb);
  const [status, setStatus] = useState(null);
  const [error, setError] = useState(null);
  const { editTitle } = useAccountProvider();

  async function onEdit(event) {
    event.preventDefault();
    const run = formCheck(form);
    if (run) {
      setStatus(0);
      if (form.cast !== item.cast) form.cast = splitString(form.cast);
      if (form.genres !== item.genres) form.genres = splitString(form.genres);
      if (form.adjectives !== item.adjectives)
        form.adjectives = splitString(form.adjectives);
      const coverURL = await addImage(cover, form.id, "cover");
      if (coverURL.result) form.cover = coverURL.result;
      if (coverURL.error) setError(`${coverURL.error}. Please try again`);
      const thumbURL = await addImage(thumb, form.id, "thumb");
      if (thumbURL.error) setError(`${thumbURL.error}. Please try again`);
      if (thumbURL.result) form.thumb = thumbURL.result;
      const editForm = await editDocument("titles", form.id, form);
      if (editForm.result) {
        editTitle(form);
        setter(false);
        setStatus(1);
      }
      if (editForm.error) setError(`${editForm.error}. Please try again`);
    }

    if (!run) setError(" Please check if all fields have been completed");
  }

  let label = status === 0 ? "Loading" : "Edit title";
  return (
    <div>
      <div onClick={() => setter(false)} className={classes.backdrop}></div>
      <div className={classes.overlayer}>
        <form onSubmit={onEdit}>
          <small>{error && error}</small>
          <h2>
            To edit the {item.title} content information, please complete the
            form bellow:
          </h2>
          <AddTextFields state={[form, setForm]} />
          <Select state={[form, setForm]} />
          <FileInput label="cover" setter={setCover} />
          <FileInput label="thumbnail" setter={setThumb} />
          <button type="submit">{label}</button>
          <button type="button" onClick={() => setter(false)}>
            Close
          </button>
        </form>
      </div>
    </div>
  );
}
