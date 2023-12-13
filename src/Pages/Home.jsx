import { signOut } from "firebase/auth";
import React from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../Firebase/firebaseConfig";
// import { Link } from "react-router-dom";
// import { auth } from "../Firebase/firebaseConfig";
// import { onAuthStateChanged } from "firebase/auth";
// import { AuthContext } from "../Routes/AuthContext";
import Header from "../Components/Header";
import Movie from "../Components/Movie";

const Home = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      localStorage.removeItem("accessToken");
      localStorage.removeItem("user");
      navigate("/login");
    } catch (err) {
      console.log(err);
    }
  };
  //   const { token, setToken } = useContext(AuthContext);
  //   const navigate = useNavigate();

  //   let userName, userPhoto, userEmail;

  //   const user = auth.currentUser;
  //   console.log(user.displayName);

  //   const displayName = user ? user.displayName : "Guest";
  //   const photoURL = user ? user.photoURL : "";

  //   const singleUserDetails = () => {
  //     userName = user.displayName;
  //     userEmail = user.email;
  //     userPhoto = user.photoURL;

  //     document.getElementById("userName").textContent = userName;
  //     document.getElementById("email").textContent = userEmail;
  //     document.getElementById("userPhoto").src = userPhoto;
  //   };

  //   onAuthStateChanged(auth, (user) => {
  //     if (user) {
  //       singleUserDetails(user);
  //       const uid = user.uid;
  //       return uid;
  //     } else {
  //       alert("create Account & login");
  //       navigate(`/`);
  //     }
  //   });
  return (
    <>
      <Header
        displayName={user.displayName}
        image={user.photoURL}
        handleLogout={handleLogout}
      />
      <Movie />
      {/* <button onClick={handleLogout}>Logout</button> */}
      {/* <Link
        to={"/"}
        onClick={() => {
          localStorage.clear("accessToken");
          setToken(null);
        }}
      >
        Logout
      </Link> */}
    </>
  );
};

export default Home;
