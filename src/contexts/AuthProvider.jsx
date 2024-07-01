import React, { createContext, useEffect, useState } from 'react'
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "../firebase/firebase.config";
import { GoogleAuthProvider } from 'firebase/auth';

export const AuthContext = createContext();
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Create User
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
  }

  // Signup with Google
  const signupWithGoogle = () => {
    return signInWithPopup(auth, googleProvider)
  }

  // Login
  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
  }

  // Logout 
  const logout = () => {
    return signOut(auth);
  }

  // update UserProfile
  const updateUserProfile = (name, photoUrl) => {
    return updateProfile(auth.currentUser, {
      displayName: name, photoURL: photoUrl
    })
  }



  // signed-in user
  useEffect(() => {
    const unsubscribe =onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
            setUser(currentUser);
            setLoading(false);
      } else {
        // User is signed out
        // ...
      }
    });
    return ()=>{
      return unsubscribe();
    }
  }, [])


  const authInfo = {
    user,
    createUser,
    signupWithGoogle,
    login,
    logout,
    updateUserProfile
  }

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider