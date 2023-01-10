// @ts-nocheck
import { createContext, useContext } from 'react'
import useFirebaseAuth from 'hooks/useFirebaseAuth';

// @TODO :
// - Add types

const authUserContext = createContext({
  authUser: null,
  loading: true,
  signInWithEmailAndPassword: async (email: string, password: string) => {},
  createUserWithEmailAndPassword: async (email: string, password: string, displayName: string) => {},
  signOut: async () => {},
  sendUserVerificationEmail: async () => {},
  deleteUser: async () => {},
  verifyUser: async () => {},
  clear: () => {},
});

export function AuthUserProvider({ children }) {
  const auth = useFirebaseAuth();

  return <authUserContext.Provider value={auth}>{children}</authUserContext.Provider>;
}

export const useAuth = () => useContext(authUserContext);