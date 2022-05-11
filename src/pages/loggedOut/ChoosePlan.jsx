import { useState } from "react";
import { Link } from "react-router-dom";

export default function ChoosePlan() {
  const [showConfirm, setShowConfirm] = useState(false);

  function onConfirm() {
    setShowConfirm(true);
  }

  return (
    <div>
      <small>STEP 2 of 2</small>
      {showConfirm && (
        <div>
          <h1>Finish setting up your account.</h1>
          <Link to="/">Sign In</Link> and start enjoying it right now.
        </div>
      )}

      <h1>Choose your plan.</h1>
      <span>No commitments, cancel at any time.</span>
      <span>Everything on Netflix for one low price.</span>
      <span>Unlimited viewing on all your devices.</span>
      {!showConfirm && <button onClick={onConfirm}>Start Membership</button>}
      {showConfirm && <Link to="/">Sign In</Link>}
    </div>
  );
}
