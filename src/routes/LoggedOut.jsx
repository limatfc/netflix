import Login from "../components/loggedOut/Login";
import { Routes, Route } from "react-router-dom";

export default function LoggedOut() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
    </Routes>
  );
}
