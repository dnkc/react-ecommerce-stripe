import React, { useEffect, createContext, useState } from "react";
import { auth, createUserProfileDocument } from "../firebase";

export const UserContext = createContext();

const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // subscription to on auth state change function
    const unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      // if user is signed in, get user object, if not get nothing
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapShot) => {
          setUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
          setLoading(false);
        });
      } else {
        setUser(userAuth);
        setLoading(false);
        // unsubscribe from auth required to prevent data leaks
      }
    });

    return () => unsubscribeFromAuth();
  }, []);

  const userContext = { user, loading };
  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <UserContext.Provider value={userContext}>{children}</UserContext.Provider>
  );
};

export default UserContextProvider;
