import useGetCollection from "../../hooks/useGetCollection";
import Loading from "../Loading";
import Error from "../Error";
import useAccountProvider from "../../store/useAccountProvider";
import AddForm from "../../components/admin/AddForm";
import Modal from "../../components/Modal";
import { useState } from "react";

export default function AdminDashboard() {
  const [showModal, setShowModal] = useState(false);
  const { titlesHandler } = useAccountProvider();
  const { status } = useGetCollection(titlesHandler, "titles");

  if (status === 0) return <Loading />;
  if (status === 2) return <Error />;

  return (
    <div>
      <h1>Welcome to Netflix!</h1>
      <p>Here you can edit, add or delete a title from our library:</p>
      <button onClick={() => setShowModal(true)}>Add a new title</button>
      <h2>Series:</h2>
      <ul>map das series</ul>
      <h2>Movies:</h2>
      <ul>map dos movies</ul>
      <h3>Documentaries:</h3>
      <ul>map dos documentarios</ul>
      {showModal && (
        <Modal>
          <AddForm setShowModal={setShowModal} />
        </Modal>
      )}
    </div>
  );
}
