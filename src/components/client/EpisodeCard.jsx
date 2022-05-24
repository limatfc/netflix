import classes from "../../styles/client/EpisodeCard.module.css";

export default function EpisodeCard({ item, openYoutubeVideo }) {
  function onClick() {
    openYoutubeVideo(item.query);
  }

  return (
    <div>
      <button onClick={onClick} className={classes.episodeCard}>
        <span className={classes.number}>{item.episode}</span>
        <img src={item.thumb} alt="episode thumb" />
        <div className={classes.details}>
          <span className={classes.title}>{item.title}</span>
          <span className={classes.description}>{item.description}</span>
          <span className={classes.duration}>{item.duration}m</span>
        </div>
      </button>
    </div>
  );
}
