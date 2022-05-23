import classes from "../../styles/client/NotSeriesDetails.module.css";
import DetailsHeader from "./DetailsHeader";

export default function NotSeriesDetails({ setShowModal, item }) {
  return (
    <div>
      <div
        onClick={() => setShowModal(false)}
        className={classes.backdrop}
      ></div>
      <div className={classes.overlayer}>
        <DetailsHeader item={item} />
      </div>
    </div>
  );
}
