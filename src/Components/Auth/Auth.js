import React, { useContext, useState } from "react";
import Nav from "./../Home/Nav/Nav";
import img from "./../../images/logo-black.png";
import "./Auth.css";
import { Link, useNavigate } from "react-router-dom";
import { MyContext } from "../../App";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { app } from "./firebase.config";

const Auth = () => {
  const [area, setArea, loggedIn, setLoggedIn, name, setName] =
    useContext(MyContext);
  const navigate = useNavigate();
  const [user, setUser] = useState("");
  const [isSignedUp, setIsSignedUp] = useState(false);
  const [submitter, setSubmitter] = useState("");
  const [confirmationErr, setConfirmationErr] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // authentication by create User With Email And Password
    if (submitter === "signUp") {
      if (user.password === user.confirmedPass) {
        const auth = getAuth(app);
        createUserWithEmailAndPassword(auth, user.email, user.password).then(
          (res) => {
            setUser({ ...user, signUpError: "" });
            setIsSignedUp(true);
            setLoggedIn(true);
            updateProfile(auth.currentUser, {
              displayName: `${user.firstName} ${user.lastName}`,
            }).catch((error) => {
              const errorMessage = error.message;
              setUser({ ...user, signUpError: errorMessage });
            });
          }
        );
      } else {
        setConfirmationErr(true);
      }
    }
    // authentication by sign In With Email And Password

    if (submitter === "signIn") {
      setUser({ ...user, signUpError: "" });
      const auth = getAuth(app);
      signInWithEmailAndPassword(auth, user.email, user.password)
        .then((res) => {
          const currentUser = auth.currentUser;
          setName(currentUser.displayName);
          setLoggedIn(true);
          navigate("/");
        })
        .catch((error) => {
          const errorMessage = error.message;
          setUser({ ...user, signUpError: errorMessage });
        });
    }
  };

  return (
    <div>
      <Nav color="black" img={img} />
      <div className="row container m-auto auth-margin">
        <form className="col-md-4 m-auto auth-form" onSubmit={handleSubmit}>
          {isSignedUp ? (
            <h4 style={{ fontWeight: "bold" }}>Login</h4>
          ) : (
            <h4 style={{ fontWeight: "bold" }}>Create an account</h4>
          )}
          {!isSignedUp && (
            <div className="form-group">
              <input
                type="text"
                className="form-control mt-3"
                placeholder="First Name"
                onBlur={(e) => setUser({ ...user, firstName: e.target.value })}
              />
            </div>
          )}
          {!isSignedUp && (
            <div className="form-group">
              <input
                type="text"
                className="form-control mt-3"
                placeholder="Last Name"
                onBlur={(e) => setUser({ ...user, lastName: e.target.value })}
              />
            </div>
          )}

          <div className="form-group">
            <input
              type="email"
              className="form-control mt-3"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              onBlur={(e) => setUser({ ...user, email: e.target.value })}
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              className="form-control mt-3"
              placeholder="Password"
              autoComplete=""
              onBlur={(e) => setUser({ ...user, password: e.target.value })}
            />
          </div>
          {!isSignedUp && (
            <div className="form-group">
              <input
                type="password"
                className="form-control mt-3"
                placeholder="Confirm Password"
                autoComplete=""
                onBlur={(e) =>
                  setUser({ ...user, confirmedPass: e.target.value })
                }
              />
            </div>
          )}
          {isSignedUp ? (
            <button
              type="submit"
              name="signIn"
              className="btn form-control mt-3"
              style={{ backgroundColor: "orange", fontWeight: "bold" }}
              onClick={(e) => setSubmitter(e.target.name)}
            >
              SignIn
            </button>
          ) : (
            <button
              type="submit"
              name="signUp"
              className="btn form-control mt-3"
              style={{ backgroundColor: "orange", fontWeight: "bold" }}
              onClick={(e) => setSubmitter(e.target.name)}
            >
              SignUp
            </button>
          )}
          <p style={{ paddingTop: "15px", textAlign: "center" }}>
            Already Have an account?{" "}
            <Link
              to="/login"
              style={{ textDecoration: "none", color: "orange" }}
            >
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Auth;
