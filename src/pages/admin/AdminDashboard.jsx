import useGetCollection from "../../hooks/useGetCollection";
import Loading from "../Loading";
import Error from "../Error";
import useAccountProvider from "../../store/useAccountProvider";
import AddForm from "../../components/admin/AddForm";
import Modal from "../../components/Modal";
import { useState } from "react";
import TitleCard from "../../components/admin/TitleCard";
import DashboardHeader from "../../components/admin/DashboardHeader";

export default function AdminDashboard() {
  const [showModal, setShowModal] = useState(false);
  const { titlesHandler, titles } = useAccountProvider();
  const { status } = useGetCollection(titlesHandler, "titles");

  if (status === 0) return <Loading />;
  if (status === 2) return <Error />;

  const series = titles?.filter((item) => item.type === "Series");
  const movies = titles?.filter((item) => item.type === "Movie");
  const documentaries = titles?.filter((item) => item.type === "Documentary");

  return (
    <div>
      <DashboardHeader />
      <p>Here you can edit, add or delete a title from our library:</p>
      <button onClick={() => setShowModal(true)}>Add a new title</button>
      <h2>Series:</h2>
      <div>
        <TitleCard titles={series} />
      </div>
      <h2>Movies:</h2>
      <div>
        <TitleCard titles={movies} />
      </div>
      <h2>Documentaries:</h2>
      <div>
        <TitleCard titles={documentaries} />
      </div>
      {showModal && (
        <Modal>
          <AddForm setShowModal={setShowModal} />
        </Modal>
      )}
    </div>
  );
}
