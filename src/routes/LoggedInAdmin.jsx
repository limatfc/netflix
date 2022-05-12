import { Routes, Route } from "react-router-dom";
import AdminDashboard from "../pages/admin/AdminDashboard";
import Login from "../pages/loggedOut/Login";
import ResetPassword from "../pages/loggedOut/ResetPassword";
import SignUp from "../pages/loggedOut/SignUp";
import ChoosePlan from "../pages/loggedOut/ChoosePlan";

export default function LoggedInAdmin() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/LoginHelp" element={<ResetPassword />} />
      <Route path="/SignUp" element={<SignUp />} />
      <Route path="/SignUp/planform" element={<ChoosePlan />} />
      <Route path="/admin-dashboard" element={<AdminDashboard />} />
    </Routes>
  );
}
