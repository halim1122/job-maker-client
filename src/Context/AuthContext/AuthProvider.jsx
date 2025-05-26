import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, onAuthStateChanged, signOut, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../Firebase/Firebase.init';

const AuthProvider = ({ children }) => {
     const [loading, setLoading] = useState(true);
     const [user, setUser] = useState(null);

     const createUser = (email, password) => {
          setLoading(true);
          return createUserWithEmailAndPassword(auth, email, password);
     }

     const signInUser = (email, password) => {
          setLoading(true);
          return signInWithEmailAndPassword(auth, email, password);
     }

     const signOutUser = () => {
          return signOut(auth);
     }

     useEffect(() => {
          const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
               setUser(currentUser);
               setLoading(false);
               console.log('user is the auth stateChange', currentUser);

               return () => {
                    unSubscribe();
               }

          })
     }, [])

     const userInfo = {
          user,
          setUser,
          loading,
          createUser,
          signInUser,
          signOutUser
     }


     return (
          <AuthContext value={userInfo}>
               {children}
          </AuthContext>
     );
};

export default AuthProvider;