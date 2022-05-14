import classes from "../../styles/admin/Forms.module.css";
import AddTextFields from "./AddTextFields";
import { useState } from "react";
import Select from "./Select";
import AddNumber from "./AddNumberFields";

export default function EditForm({ setter, item }) {
  const [form, setForm] = useState(item);

  return (
    <div>
      <div onClick={() => setter(false)} className={classes.backdrop}></div>
      <div className={classes.overlayer}>
        <form>
          <h2>
            To edit the {item.title} content information, please complete the
            form bellow:
          </h2>
          <AddTextFields state={[form, setForm]} />
          <Select state={[form, setForm]} />
          {form.type === "Series" && <AddNumber state={[form, setForm]} />}
          <button type="submit">Edit</button>
          <button type="button" onClick={() => setter(false)}>
            Close
          </button>
        </form>
      </div>
    </div>
  );
}
