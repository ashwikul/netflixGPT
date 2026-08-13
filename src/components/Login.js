import React, { useRef, useState } from "react";
import Header from "./Header";
import { validateData } from "../utils/validate";

import { auth } from "../utils/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useDispatch } from "react-redux";
import appStore from "../utils/appStore";
import { addUser } from "../utils/userSlice";
import { BG_COVER } from "../utils/constants";

const Login = () => {
  const [signInFormPage, setSignInFormPage] = useState(true);
  const [errorMsg, setErrorMsg] = useState("");
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);
  const dispatch = useDispatch((store) => store(appStore));

  const toggleSignIn = () => {
    setSignInFormPage(!signInFormPage);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isFormValid = validateData(
      email.current.value,
      password.current.value,
    );

    console.log(isFormValid);

    if (isFormValid !== null) {
      setErrorMsg(isFormValid);
      return;
    }

    //signup
    if (!signInFormPage) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value,
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          setErrorMsg(null);
          console.log("user created", user);
          //update full name

          updateProfile(auth.currentUser, {
            displayName: name.current.value,
          })
            .then(() => {
              // Profile updated!
              // ...
              console.log("user object", user);
              const { displayName, email } = user;
              console.log(displayName, email);
              dispatch(addUser({ displayName, email }));
            })
            .catch((error) => {
              // An error occurred
              // ...
              console.log("error occured while updating data");
            });

          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMsg(errorMessage);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value,
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          setErrorMsg(null);
          console.log("user created", user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMsg(errorMessage);
        });
    }
  };

  return (
    <div>
      <Header />
      <div>
        <img src={BG_COVER} alt="bg image" className="object-cover"></img>
      </div>
      <form
        className="absolute flex flex-col p-12 bg-black/75 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/3  gap-5 text-white"
        onSubmit={handleSubmit}
      >
        <h1 className="font-bold text-3xl">
          {signInFormPage ? "Sign In" : "Sign Up"}
        </h1>
        {!signInFormPage && (
          <input
            type="text"
            ref={name}
            placeholder="Full Name"
            className="bg-slate-900 p-3 rounded-md "
          />
        )}
        <input
          type="text"
          ref={email}
          placeholder="Email"
          className="bg-slate-900 p-3 rounded-md"
        />
        <input
          type="password"
          ref={password}
          placeholder="Password"
          className="bg-slate-900 p-3 rounded-md"
        />
        {errorMsg && <p className="text-red-600 font-semibold">{errorMsg}</p>}
        <button className="bg-red-600 p-3 font-bold  rounded-md">
          {signInFormPage ? "Sign In" : "Sign Up"}
        </button>
        <p className=" font-semibold cursor-pointer" onClick={toggleSignIn}>
          {signInFormPage
            ? "Are you new to netflix? Sign up here"
            : "Are you a member ? Sign in here"}
        </p>
      </form>
    </div>
  );
};

export default Login;
