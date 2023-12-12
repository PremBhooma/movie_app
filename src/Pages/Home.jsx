import React from "react";
import { auth } from "../Firebase/firebaseConfig";
import { onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const user = auth.currentUser;
  const singleUserDetails = () => {
    const userName = user.displayName;
    const userEmail = user.email;
    const userPhoto = user.photoURL;

    document.getElementById("userName").textContent = userName;
    document.getElementById("email").textContent = userEmail;
    document.getElementById("userPhoto").src = userPhoto;
  };

  onAuthStateChanged(auth, (user) => {
    if (user) {
      singleUserDetails(user);
      const uid = user.uid;
      return uid;
    } else {
      alert("create Account & login");
      navigate(`/`);
    }
  });
  return (
    <>
      <p id="userName"></p>
      <p id="email"></p>
      <img id="userPhoto" />
    </>
  );
};

export default Home;
