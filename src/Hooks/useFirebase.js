import { useEffect, useState } from 'react';
import { getAuth, signInWithPopup, signOut, GoogleAuthProvider, onAuthStateChanged } from "firebase/auth";
import initializeAuthentication from '../Firebase/authentication.init';
import { useLocation, useNavigate } from 'react-router-dom';

initializeAuthentication();
const useFirebase = () => {
    const googleprovider = new GoogleAuthProvider();
    const [user, setUser] = useState({});
    const myName= 'razib';
    const [error, setError] = useState();
    const [isLoading, setIsLoading] = useState(true);
    
    const auth = getAuth();

    // Login by using google account
    const signinUsingGoogle = () => {
        setIsLoading(true);
    return signInWithPopup(auth, googleprovider)
      
    }
    // Logout Function
    const logOut = ()=>{
        setIsLoading(true)
        signOut (auth)
        .then(()=>{
            setUser({})
        })
        .finally(()=>setIsLoading(false))
    }

    useEffect(()=>{
        onAuthStateChanged(auth, user=>{
            if(user){
                setUser(user)
            }
            setIsLoading(false);
        })
    }, [auth])

    return {
        user,
        error,
        isLoading,
        signinUsingGoogle,
        myName,
        logOut
    }
};

export default useFirebase;