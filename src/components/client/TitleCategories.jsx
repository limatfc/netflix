import useAccountProvider from "../../store/useAccountProvider";
import TitleCard from "./TitleCard";
import classes from "../../styles/client/TitleCategories.module.css";

export default function TitleCategories() {
  const { titles } = useAccountProvider();
  const movies = titles.filter((item) => item.type === "Movie");
  const documentaries = titles.filter((item) => item.type === "Documentary");
  const series = titles.filter((item) => item.type === "Series");

  const movieCard = movies.map((item) => (
    <TitleCard item={item} key={item.id} />
  ));
  const documentaryCard = documentaries.map((item) => (
    <TitleCard item={item} key={item.id} />
  ));
  const seriesCard = series.map((item) => (
    <TitleCard item={item} key={item.id} />
  ));

  return (
    <div className={classes.titleCategories}>
      <h2>Movies</h2>
      {movieCard}
      <h2>Series</h2>
      {seriesCard}
      <h2>Documentaries</h2>
      {documentaryCard}
    </div>
  );
}
