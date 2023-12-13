import React from "react";
import "./Login.css";
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
      {/* <div>
        <button onClick={handleGoogle}>Google</button>
      </div> */}

      <section className="vh-100 gradient-custom">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-8 col-lg-6 col-xl-5">
              <div
                className="card bg-dark text-white"
                style={{ borderRadius: "1rem" }}
              >
                <div className="card-body text-center">
                  <div className="mb-md-5 mt-md-4 pb-5">
                    <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
                    <p className="text-white-50 mb-5">
                      Please sign in with Google!
                    </p>

                    <button
                      className="btn btn-outline-light btn-lg px-5"
                      onClick={handleGoogle}
                    >
                      Sign in with Google
                    </button>
                    {/* <div className="d-flex justify-content-center text-center mt-4 pt-1">
                      <a href="#!" className="text-white">
                        <i className="fab fa-facebook-f fa-lg" />
                      </a>
                      <a href="#!" className="text-white">
                        <i className="fab fa-twitter fa-lg mx-4 px-2" />
                      </a>
                      <a href="#!" className="text-white">
                        <i className="fab fa-linkedin fa-lg" />
                      </a>
                    </div> */}
                  </div>
                  <div>
                    <p className="mb-0">
                      Don't have an account?{" "}
                      <a href="#!" className="text-white-50 fw-bold">
                        Sign Up
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
