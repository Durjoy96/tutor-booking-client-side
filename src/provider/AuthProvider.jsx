/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase.config";
import AxiosSecure from "../hooks/AxiosSecure";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const useAxios = AxiosSecure();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUserWithEmail = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signInWithEmail = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const updateUser = (name, imageURL) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: imageURL,
    });
  };

  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    return signInWithPopup(auth, provider);
  };

  const signOutUser = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        setLoading(false);
        const user = { email: currentUser.email };
        //generating and storing jwt token
        useAxios
          .post("/jwt", user)
          .then((res) => console.log(res.data))
          .catch((error) => console.log(error.message));
      } else {
        setUser(null);
        setLoading(false);
        useAxios
          .post("/logout", {})
          .then((res) => console.log(res.data))
          .catch((error) => console.log(error.message));
      }
    });

    return () => {
      unSubscribe();
    };
  }, []);

  const authInfo = {
    createUserWithEmail,
    signInWithEmail,
    updateUser,
    googleSignIn,
    signOutUser,
    user,
    loading,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
