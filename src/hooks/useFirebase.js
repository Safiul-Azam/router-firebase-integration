import { useEffect, useState } from "react"
import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import app from "../firebase.init";

const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider();
const useFirebase = ()=>{
    const [user, setUser] = useState({})

    useEffect(()=>{
        onAuthStateChanged(auth, user=>{
            setUser(user)
        })
    } 
    ,[])
    const handleSignOut = () =>{
        signOut(auth)
        .then(()=>{})
    }
    const googleSignIn =()=>{
        signInWithPopup(auth, googleProvider)
        .then(res => {
            const user = res.user
            setUser(user)
            console.log(user)
        })
    }
    return {user, googleSignIn,handleSignOut};
}
export default useFirebase;