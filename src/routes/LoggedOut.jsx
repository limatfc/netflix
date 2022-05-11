import Login from "../pages/loggedOut/Login";
import { Routes, Route } from "react-router-dom";
import ResetPassword from "../pages/loggedOut/ResetPassword";
import SignUp from "../pages/loggedOut/SignUp";

export default function LoggedOut() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/LoginHelp" element={<ResetPassword />} />
      <Route path="/SignUp" element={<SignUp />} />
    </Routes>
  );
}
