import { createContext } from "react";

export const userContext = createContext({
  uid: "",
  uidHandler: (uid) => {},
});
