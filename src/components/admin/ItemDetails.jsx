import garbage from "../../assets/icons/garbage.png";
import edit from "../../assets/icons/edit.png";
import YoutubeEmbed from "../YoutubeEmbed";
import Episodes from "./Episodes";

export default function ItemDetails({ item, setter }) {
  const { setEditItem, setDeleteItem } = setter;
  const adjectives = item.adjectives.map((item) => <li key={item}>{item}</li>);
  const genres = item.genres.map((item) => <li key={item}>{item}</li>);
  const cast = item.cast.map((item) => <li key={item}>{item}</li>);

  return (
    <div>
      <button onClick={() => setDeleteItem(true)}>
        <img src={garbage} alt="a garbage can" />
      </button>
      <button onClick={() => setEditItem(true)}>
        <img src={edit} alt="the edit icon" />
      </button>
      <p>Description: {item.description}</p>
      <p>Type: {item.type}</p>
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
      <div>
        Logo Image:
        <img src={item.logo} alt="the cast of the title" />
      </div>
      {item.type !== "Series" && <YoutubeEmbed embedId={item.query} />}
      <h3>Episodes:</h3>
      {item.type === "Series" && <Episodes item={item} />}
    </div>
  );
}
