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
       signInWithPopup(auth, googleprovider)
      .then(result => {
        const user = result.user;
        console.log(user)
        // setUser(user);
        setUser(user);
        
    })
    .catch((error)=>{
        setError(error.massage)
    })
    }

    const logOut = ()=>{
        signOut (auth)
        .then(()=>{
            setUser({})
        })
    }

    // signOut(auth).then(() => {
    //     // Sign-out successful.
    // }).catch((error) => {
    //     // An error happened.
    // });

    useEffect(()=>{

        onAuthStateChanged(auth, user=>{
            if(user){
                setUser(user)
            }
        })
        // const unsubscribe = onAuthStateChanged (auth, user =>{
        //     if(user){
        //         setUser(user)
        //     }
        //     else{
        //         setUser({})
        //     }
        // })
        // return ()=> unsubscribe
    }, [auth])

    return {
        user,
        error,
        signinUsingGoogle,
        myName
    }
};

export default useFirebase;