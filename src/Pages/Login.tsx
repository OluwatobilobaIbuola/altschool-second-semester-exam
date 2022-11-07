import React, { useState } from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { provider, auth } from "../firebase";
import { setUserLocal } from "../utils/helper";
import { Link } from "react-router-dom";
import ThemeMode from "../ThemeMode/theme.mode";
import styles from "../styles";
import HelmetSEO from "../HelmetSEO";
const Login = ({ setUser }: any) => {
  const [values, setValues] = useState({ username: "", password: "" });
  const signIn = (e: any) => {
    e.preventDefault();
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential?.accessToken;

        const user = result?.user;
        setUser({
          email: user.email,
          displayName: user.displayName,
          uid: user.uid,
          photoUrl: user?.photoURL,
        });
        setUserLocal(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
      });
  };

  const handleChange = (event: any) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  return (
    <>
      <HelmetSEO title={`Login`} />
      <div
        className={`${styles.flexCenter} min-h-[100vh] w-[100vw] flex-col gap-4  dark:bg-primary`}
      >
        <ThemeMode />
        <form className="dark:bg-[#00000076]  border dark:border-dimWhite border-primary gap-8 flex flex-col rounded-[2rem] p-[5rem]">
          <div className="gap-4 flex items-center justify-center ">
            <h1 className=" dark:text-dimWhite uppercase font-bold">teneeds</h1>
          </div>
          <input
            type="text"
            placeholder="Username"
            name="username"
            onChange={(event) => handleChange(event)}
            min="3"
            className={`${styles.input}`}
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            onChange={(event) => handleChange(event)}
            className={`${styles.input}`}
          />
          <button className={`${styles.button}`} type="submit">
            Log In
          </button>
          <span className="uppercase dark:text-dimWhite">
            Don't have an account ?{" "}
            <Link className="text-secondary font-bold no-underline" to="">
              Create One.
            </Link>
          </span>
          <p className="dark:text-dimWhite text-center">Or</p>
          <button className={`${styles.button}`} onClick={signIn}>
            Continue with Google
          </button>
        </form>
      </div>
    </>
  );
};

export default Login;
