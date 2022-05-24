import { useState } from "react";
import classes from "../../styles/client/TitleCard.module.css";
import TitleOverlayer from "./TitleOverlayer";
import Modal from "../Modal";
import showComingSoon from "../../scripts/logic/showComingSoon";

export default function TitleCard({ item }) {
  const [showModal, setShowModal] = useState(false);

  let label = "";
  if (item.type === "Series") {
    const isComingSoon = showComingSoon(item);
    label = isComingSoon;
  }

  return (
    <div className={classes.titleCard}>
      <button onClick={() => setShowModal(true)}>
        {label && <span>COMING SOON</span>}
        <img src={item.thumb} alt="thumbnail of the title" />
      </button>
      {showModal && (
        <Modal>
          <TitleOverlayer setShowModal={setShowModal} item={item} />
        </Modal>
      )}
    </div>
  );
}
