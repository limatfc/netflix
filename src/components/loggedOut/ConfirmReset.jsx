import { Link } from "react-router-dom";

export default function ConfirmReset({ email }) {
  return (
    <div>
      <h1>Email Sent</h1>
      <p>
        An email with instructions on how to reset your password has been sent
        to {email}. Check your spam or junk folder if you don’t see the email in
        your inbox.
      </p>
      <p>
        If you no longer have access to this email account, please
        <Link to=""> contact us</Link>.
      </p>
    </div>
  );
}
