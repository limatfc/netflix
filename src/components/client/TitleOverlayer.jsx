import { useState } from "react";
import classes from "../../styles/client/TitleOverlayer.module.css";
import DetailsHeader from "./DetailsHeader";
import YoutubeEmbed from "../YoutubeEmbed";
import TitleDetails from "./TitleDetails";
import SeriesEpisodes from "./SeriesEpisodes";

export default function TitleOverlayer({ setShowModal, item }) {
  const [showVideo, setShowVideo] = useState(false);
  const [embedId, setembedId] = useState("");
  const seriesType = !showVideo && item.type === "Series";

  function openYoutubeVideo(query) {
    setShowVideo(true);
    setembedId(query);
  }

  return (
    <div>
      <div
        onClick={() => setShowModal(false)}
        className={classes.backdrop}
      ></div>
      <div className={classes.overlayer}>
        {showVideo && <YoutubeEmbed embedId={embedId} />}
        {!showVideo && (
          <DetailsHeader
            item={item}
            setShowModal={setShowModal}
            openYoutubeVideo={openYoutubeVideo}
          />
        )}
        {!showVideo && <TitleDetails item={item} />}
        {seriesType && (
          <SeriesEpisodes openYoutubeVideo={openYoutubeVideo} item={item} />
        )}
      </div>
    </div>
  );
}
