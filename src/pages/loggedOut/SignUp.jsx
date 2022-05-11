import { useState } from "react";
import data from "../../data/signUp.json";
import InputField from "../../components/InputField";
import { createUser } from "../../scripts/firebase/auth";
import useUserProvider from "../../store/useUserProvider";
import { Link } from "react-router-dom";

export default function SignUp() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState(null);
  const check = (input) => input !== "";
  const { uidHandler } = useUserProvider();

  const inputFields = data.map((item) => (
    <InputField
      key={item.key}
      setup={item}
      state={[form, setForm]}
      check={check}
    />
  ));

  async function onSignUp(event) {
    event.preventDefault();

    const data = await createUser(form);

    if (data.uid) {
      uidHandler(data.uid);
      setForm({ email: "", password: "" });
    }
    if (data.error) setError(data.error);
  }

  return (
    <div>
      <h1>Create a password to start your membership</h1>
      <p>Just a few more steps and you're finished!</p>
      <p>We hate paperwork, too.</p>
      <small>
        {error && `${error}. Please try again or you can `}
        {error && <Link to="/LoginHelp">reset your password.</Link>}
      </small>
      <form onSubmit={onSignUp}>
        {inputFields}
        <label>
          <input type="checkbox" />
          Please do not email me Netflix special offers.
        </label>
        <button type="submit">Next</button>
      </form>
    </div>
  );
}
