import { useState } from "react";
import useAccountProvider from "../../store/useAccountProvider";
import classes from "../../styles/client/Top10Card.module.css";
import Modal from "../Modal";
import TitleOverlayer from "./TitleOverlayer";

export default function Top10Card({ item }) {
  const { titles } = useAccountProvider();
  const [showModal, setShowModal] = useState(false);
  return (
    <div className={classes.top10card}>
      <button onClick={() => setShowModal(true)}>
        <div>
          <img
            className={classes.number}
            src={require(`../../assets/images/${item.pic}.png`)}
            alt="a number"
          />
          <img
            className={classes.thumb}
            src={titles[item.index].top10}
            alt="thumbnail of the title"
          />
        </div>
      </button>
      {showModal && (
        <Modal>
          <TitleOverlayer
            setShowModal={setShowModal}
            item={titles[item.index]}
          />
        </Modal>
      )}
    </div>
  );
}
