import classes from "../../styles/admin/Forms.module.css";

export default function SeriesDetails({ setShowModal, item }) {
  return (
    <div>
      <div
        onClick={() => setShowModal(false)}
        className={classes.backdrop}
      ></div>
      <div className={classes.overlayer}>SeriesDetails</div>
    </div>
  );
}
