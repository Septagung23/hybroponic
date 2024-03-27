import { addDoc, collection } from "firebase/firestore";
import { useState } from "react";
import { db } from "../config/firebase";

/**
 * Custom hook for adding a new system to the database.
 * @returns {{
 *   mutate: (variables: {
 *     name: string
 *     minTemp: number,
 *     maxTemp: number,
 *     minPh: number,
 *     maxPh: number,
 *     minTds: number,
 *     maxTds: number,
 *   }, options: {
 *     onError?: (error: import('firebase/firestore').FirestoreError) => void,
 *     onSuccess?: () => void
 *   }) => Promise<void>,
 *   loading: boolean
 * }} Mutation function and loading state.
 */
export default function useCreateSystem() {
  const [loading, setLoading] = useState(false);

  async function mutate(
    { name, minTemp, maxTemp, minPh, maxPh, minTds, maxTds },
    { onError, onSuccess }
  ) {
    setLoading(true);
    try {
      await addDoc(collection(db, "systems"), {
        name,
        minTemp,
        maxTemp,
        minPh,
        maxPh,
        minTds,
        maxTds,
      });

      if (onSuccess) {
        onSuccess();
      }
    } catch (error) {
      if (onError) {
        onError(error);
      }
    } finally {
      setLoading(false);
    }
  }

  return { mutate, loading };
}
