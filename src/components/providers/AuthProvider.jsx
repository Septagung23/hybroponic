import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../../config/firebase";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";

/**
 * @typedef {Object} AuthContextType
 * @property {import("firebase/auth").User | null} currentUser
 * @property {(email: string, password: string) => Promise<import("firebase/auth").UserCredential>} login
 * @property {() => Promise<void>} logout
 */
const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  function login(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  function logout() {
    return signOut(auth);
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}

/**
 * @returns {AuthContextType}
 */
export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
