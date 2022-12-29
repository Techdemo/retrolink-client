// ts ignore whole file
// @ts-nocheck
import { useState, useEffect } from 'react'
import { firebaseClient } from 'config/firebaseClient'

const AUTH_ENDPOINT = process.env.NEXT_PUBLIC_AUTH_API_URL;

export default function useFirebaseAuth() {
  // @TODO: Add a clear isAuthenticated state that is reusable and can be used to check if the user is authenticated
  const [authUser, setAuthUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = firebaseClient.auth().onAuthStateChanged((user) => {

      if (user) {
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
    setLoading(false);
  };

  // Calls to API endpoints will be moved to a seperate file
  const postIdTokenToSessionLogin = async (idToken: string) => {
    const response = await fetch(`${AUTH_ENDPOINT}/sessionlogin`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({ idToken }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || 'Something went wrong!');
    };

    return data;
  };

  const signInWithEmailAndPassword = async (email, password) => {
    firebaseClient.auth().signInWithEmailAndPassword(email, password)
    .then((res) => {
      res.user?.getIdToken().then((idToken) => {
        return postIdTokenToSessionLogin(idToken);
      })
    })
    .catch((error) => {
      throw new Error(error.message || 'Something went wrong!');
    });
  };

  const createUserWithEmailAndPassword = async (email, password, displayName) => {
     const response = await fetch(`${AUTH_ENDPOINT}/register`, {
       method: 'POST',
       credentials: 'include',
       headers: {
         'Content-Type': 'application/json',
         'Accept': 'application/json'
       },
       body: JSON.stringify({ email, password, displayName }),
     });

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
  };

  const signOut = async () => {
    clear();
    const response = await fetch(`${AUTH_ENDPOINT}/sessionlogout`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = await response.json();

    if (response.error) {
      throw new Error('Something went wrong!');
    };

    return data;
  };
  
  return {
    authUser,
    loading,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    signOut,
    sendUserVerificationEmail,
  };
}
