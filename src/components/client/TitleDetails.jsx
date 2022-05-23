import classes from "../../styles/client/NotSeriesDetails.module.css";

export default function TitleDetails({ item }) {
  let hours = Math.floor(item.duration / 60);
  let minutes = item.duration % 60;
  const cast = item.cast.map((item) => <span key={item}>{item}, </span>);
  const genres = item.genres.map((item) => <span key={item}>{item}, </span>);
  const adjectives = item.adjectives.map((item) => (
    <span key={item}>{item}, </span>
  ));
  const isSeries = item.type === "Series";
  const notSeries = item.type !== "Series";
  let totalSeries = "";
  if (isSeries) {
    const seasons = item.episodes.map((item) => item.season);
    totalSeries = Math.max(...seasons);
  }

  return (
    <div className={classes.notSeriesDetails}>
      <div className={classes.technical}>
        {notSeries && (
          <span className={classes.match}>
            {Math.floor(Math.random() * 100)}% Match
          </span>
        )}
        <span className={classes.year}>{item.releaseYear}</span>
        {item.minAge > 0 && <span>{item.minAge}</span>}
        {notSeries && (
          <span className={classes.duration}>
            {hours}h {minutes}m
          </span>
        )}
        {isSeries && <span>{`${totalSeries} Seasons`}</span>}
        <span>HD</span>
      </div>
      <div className={classes.description}>
        <p>{item.description}</p>
      </div>
      <div className={classes.classification}>
        <section>
          Cast: {cast}
          <span>
            <i>more</i>
          </span>
        </section>
        <section>Genres: {genres}</section>
        <section>
          This {item.type} is: {adjectives}
        </section>
      </div>
    </div>
  );
}
