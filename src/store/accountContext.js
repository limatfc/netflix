import { createContext } from "react";

export const accountContext = createContext({
  uid: "",
  uidHandler: (uid) => {},
});
