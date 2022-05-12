import { useState } from "react";
import data from "../../data/addForm.json";
import classes from "../../styles/admin/Forms.module.css";
import InputField from "../InputField";
import splitString from "../../scripts/logic/splitString";
import initialState from "../../data/AddFormInitialState.json";
import { addDocumentWithNoId } from "../../scripts/firebase/fireStore";
import useAccountProvider from "../../store/useAccountProvider";

export default function AddForm({ setShowModal }) {
  const [form, setForm] = useState(initialState);
  const [error, setError] = useState(null);
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

  function onAdd(event) {
    event.preventDefault();

    form.cast = splitString(form.cast);
    form.genres = splitString(form.genres);
    form.adjectives = splitString(form.adjectives);

    const data = addDocumentWithNoId("titles", form);
    if (data.id) {
      form.id = data.id;
      addTitle(form);
      setShowModal(false);
    }
    if (data.error) setError(`${data.error}. Please try again`);
  }

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
          {form.type === "Series" && series}
          <button type="submit">Add a new title</button>
          <button type="button" onClick={() => setShowModal(false)}>
            Close
          </button>
        </form>
      </div>
    </div>
  );
}
