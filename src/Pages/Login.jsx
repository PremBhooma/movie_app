import React from "react";
import { useNavigate } from "react-router-dom";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../Firebase/firebaseConfig";

const Login = () => {
  const navigate = useNavigate();

  const handleGoogle = async (e) => {
    const provider = await new GoogleAuthProvider();

    return signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        console.log(user);
        navigate(`/Home`);
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };
  return (
    <>
      <div>
        <button onClick={handleGoogle}>Google</button>
      </div>
    </>
  );
};

export default Login;
