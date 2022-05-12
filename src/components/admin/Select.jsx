import data from "../../data/addForm.json";

export default function Select({ state }) {
  const [form, setForm] = state;
  const options = data.type.map((item) => (
    <option value={item} key={item}>
      {item}
    </option>
  ));

  return (
    <select
      onChange={(event) => setForm({ ...form, type: event.target.value })}
    >
      Type
      {options}
    </select>
  );
}
