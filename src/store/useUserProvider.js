import { userContext } from "./userContext";
import { useContext } from "react";

export default function useUserProvider() {
  const context = useContext(userContext);

  return context;
}
