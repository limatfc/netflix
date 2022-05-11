import { useState } from "react";
import { userContext } from "./userContext";

export function UserProvider({ children }) {
  const [uid, setUid] = useState(null);

  function uidHandler(uid) {
    setUid(uid);
  }

  const value = { uid, uidHandler };

  return <userContext.Provider value={value}>{children}</userContext.Provider>;
}
