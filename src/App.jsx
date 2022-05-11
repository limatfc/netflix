// import LoggedInAdmin from "./routes/LoggedInAdmin";
// import LoggedInClient from "./routes/LoggedInClient";
import LoggedOut from "./routes/LoggedOut";
import { BrowserRouter } from "react-router-dom";
import "./styles/global.css";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <LoggedOut />
        {/* <LoggedInAdmin />
      <LoggedInClient /> */}
      </BrowserRouter>
    </div>
  );
}
