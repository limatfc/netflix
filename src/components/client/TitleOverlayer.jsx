import { useState } from "react";
import classes from "../../styles/client/NotSeriesOverlayer.module.css";
import DetailsHeader from "./DetailsHeader";
import YoutubeEmbed from "../YoutubeEmbed";
import NotSeriesDetails from "./NotSeriesDetails";
import SeriesDetails from "./SeriesDetails";

export default function TitleOverlayer({ setShowModal, item }) {
  const [showVideo, setShowVideo] = useState(false);
  const notSeriesType = !showVideo && item.type !== "Series";
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
        {notSeriesType && <NotSeriesDetails item={item} />}
        {seriesType && <SeriesDetails item={item} />}
      </div>
    </div>
  );
}
