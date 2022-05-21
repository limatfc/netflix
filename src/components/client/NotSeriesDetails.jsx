import classes from "../../styles/client/NotSeriesDetails.module.css";
import DetailsHeader from "./DetailsHeader";

export default function NotSeriesDetails({ setShowModal, item }) {
  let hours = Math.floor(item.duration / 60);
  let minutes = item.duration % 60;

  const cast = item.cast.map((item) => <span key={item}>{item}, </span>);
  const genres = item.genres.map((item) => <span key={item}>{item}, </span>);
  const adjectives = item.adjectives.map((item) => (
    <span key={item}>{item}, </span>
  ));
  return (
    <div>
      <div
        onClick={() => setShowModal(false)}
        className={classes.backdrop}
      ></div>
      <div className={classes.overlayer}>
        <DetailsHeader item={item} />
        <div className={classes.notSeriesDetails}>
          <div className={classes.technical}>
            <span className={classes.match}>
              {Math.floor(Math.random() * 100)}% Match
            </span>
            <span className={classes.year}>{item.releaseYear}</span>
            {item.minAge > 0 && <span>{item.minAge}</span>}
            <span className={classes.duration}>
              {hours}h {minutes}m
            </span>
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
      </div>
    </div>
  );
}
