// ts ignore whole file
// @ts-nocheck
import { useState, useEffect } from 'react'
import { firebaseClient } from 'config/firebaseClient'

const AUTH_ENDPOINT = process.env.NEXT_PUBLIC_AUTH_API_URL;

export default function useFirebaseAuth() {
  const [authUser, setAuthUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = firebaseClient.auth().onAuthStateChanged((user) => {

      if (user) {
        console.log('user in useFirebaseAuth', user);
        setAuthUser({
          email: user.email,
          uid: user.uid,
          displayName: user.displayName,
          emailVerified: user.emailVerified,
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

    //  @TODO: DOes this need to be jsoned?
     const data = await response.json();

     if (!response.ok) {
       throw new Error(data.message || 'Something went wrong!');
     };

     return data;
  };

  const sendUserVerificationEmail = () => {
    const currentUser = firebaseClient.auth().currentUser;

    if (currentUser) {
      currentUser.sendEmailVerification();
    } else {
      throw new Error('No user is logged in');
    }
  }

  const signOut = () =>
    firebaseClient.auth().signOut().then(clear);

  return {
    authUser,
    loading,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    signOut,
    sendUserVerificationEmail,
  };
}
