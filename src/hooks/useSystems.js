import { useEffect, useState } from "react";
import { db } from "../config/firebase";
import { collection, getDocs, query } from "firebase/firestore";

/**
 * Custom hook for fetching systems data from Firestore.
 *
 * @returns {{
 *   data: {
 *     maxPh: number,
 *     maxTds: number,
 *     maxTemp: number,
 *     minPh: number,
 *     minTds: number,
 *     minTemp: number,
 *     name: string
 *   }[],
 *   loading: boolean,
 *   error: any
 * }}
 */
export default function useSystems() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getSystems() {
      setLoading(true);
      setError(null);
      try {
        const q = query(collection(db, "systems"));
        const querySnapshot = await getDocs(q);
        const systems = querySnapshot.docs.map((doc) => doc.data());
        setData(systems);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }

    getSystems();
  }, []);

  return { data, loading, error };
}
