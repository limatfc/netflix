import garbage from "../../assets/icons/garbage.png";
import edit from "../../assets/icons/edit.png";
import YoutubeEmbed from "../YoutubeEmbed";

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
  );
}
