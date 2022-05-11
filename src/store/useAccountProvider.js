import { accountContext } from "./accountContext";
import { useContext } from "react";

export default function useAccountProvider() {
  const context = useContext(accountContext);

  return context;
}
