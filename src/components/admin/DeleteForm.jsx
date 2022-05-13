import classes from "../../styles/admin/Forms.module.css";

export default function DeleteForm({ setter }) {
  return (
    <div>
      <div onClick={() => setter(false)} className={classes.backdrop}></div>
      <div className={classes.overlayer}></div>
    </div>
  );
}
