import classes from "../../styles/client/TitleCard.module.css";

export default function TitleCard({ item }) {
  return (
    <div className={classes.titleCard}>
      <img src={item.thumb} alt="thumbnail of the title" />
    </div>
  );
}
