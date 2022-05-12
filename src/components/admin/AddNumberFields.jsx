import InputField from "../InputField";
import data from "../../data/addForm.json";
const numberCheck = (input) => input !== "" && input > 0;

export default function AddNumberFields({ state }) {
  const [form, setForm] = state;
  const series = data.numberCheck.map((item) => (
    <InputField
      key={item.key}
      setup={item}
      state={[form, setForm]}
      check={numberCheck}
    />
  ));
  return series;
}
