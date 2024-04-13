import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  GithubAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import PropTypes from "prop-types";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";

// Social Auth Provider
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

// Auth Context
export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  // create user
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // sign in user by email and password
  const signInUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  // sign with google
  const googleLogin = () => {
    return signInWithPopup(auth, googleProvider);
  };

  // sign with github
  const githubLogin = () => {
    return signInWithPopup(auth, githubProvider);
  };

  // observer user
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        const loggedUser = {
          email: currentUser.email,
          name: currentUser.displayName,
          photo: currentUser.photoURL,
        };
        localStorage.setItem("luxinesy-user", JSON.stringify(loggedUser));
      } else {
        localStorage.removeItem("luxinesy-user");
      }
    });
    return () => {
      unsubscribe();
    };
  });
  console.log(user);

  const authInfo = { createUser, signInUser, googleLogin, githubLogin, user };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node,
};

export default AuthProvider;
