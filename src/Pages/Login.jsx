import React from "react";
import { useNavigate } from "react-router-dom";
import { signInWithPopup } from "firebase/auth";
import { auth, googleAuthProvider } from "../Firebase/firebaseConfig";

const Login = () => {
  const navigate = useNavigate();
  //   const { token, setToken } = useContext(AuthContext);

  const handleGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, googleAuthProvider);
      console.log(result);
      localStorage.setItem("accessToken", result.user.accessToken);
      localStorage.setItem("user", JSON.stringify(result.user));
      navigate("/");
    } catch (error) {
      console.log(error);
    }
    // const provider = await new GoogleAuthProvider();
    // return signInWithPopup(auth, provider)
    //   .then((result) => {
    //     const credential = GoogleAuthProvider.credentialFromResult(result);
    //     const token = credential.accessToken;
    //     const user = result.user;
    //     let accessToken = user.accessToken;
    //     localStorage.setItem("accessToken", accessToken);
    //     console.log(accessToken);
    //     onAuthStateChanged(auth, (user) => {
    //       if (user) {
    //         const uid = user.uid;
    //         return uid;
    //       } else {
    //         alert("create Account & login");
    //         navigate(`/`);
    //       }
    //     });
    //     navigate(`/Home`);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
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
