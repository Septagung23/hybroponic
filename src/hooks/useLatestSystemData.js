import { useEffect, useState } from "react";
import { db } from "../config/firebase";
import {
  collection,
  doc,
  limit,
  onSnapshot,
  orderBy,
  query,
  where,
} from "firebase/firestore";

/**
 * Fetches the latest system data from the database.
 * @param {string} systemId - The ID of the system.
 * @returns {{
 *   data: {
 *     system: import('firebase/firestore').DocumentReference,
 *     temp: number,
 *     ph: number,
 *     tds: number,
 *     timestamp: string
 *   },
 *   loading: boolean,
 *   error: import('firebase/firestore').FirestoreError
 * }} The latest system data, loading state, and error state.
 */
export default function useLatestSystemData(systemId) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getLatestSystemData() {
      const systemRef = doc(db, "systems", systemId);

      const q = query(
        collection(db, "data"),
        where("system", "==", systemRef),
        orderBy("timestamp", "desc"),
        limit(1)
      );

      setLoading(true);
      setError(null);

      const unsubscribe = onSnapshot(
        q,
        (snapshot) => {
          if (snapshot.docs.length === 0) {
            setData(null);
            return;
          }

          const latestData = snapshot.docs[0].data();
          setData(latestData);
        },
        (error) => {
          setError(error);
        },
        () => {
          setLoading(false);
        }
      );

      return unsubscribe;
    }

    getLatestSystemData();
  }, [systemId]);

  return { data, loading, error };
}
