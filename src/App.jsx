// import LoggedInAdmin from "./routes/LoggedInAdmin";
// import LoggedInUser from "./routes/LoggedInUser";
import LoggedOut from "./routes/LoggedOut";
import { BrowserRouter } from "react-router-dom";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <LoggedOut />
        {/* <LoggedInAdmin />
      <LoggedInUser /> */}
      </BrowserRouter>
    </div>
  );
}
