import { useState } from "react";
import { Link } from "react-router-dom";
import InputField from "../../components/InputField";
import data from "../../data/resetPassword.json";
import { resetAccount } from "../../scripts/firebase/auth";
import ConfirmReset from "../../components/loggedOut/ConfirmReset";

export default function ResetPassword() {
  const [status, setStatus] = useState(0);
  const [email, setEmail] = useState({ email: "" });
  const [error, setError] = useState(null);
  const check = (input) => input !== "";

  async function onReset() {
    const data = await resetAccount(email.email);

    if (data.result) setStatus(1);
    if (data.error) setError(data.error);
  }

  if (status === 1) return <ConfirmReset email={email.email} />;

  return (
    <div>
      <small>{error && `${error}. Please try again`}</small>
      <h1>Forgot Email/Password</h1>
      <p>How would you like to reset your password?</p>
      <label>
        Email
        <input type="checkbox" />
      </label>
      <p>
        We will send you an email with instructions on how to reset your
        password.
      </p>
      <InputField setup={data} state={[email, setEmail]} check={check} />
      <button onClick={onReset}>Email Me</button>
      <Link to="">I can't remember my email address or phone number.</Link>
    </div>
  );
}
