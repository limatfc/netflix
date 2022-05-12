import { useState } from "react";
import YoutubeEmbed from "../YoutubeEmbed";
import garbage from "../../assets/icons/garbage.png";
import edit from "../../assets/icons/edit.png";

export default function TitleItem({ item }) {
  const [details, setDetails] = useState(false);

  const adjectives = item.adjectives.map((item) => <li key={item}>{item}</li>);
  const genres = item.genres.map((item) => <li key={item}>{item}</li>);
  const cast = item.cast.map((item) => <li key={item}>{item}</li>);
  return (
    <div>
      <button onClick={() => setDetails(!details)}>
        <h3>Title: {item.title}</h3>
      </button>
      {details && (
        <div>
          <button>
            <img src={garbage} alt="a garbage can" />
          </button>
          <button>
            <img src={edit} alt="the edit icon" />
          </button>
          <p>Description: {item.description}</p>
          <p>Type: {item.type}</p>
          {item.season !== "" && <p>Season: {item.season}</p>}
          {item.episode !== "" && <p>Episode: {item.episode}</p>}
          <ul>This title is: {adjectives}</ul>
          <ul>Genres: {genres}</ul>
          <ul>Cast: {cast}</ul>
          <div>
            Cover Image: <img src={item.cover} alt="the cast of the title" />
          </div>
          <div>
            Thumbnail Image:
            <img src={item.thumb} alt="the cast of the title" />
          </div>
          <YoutubeEmbed embedId={item.query} />
        </div>
      )}
    </div>
  );
}
