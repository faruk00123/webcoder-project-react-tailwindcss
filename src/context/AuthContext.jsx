import { createUserWithEmailAndPassword, FacebookAuthProvider, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";
import ami from "../firebase/firebase.config";


const AuthContext = createContext();

export const useAuth = ()=>{
    return useContext(AuthContext);
}

const Authprovider = ({children}) =>{

    const [user, setUser] = useState(null);
    const [loding, setLoding] = useState(true); // TODO: make this true

    const auth = getAuth(ami)

    // sign up new user using email and password
    const signupWithEmail = (email, password)=>{
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // login 
    const loginwithemail = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password)
    }

    // google signin
    const handelGoogleLogin = () =>{
        const provider = new GoogleAuthProvider();
        return signInWithPopup(auth, provider)
    }

    // facebook login
    const handleFacebookLogin = ()=> {
        const provider = new FacebookAuthProvider();
        return signInWithPopup(auth, provider);
    }

    // github login
    const handleGithubLogin = ()=> {
        const provider = new GithubAuthProvider();
        return signInWithPopup(auth, provider);
    }


    // monitor or manage user state
    useEffect(()=>{
        const loginChake = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            setLoding(false)
        });

        return loginChake;
    },[auth])


    // lgoout users
    const userLogout = ()=> {
        return signOut(auth)
    }


    const value = {user, signupWithEmail, userLogout, loginwithemail, handleGithubLogin, handelGoogleLogin, handleFacebookLogin} 
    return (
        <AuthContext.Provider value={value}>
            {!loding && children}
        </AuthContext.Provider>
    )
    console.log(value);
}

export default Authprovider;