import LoggedInAdmin from "./routes/LoggedInAdmin";
import LoggedInClient from "./routes/LoggedInClient";
import LoggedOut from "./routes/LoggedOut";
import { BrowserRouter } from "react-router-dom";
import "./styles/global.css";
import useAccountProvider from "./store/useAccountProvider";

export default function App() {
  const { uid, account } = useAccountProvider();

  return (
    <div>
      <BrowserRouter>
        {uid && account.role === "admin" && <LoggedInAdmin />}
        {uid && account.role === "client" && <LoggedInClient />}
        {account.role !== "client" && account.role !== "admin" && <LoggedOut />}
      </BrowserRouter>
    </div>
  );
}
