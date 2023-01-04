import React from 'react'
import { signInWithGooglePopup, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils'; 


const SignIn = () => {
    const logGoogleUser = async () => {
        const {user} = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user)
        console.log(user);
    }
  return (
    <div>
        <h1>Sign IN Page</h1>
        <button onClick={logGoogleUser}>Sign in with Google pop up</button>
    </div>
  )
}

export default SignIn;