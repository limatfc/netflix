import plus from "../../assets/icons/plus.png";
import classes from "../../styles/client/DetailsHeader.module.css";
import check from "../../assets/icons/check.png";
import { useState } from "react";
import useAccountProvider from "../../store/useAccountProvider";
import { editDocument } from "../../scripts/firebase/fireStore";

export default function AddTitleMyList({ item }) {
  const { uid, addTitleMyList, account, removeTitleMyList } =
    useAccountProvider();

  const includes = account.myList.includes(item.id);
  const [added, setAdded] = useState(includes);

  async function onAddMyList() {
    const newList = addTitleMyList(item.id);
    const result = await editDocument("accounts", uid, {
      myList: newList,
    });
    if (result) setAdded(true);
  }

  async function onRemoveMyList() {
    const newList = removeTitleMyList(item.id);
    const result = await editDocument("accounts", uid, {
      myList: newList,
    });
    if (result) setAdded(false);
  }

  return (
    <>
      {!added && (
        <button onClick={onAddMyList} className={classes.icon}>
          <img src={plus} alt="plus icon" />
        </button>
      )}
      {added && (
        <button onClick={onRemoveMyList} className={classes.icon}>
          <img src={check} alt="check icon" />
        </button>
      )}
    </>
  );
}
