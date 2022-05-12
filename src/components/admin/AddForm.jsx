import { useState } from "react";
import data from "../../data/addForm.json";
import classes from "../../styles/admin/Forms.module.css";
import InputField from "../InputField";
import splitString from "../../scripts/logic/splitString";
import initialState from "../../data/AddFormInitialState.json";
import {
  addDocumentWithNoId,
  editDocument,
} from "../../scripts/firebase/fireStore";
import useAccountProvider from "../../store/useAccountProvider";
import FileInput from "../FileInput";
import { addImage } from "../../scripts/logic/addImage";

export default function AddForm({ setShowModal }) {
  const [form, setForm] = useState(initialState);
  const [cover, setCover] = useState();
  const [thumb, setThumb] = useState();
  const [error, setError] = useState(null);
  const [status, setStatus] = useState(null);
  const checkEmpty = (input) => input !== "";
  const numberCheck = (input) => input !== "" && input > 0;
  const { addTitle } = useAccountProvider();

  const titleAndDescription = data.emptyCheck.map((item) => (
    <InputField
      key={item.key}
      setup={item}
      state={[form, setForm]}
      check={checkEmpty}
    />
  ));

  const options = data.type.map((item) => (
    <option value={item} key={item}>
      {item}
    </option>
  ));

  const series = data.numberCheck.map((item) => (
    <InputField
      key={item.key}
      setup={item}
      state={[form, setForm]}
      check={numberCheck}
    />
  ));

  async function onAdd(event) {
    event.preventDefault();
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
          {titleAndDescription}
          <select
            onChange={(event) => setForm({ ...form, type: event.target.value })}
          >
            Type
            {options}
          </select>
          <FileInput label="cover" setter={setCover} />
          <FileInput label="thumbnail" setter={setThumb} />
          {form.type === "Series" && series}
          <button type="submit">{label}</button>
          <button type="button" onClick={() => setShowModal(false)}>
            Close
          </button>
        </form>
      </div>
    </div>
  );
}