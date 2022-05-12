import { useState } from "react";
import { Link } from "react-router-dom";
import classes from "../../styles/loggedOut/LoginForm.module.css";
import InputField from "../InputField";
import data from "../../data/login.json";
import { loginUser } from "../../scripts/firebase/auth";
import { readDocument } from "../../scripts/firebase/fireStore";
import useAccountProvider from "../../store/useAccountProvider";

export default function LoginForm() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState(null);
  const { uidHandler, accountHandler } = useAccountProvider();
  const check = (input) => input.length !== "";

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
      const result = await readDocument("accounts", data.uid);
      uidHandler(data.uid);
      if (result.result) accountHandler(result.result);
      if (result.error) setError(result.error);
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
