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
  }, []);

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

  function addEpisode(modifiedTitle) {
    const copy = [...titles];
    const findIndex = copy.findIndex((item) => item.id === modifiedTitle.id);
    copy.splice(findIndex, 1);
    copy.push(modifiedTitle);
    setTitles(copy);
  }

  function deleteEpisode(idTitle, idEpisode) {
    const copy = [...titles];
    const findTitle = copy.find((item) => item.id === idTitle);
    const findEpisode = findTitle.episodes.findIndex(
      (item) => item.description === idEpisode
    );
    findTitle.episodes.splice(findEpisode, 1);
    setTitles(copy);
    return findTitle;
  }

  function editEpisode(idTitle, idEpisode, inputedData) {
    const copy = [...titles];
    const findTitle = copy.find((item) => item.id === idTitle);
    const findEpisode = findTitle.episodes.findIndex(
      (item) => item.id === idEpisode
    );
    findTitle.episodes.splice(findEpisode, 1);
    findTitle.episodes.push(inputedData);
    setTitles(copy);
    return findTitle;
  }

  function addTitlePreference(titleId, inputedData) {
    const find = account.titlePreferences.find((item) => item.id === titleId);
    if (!find) account.titlePreferences.push(inputedData);
    if (find) {
      const findEpisode = account.titlePreferences.findIndex(
        (item) => item.id === titleId
      );
      account.titlePreferences.splice(findEpisode, 1);
      account.titlePreferences.push(inputedData);
    }
    setAccount(account);
    return account.titlePreferences;
  }

  function removeTitlePreference(titleId, inputedData) {
    const find = account.titlePreferences.find((item) => item.id === titleId);
    if (!find) account.titlePreferences.push(inputedData);
    if (find) {
      const findEpisode = account.titlePreferences.findIndex(
        (item) => item.id === titleId
      );
      account.titlePreferences.splice(findEpisode, 1);
      account.titlePreferences.push(inputedData);
    }
    setAccount(account);
    return account.titlePreferences;
  }

  function addTitleMyList(titleId) {
    const copy = { ...account };
    copy.myList.push(titleId);
    setAccount(copy);
    return copy.myList;
  }

  function removeTitleMyList(titleId) {
    const copy = { ...account };
    const findTitle = copy.myList.findIndex((item) => item === titleId);
    copy.myList.splice(findTitle, 1);
    setAccount(copy);
    return copy.myList;
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
    addEpisode,
    deleteEpisode,
    editEpisode,
    addTitlePreference,
    removeTitlePreference,
    addTitleMyList,
    removeTitleMyList,
  };

  return (
    <accountContext.Provider value={value}>{children}</accountContext.Provider>
  );
}
