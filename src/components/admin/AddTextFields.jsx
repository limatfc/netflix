import data from "../../data/addForm.json";
import InputField from "../InputField";

export default function AddTextFields({ state }) {
  const [form, setForm] = state;
  const checkEmpty = (input) => input !== "";

  const textFields = data.emptyCheck.map((item) => (
    <InputField
      key={item.key}
      setup={item}
      state={[form, setForm]}
      check={checkEmpty}
    />
  ));

  return textFields;
}
