// ts ignore whole file
// @ts-nocheck
import { useState, useEffect } from 'react'
import { firebaseClient } from 'config/firebaseClient'

const AUTH_ENDPOINT = process.env.NEXT_PUBLIC_AUTH_API_URL;

export default function useFirebaseAuth() {
  // @TODO: Add a clear isAuthenticated state that is reusable and can be used to check if the user is authenticated
    // @TODO: Calls to API endpoints will be moved to a seperate file
  const [authUser, setAuthUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const deleteUser = async () => {
    const response = await fetch(`${AUTH_ENDPOINT}/delete`, {
      method: 'DELETE',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || 'Something went wrong!');
    };

    return data;
  };

  const verifySessionCookie = async () => {
    const response = await fetch(`${AUTH_ENDPOINT}/verifyUser`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || 'Something went wrong!');
    };

    return data;
  };

  const verifyUser = async () => {
    try {
      const data = await verifySessionCookie();
      
      setAuthUser(data);
      setLoading(false);
    } catch (error) {
      setAuthUser(null);
      setLoading(false);
    }
  };

  useEffect(() => {
    return () => verifyUser();
  }, []);

  const clear = () => {
    setAuthUser(null);
    setLoading(false);
  };

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
    return firebaseClient.auth()
      .signInWithEmailAndPassword(email, password)
        .then((res) => {
          return res.user?.getIdToken()
            .then((idToken) => {
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
    deleteUser,
    verifyUser,
    clear,
  };
}
