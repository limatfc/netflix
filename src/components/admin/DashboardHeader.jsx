import { useNavigate } from "react-router-dom";
import { removeItem } from "../../scripts/localStorage/localStorage";

export default function DashboardHeader() {
  const navigate = useNavigate();

  function onLogout() {
    removeItem();
    navigate("/");
  }

  return (
    <header>
      <h1>Welcome to Netflix!</h1>
      <button onClick={onLogout}>Log Out</button>
    </header>
  );
}
