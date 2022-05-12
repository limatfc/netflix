import useGetCollection from "../../hooks/useGetCollection";
import Loading from "../Loading";
import Error from "../Error";
import useAccountProvider from "../../store/useAccountProvider";

export default function AdminDashboard() {
  const { titlesHandler, titles } = useAccountProvider();
  const { status } = useGetCollection(titlesHandler, "titles");
  console.log("titles", titles);
  if (status === 0) return <Loading />;
  if (status === 2) return <Error />;

  return (
    <div>
      <h1>Welcome to Netflix!</h1>
      <p>Here you can edit, add or delete a title from our library:</p>
      <button>Add a new title</button>
      <h2>Series:</h2>
      <ul>map das series</ul>
      <h2>Movies:</h2>
      <ul>map dos movies</ul>
      <h3>Documentaries:</h3>
      <ul>map dos documentarios</ul>
    </div>
  );
}
