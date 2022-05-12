import { useState } from "react";
import { accountContext } from "./accountContext";

export function AccountProvider({ children }) {
  const [uid, setUid] = useState(null);
  const [account, setAccount] = useState({});

  function uidHandler(uid) {
    setUid(uid);
  }

  function accountHandler(account) {
    setAccount(account);
  }
  const value = { uid, uidHandler, account, accountHandler };

  return (
    <accountContext.Provider value={value}>{children}</accountContext.Provider>
  );
}
