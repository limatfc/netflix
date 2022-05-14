import { useState } from "react";
import classes from "../../styles/admin/Forms.module.css";
import { deleteDocument } from "../../scripts/firebase/fireStore";
import { deleteFile } from "../../scripts/firebase/cloudStorage";
import useAccountProvider from "../../store/useAccountProvider";

export default function DeleteForm({ setter, item }) {
  const [status, setStatus] = useState(null);
  const [error, setError] = useState(null);
  const { deleteTitle } = useAccountProvider();

  async function onDelete() {
    setStatus(0);
    const data = await deleteDocument("titles", item.id);
    setStatus(2);
    if (data.result) {
      deleteTitle(item.id);
      deleteFile(`activity/${item.id}.png`);
      setStatus(1);
    }

    if (data.error) {
      setError(data.error);
    }
  }

  let label = status === 0 ? "Loading" : "Yes, I am sure";

  return (
    <div>
      <div onClick={() => setter(false)} className={classes.backdrop}></div>
      <div className={classes.overlayer}>
        <small>{error && error}</small>
        <h2>
          Are you sure you want to delete the {item.title} {item.type}?
        </h2>
        <button onClick={onDelete}>{label}</button>
        <button onClick={() => setter(false)}>Cancel</button>
      </div>
    </div>
  );
}
