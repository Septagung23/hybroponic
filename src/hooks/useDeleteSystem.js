import { deleteDoc, doc } from "firebase/firestore";
import { useState } from "react";
import { db } from "../config/firebase";

/**
 * Custom hook for deleting a system in the database.
 * @returns {{
 *   mutate: (id: string, options: {
 *     onError?: (error: import('firebase/firestore').FirestoreError) => void,
 *     onSuccess?: () => void
 *   }) => Promise<void>,
 * loading: boolean
 * }} Mutation function and loading state.
 */
export default function useDeleteSystem() {
  const [loading, setLoading] = useState(false);

  async function mutate(id, { onError, onSuccess }) {
    setLoading(true);
    try {
      const docRef = doc(db, "systems", id);
      await deleteDoc(docRef)
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
