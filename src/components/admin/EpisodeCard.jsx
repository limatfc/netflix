import YoutubeEmbed from "../YoutubeEmbed";
import garbage from "../../assets/icons/garbage.png";
import edit from "../../assets/icons/edit.png";
import { useState } from "react";
import Modal from "../Modal";
import EditEpisode from "./EditEpisode";
import DeleteEpisode from "./DeleteEpisode";

export default function EpisodeCard({ episode, id }) {
  const [deleteItem, setDeleteItem] = useState(false);
  const [editItem, setEditItem] = useState(false);
  const [details, setDetails] = useState(false);

  return (
    <div>
      <button onClick={() => setDetails(!details)}>
        <h3>
          Season: {episode.season}, Episode: {episode.episode}
        </h3>
      </button>
      {details && (
        <div>
          <button onClick={() => setDeleteItem(true)}>
            <img src={garbage} alt="a garbage can" />
          </button>
          <button onClick={() => setEditItem(true)}>
            <img src={edit} alt="the edit icon" />
          </button>
          <p>Title: {episode.title}</p>
          <p>Description: {episode.description}</p>
          <p>Episode duration: {episode.duration}</p>
          <img src={episode.thumb} alt="a frozen scene of the episode" />
          <YoutubeEmbed embedId={episode.query} />
        </div>
      )}
      <Modal>
        {editItem && (
          <EditEpisode setEditItem={setEditItem} episode={episode} id={id} />
        )}
        {deleteItem && (
          <DeleteEpisode
            setDeleteItem={setDeleteItem}
            episode={episode}
            id={id}
          />
        )}
      </Modal>
    </div>
  );
}
