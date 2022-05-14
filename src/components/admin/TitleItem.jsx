import { useState } from "react";
import Modal from "../Modal";
import DeleteForm from "./DeleteForm";
import EditForm from "./EditForm";
import ItemDetails from "./ItemDetails";

export default function TitleItem({ item }) {
  const [details, setDetails] = useState(false);
  const [editItem, setEditItem] = useState(false);
  const [deleteItem, setDeleteItem] = useState(false);

  return (
    <div>
      <button onClick={() => setDetails(!details)}>
        <h3>Title: {item.title}</h3>
      </button>
      {details && (
        <ItemDetails item={item} setter={{ setEditItem, setDeleteItem }} />
      )}
      <Modal>
        {editItem && <EditForm setter={setEditItem} item={item} />}
        {deleteItem && <DeleteForm setter={setDeleteItem} item={item} />}
      </Modal>
    </div>
  );
}
