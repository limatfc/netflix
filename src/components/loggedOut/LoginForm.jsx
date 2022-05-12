import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import classes from "../../styles/loggedOut/LoginForm.module.css";
import InputField from "../InputField";
import data from "../../data/login.json";
import { loginUser } from "../../scripts/firebase/auth";
import { readDocument } from "../../scripts/firebase/fireStore";
import useAccountProvider from "../../store/useAccountProvider";
import { loginNavigation } from "../../scripts/logic/loginNavigation";
import { setLocalStorage } from "../../scripts/localStorage/localStorage";

export default function LoginForm({ onContinue }) {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState(null);
  const { uidHandler, accountHandler } = useAccountProvider();
  const check = (input) => input !== "";

  const inputFields = data.map((item) => (
    <InputField
      key={item.key}
      setup={item}
      state={[form, setForm]}
      check={check}
    />
  ));

  async function onLogin(event) {
    event.preventDefault();

    const data = await loginUser(form);
    if (data.uid) {
      uidHandler(data.uid);
      const account = await readDocument("accounts", data.uid);
      if (account.result) {
        accountHandler(account.result);
        if (onContinue) setLocalStorage(data.uid);
        const link = loginNavigation(account.result);
        navigate(link);
      }
      if (account.error) setError(account.error);
    }
    if (data.error) setError(data.error);
  }

  return (
    <form onSubmit={onLogin}>
      <small>
        {error && `${error}. Please try again or you can `}
        {error && <Link to="/LoginHelp">reset your password.</Link>}
      </small>
      <h1>Sign In</h1>
      {inputFields}
      <button>Sign In</button>
    </form>
  );
}
