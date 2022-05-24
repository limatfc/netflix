import useAccountProvider from "../../store/useAccountProvider";
import TitleCard from "./TitleCard";
import classes from "../../styles/client/TitleCategories.module.css";

export default function TitleCategories() {
  const { titles, account } = useAccountProvider();
  const movies = titles.filter((item) => item.type === "Movie");
  const documentaries = titles.filter((item) => item.type === "Documentary");
  const series = titles.filter((item) => item.type === "Series");
  const showList = account.myList.length !== 0;

  const movieCard = movies.map((item) => (
    <TitleCard item={item} key={item.id} />
  ));
  const documentaryCard = documentaries.map((item) => (
    <TitleCard item={item} key={item.id} />
  ));
  const seriesCard = series.map((item) => (
    <TitleCard item={item} key={item.id} />
  ));

  const myListTitles = account.myList.map((item) => {
    const findMatch = titles.find((title) => title.id === item);
    return findMatch;
  });

  const myListCard = myListTitles.map((item) => (
    <TitleCard item={item} key={item.id} />
  ));
  return (
    <div className={classes.titleCategories}>
      {showList && <h2>My List</h2>}
      {showList && <div className={classes.categoryList}>{myListCard}</div>}
      {/* <div className={classes.categoryList}>
        <h2>Continue watching for</h2>
      </div>  */}

      <h2>Movies</h2>
      <div className={classes.categoryList}>{movieCard}</div>

      <h2>Series</h2>
      <div className={classes.categoryList}>{seriesCard}</div>

      <h2>Documentaries</h2>
      <div className={classes.categoryList}>{documentaryCard}</div>
      {/* <div className={classes.categoryList}>
        <h2>Top 10 in Sweden Today</h2>
      </div> */}
    </div>
  );
}
