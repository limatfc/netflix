import { useCallback, useState, useEffect } from "react";
import { accountContext } from "./accountContext";
import { getLocalStorage } from "../scripts/localStorage/localStorage";
import { readDocument } from "../scripts/firebase/fireStore";

export function AccountProvider({ children }) {
  const [uid, setUid] = useState(null);
  const [account, setAccount] = useState({});
  const [titles, setTitles] = useState([]);

  useEffect(() => {
    async function onFirstLoad() {
      const parse = getLocalStorage();
      if (parse) {
        setUid(parse);
      }
    }
    onFirstLoad();
  }, [uid]);

  useEffect(() => {
    async function loadAccount() {
      if (uid) {
        const accountData = await readDocument("accounts", uid);
        setAccount(accountData.result);
      }
    }
    loadAccount();
  }, [uid]);

  function uidHandler(uid) {
    setUid(uid);
  }

  function accountHandler(account) {
    setAccount(account);
  }

  const titlesHandler = useCallback((titles) => {
    setTitles(titles);
  }, []);

  function addTitle(inputedData) {
    setTitles([...titles, inputedData]);
  }

  function deleteTitle(id) {
    const copy = [...titles];
    const findIndex = copy.findIndex((item) => item.id === id);
    copy.splice(findIndex, 1);
    setTitles(copy);
  }

  function editTitle(inputedData) {
    const copy = [...titles];
    const findIndex = copy.findIndex((item) => item.id === inputedData.id);
    copy.splice(findIndex, 1);
    copy.push(inputedData);
    setTitles(copy);
  }

  const value = {
    uid,
    uidHandler,
    account,
    accountHandler,
    titlesHandler,
    titles,
    addTitle,
    editTitle,
    deleteTitle,
  };

  return (
    <accountContext.Provider value={value}>{children}</accountContext.Provider>
  );
}
