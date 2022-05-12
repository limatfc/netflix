import { useCallback, useState } from "react";
import { accountContext } from "./accountContext";

export function AccountProvider({ children }) {
  const [uid, setUid] = useState(null);
  const [account, setAccount] = useState({});
  const [titles, setTitles] = useState([]);

  function uidHandler(uid) {
    setUid(uid);
  }

  function accountHandler(account) {
    setAccount(account);
  }

  const titlesHandler = useCallback((titles) => {
    setTitles(titles);
  }, []);

  const value = {
    uid,
    uidHandler,
    account,
    accountHandler,
    titlesHandler,
    titles,
  };

  return (
    <accountContext.Provider value={value}>{children}</accountContext.Provider>
  );
}
