import { useEffect, useState } from 'react';
import { getAuth, signInWithPopup, signOut, GoogleAuthProvider, onAuthStateChanged } from "firebase/auth";
import initializeAuthentication from '../Firebase/authentication.init';

initializeAuthentication();
const useFirebase = () => {
    const googleprovider = new GoogleAuthProvider();
    const [user, setUser] = useState({});
    const myName= 'razib';
    const [error, setError] = useState();

    const auth = getAuth();
    const signinUsingGoogle = () => {
      return  signInWithPopup(auth, googleprovider)
    }

    signOut(auth).then(() => {
        // Sign-out successful.
    }).catch((error) => {
        // An error happened.
    });

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged (auth, user =>{
            if(user){
                setUser(user)
            }
            else{
                setUser({})
            }
        })
        return ()=> unsubscribe
    }, [auth])

    return {
        user,
        error,
        signinUsingGoogle,
        myName
    }
};

export default useFirebase;