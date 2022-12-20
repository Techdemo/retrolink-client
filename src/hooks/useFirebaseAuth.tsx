// ts ignore whole file
// @ts-nocheck
import { useState, useEffect } from 'react'
import { firebaseClient } from 'config/firebaseClient'

const AUTH_ENDPOINT = process.env.NEXT_PUBLIC_AUTH_API_URL;

export default function useFirebaseAuth() {
  const [authUser, setAuthUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log('useEffect loopt');

    const unsubscribe = firebaseClient.auth().onAuthStateChanged((user) => {
      console.log('unsubscribe loopt');
      setLoading(true);

      console.log('on authStated', user)
      if (user) {
        console.log('there is a user');
        setAuthUser({
          email: user.email,
          uid: user.uid,
          displayName: user.displayName,
        });
      } else {
        setAuthUser(null);
      }
    });

    setLoading(false);

    return () => unsubscribe();
  }, []);


  const clear = () => {
    setAuthUser(null);
    setLoading(true);
  };

  const signInWithEmailAndPassword = async (email, password) => {
    const response = await firebaseClient.auth().signInWithEmailAndPassword(email, password)

    const data = response;

    if (!response) {
      throw new Error(data.message || 'Something went wrong!');
    }

    return data;
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

  return {
    authUser,
    loading,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    signOut,
    determined,
  };
}
