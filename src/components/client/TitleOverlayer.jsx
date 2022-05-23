import { useState } from "react";
import classes from "../../styles/client/NotSeriesOverlayer.module.css";
import DetailsHeader from "./DetailsHeader";
import YoutubeEmbed from "../YoutubeEmbed";
import TitleDetails from "./TitleDetails";
import SeriesEpisodes from "./SeriesEpisodes";

export default function TitleOverlayer({ setShowModal, item }) {
  const [showVideo, setShowVideo] = useState(false);
  const seriesType = !showVideo && item.type === "Series";

  return (
    <div>
      <div
        onClick={() => setShowModal(false)}
        className={classes.backdrop}
      ></div>
      <div className={classes.overlayer}>
        {showVideo && <YoutubeEmbed embedId={item.query} />}
        {!showVideo && (
          <DetailsHeader
            item={item}
            setShowModal={setShowModal}
            setShowVideo={setShowVideo}
          />
        )}
        {!showVideo && <TitleDetails item={item} />}
        {seriesType && <SeriesEpisodes item={item} />}
      </div>
    </div>
  );
}
