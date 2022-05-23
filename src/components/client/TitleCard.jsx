import { useState } from "react";
import classes from "../../styles/client/TitleCard.module.css";
import NotSeriesDetails from "./NotSeriesDetails";
import Modal from "../Modal";
import showComingSoon from "../../scripts/logic/showComingSoon";
import SeriesDetails from "./SeriesDetails";

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
          {item.type !== "Series" && (
            <NotSeriesDetails setShowModal={setShowModal} item={item} />
          )}
          {item.type === "Series" && (
            <SeriesDetails setShowModal={setShowModal} item={item} />
          )}
        </Modal>
      )}
    </div>
  );
}
