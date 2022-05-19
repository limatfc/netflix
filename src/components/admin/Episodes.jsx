import { useState } from "react";
import AddEpisodeForm from "./AddEpisodeForm";
import Modal from "../Modal";
import EpisodeCard from "./EpisodeCard";

export default function Episodes({ item }) {
  const [addEpisode, setAddEpisode] = useState(false);

  const episodeCard = item.episodes.map((episode) => (
    <EpisodeCard key={episode.id} episode={episode} id={item.id} />
  ));

  return (
    <div>
      <p>
        {item.episodes.length === 0 &&
          "It looks like you don't have any episodes for this series. Try adding one."}
      </p>
      <button onClick={() => setAddEpisode(true)}>Add a new episode</button>
      {episodeCard}
      {addEpisode && (
        <Modal>
          <AddEpisodeForm setAddEpisode={setAddEpisode} data={item} />
        </Modal>
      )}
    </div>
  );
}
