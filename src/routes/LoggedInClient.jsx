import { Routes, Route } from "react-router-dom";
import ClientDashboard from "../pages/client/ClientDashboard";
import Login from "../pages/loggedOut/Login";
import ResetPassword from "../pages/loggedOut/ResetPassword";
import SignUp from "../pages/loggedOut/SignUp";
import ChoosePlan from "../pages/loggedOut/ChoosePlan";

export default function LoggedInClient() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/LoginHelp" element={<ResetPassword />} />
      <Route path="/SignUp" element={<SignUp />} />
      <Route path="/SignUp/planform" element={<ChoosePlan />} />
      <Route path="/client-dashboard" element={<ClientDashboard />} />
    </Routes>
  );
}
