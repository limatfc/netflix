import { useState } from "react";
import classes from "../../styles/loggedOut/LoginForm.module.css";
import InputField from "../InputField";
import data from "../../data/login.json";
import { loginUser } from "../../scripts/firebase/auth";

export default function LoginForm() {
  const [form, setForm] = useState({ email: "", password: "" });
  const check = (input) => input.length !== "";

  const inputFields = data.map((item) => (
    <InputField
      key={item.key}
      setup={item}
      state={[form, setForm]}
      check={check}
    />
  ));

  function onLogin(event) {
    event.preventDefault();
  }

  return (
    <form onSubmit={onLogin}>
      <h1>Sign In</h1>
      {inputFields}
      <button>Sign In</button>
    </form>
  );
}
