import { useState } from "react";
import { db } from "../config/firebase";
import { doc, updateDoc } from "firebase/firestore";

/**
 * Custom hook for updating a system in the database.
 * @param {string} id System ID.
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
export default function useUpdateSystem(id) {
  const [loading, setLoading] = useState(false);

  async function mutate(
    { name, minTemp, maxTemp, minPh, maxPh, minTds, maxTds },
    { onError, onSuccess }
  ) {
    setLoading(true);
    try {
      const docRef = doc(db, "systems", id);
      await updateDoc(docRef, {
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