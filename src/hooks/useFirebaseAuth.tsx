// ts ignore whole file
// @ts-nocheck
import { useState, useEffect } from 'react'
import { firebaseClient } from 'config/firebaseClient'

const AUTH_ENDPOINT = process.env.NEXT_PUBLIC_AUTH_API_URL;

const formatAuthUser = (user) => ({
  uid: user.uid,
  email: user.email,
  displayName: user.displayName,
});

export default function useFirebaseAuth() {
  const [authUser, setAuthUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const authStateChanged = async(authState) => {
    if (!authState) {
      setLoading(false)
      return;
    }

    setLoading(true)

    const formattedUser = formatAuthUser(authState);

    setAuthUser(formattedUser);

    setLoading(false);

  };

  const clear = () => {
    setAuthUser(null);
    setLoading(true);
  };

  const signInWithEmailAndPassword = (email, password) => {
    return firebaseClient.auth().signInWithEmailAndPassword(email, password); 
  };

  const createUserWithEmailAndPassword = async (email, password, displayName) => {
     const response = await fetch(`${AUTH_ENDPOINT}/register`, {
       method: 'POST',
       headers: {
         'Content-Type': 'application/json',
       },
       body: JSON.stringify({ email, password, displayName }),
     });

     const data = await response.json();

     if (!response.ok) {
       throw new Error(data.message || 'Something went wrong!');
     };

     return data;
  }

  const signOut = () =>
    firebaseClient.auth().signOut().then(clear);

  useEffect(() => {
    const unsubscribe = firebaseClient.auth().onAuthStateChanged(authStateChanged);
    return () => unsubscribe();
  }, []);

  return {
    authUser,
    loading,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    signOut
  };
}
