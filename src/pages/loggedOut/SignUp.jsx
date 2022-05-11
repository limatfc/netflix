import { useState } from "react";
import data from "../../data/signUp.json";
import InputField from "../../components/InputField";
import { createUser } from "../../scripts/firebase/auth";
import useAccountProvider from "../../store/useAccountProvider";
import { Link } from "react-router-dom";
import { addDocumentWithID } from "../../scripts/firebase/fireStore";
import { useNavigate } from "react-router-dom";
import ChoosePlan from "./ChoosePlan";

export default function SignUp() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState(null);
  const check = (input) => input !== "";
  const { uidHandler } = useAccountProvider();

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
      const result = await addDocumentWithID("accounts", data.uid, {
        role: "client",
      });
      if (result.result) {
        navigate("/SignUp/planform");
      }
      if (result.error) {
        setError(result.error);
      }
    }
    if (data.error) setError(data.error);
  }

  return (
    <div>
      <small>STEP 1 of 2</small>
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
