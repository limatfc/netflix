import { Menu, MenuItem } from "@szhsin/react-menu";
import "@szhsin/react-menu/dist/index.css";
import "@szhsin/react-menu/dist/transitions/slide.css";
import { useState } from "react";
import classes from "../../styles/client/SeriesEpisodes.module.css";
import EpisodeCard from "./EpisodeCard";
import down from "../../assets/icons/down.png";

export default function SeriesEpisodes({ item }) {
  const repeatedSeasons = item.episodes.map((item) => item.season);
  let seasons = [];
  for (let i = 0; i < repeatedSeasons.length; i++) {
    if (!seasons.includes(repeatedSeasons[i])) seasons.push(repeatedSeasons[i]);
  }
  const initialState = seasons[0];
  const [chosenSeason, setChosenSeason] = useState(initialState);

  function onChange(event) {
    setChosenSeason(event.value);
  }

  const availableSeasons = seasons.map((item) => (
    <MenuItem className={classes.select} value={item} onClick={onChange}>
      Season {item}
    </MenuItem>
  ));

  const episodesPerSeason = item.episodes.filter(
    (item) => item.season === chosenSeason
  );
  const episodeCards = episodesPerSeason.map((item) => (
    <EpisodeCard item={item} key={item.id} />
  ));

  return (
    <div className={classes.seriesEpisodes}>
      <div className={classes.header}>
        <h3>Episodes</h3>
        <div className={classes.empty}></div>
        <Menu
          menuButton={
            <button className={classes.select}>
              Season {chosenSeason} <img src={down} alt="an arrow head" />
            </button>
          }
          transition
        >
          {availableSeasons}
        </Menu>
      </div>
      <div className={classes.episodes}>
        <hr />
        <div>{episodeCards}</div>
      </div>
    </div>
  );
}
