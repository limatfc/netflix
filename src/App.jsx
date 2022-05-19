import LoggedInAdmin from "./routes/LoggedInAdmin";
import LoggedInClient from "./routes/LoggedInClient";
import LoggedOut from "./routes/LoggedOut";
import { BrowserRouter } from "react-router-dom";
import "./styles/global.css";
import useAccountProvider from "./store/useAccountProvider";

export default function App() {
  const { uid, account } = useAccountProvider();

  const client = account.role === "client";
  const admin = account.role === "admin";

  return (
    <div>
      <BrowserRouter>
        {uid && admin && <LoggedInAdmin />}
        {uid && client && <LoggedInClient />}
        {!uid && <LoggedOut />}
      </BrowserRouter>
    </div>
  );
}
