import { useCallback, useEffect, useState } from "react";
import { getCollection } from "../scripts/firebase/fireStore";

export default function useGetCollection(stateUpdatter, path) {
  const [status, setStatus] = useState(0);

  const getDbCollection = useCallback(
    async (stateUpdatter) => {
      try {
        const collectionCategories = await getCollection(path);
        stateUpdatter(collectionCategories);
        setStatus(1);
      } catch (error) {
        setStatus(2);
      }
    },
    [path]
  );

  useEffect(() => {
    getDbCollection(stateUpdatter);
  }, [getDbCollection, stateUpdatter]);
  return { status };
}
