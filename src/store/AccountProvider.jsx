import { useState } from "react";
import { accountContext } from "./accountContext";

export function AccountProvider({ children }) {
  const [uid, setUid] = useState(null);

  function uidHandler(uid) {
    setUid(uid);
  }

  const value = { uid, uidHandler };

  return (
    <accountContext.Provider value={value}>{children}</accountContext.Provider>
  );
}
