import { useState } from "react";
import classes from "../../styles/client/NotSeriesOverlayer.module.css";
import DetailsHeader from "./DetailsHeader";
import YoutubeEmbed from "../YoutubeEmbed";
import NotSeriesDetails from "./NotSeriesDetails";

export default function NotSeriesOverlayer({ setShowModal, item }) {
  const [showVideo, setShowVideo] = useState(false);

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
        {!showVideo && <NotSeriesDetails item={item} />}
      </div>
    </div>
  );
}
