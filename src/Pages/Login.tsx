import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { provider, auth } from "../firebase";
import { setUserLocal } from "../utils/helper";
import { Link } from "react-router-dom";
import styles, { toastOptions } from "../styles";
import HelmetSEO from "../HelmetSEO";
import { toast } from "react-toastify";
import { EventValues } from "../context/context";

const Login = () => {
  const navigate = useNavigate();
  const { setUser } = useContext(EventValues);
  const [values, setValues] = useState({ username: "", password: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const signIn = (e: any) => {
    e.preventDefault();
    setIsSubmitting(true);
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
        setIsSubmitting(false);
        navigate("/");
      })
      .catch((error) => {
        const errorMessage = error.message;
        if (
          errorMessage === "Firebase: Error (auth/network-error)." ||
          errorMessage === "Firebase: Error (auth/internal-error)."
        ) {
          toast.error("Network Error, Try Again", {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        }
        setIsSubmitting(false);
      });
  };

  const handleChange = (event: any) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  return (
    <>
      <HelmetSEO
        title={`Login | Teneeds Clients Sourcing`}
        content={`Log in to get started`}
        href={`/login`}
      />
      <div
        className={`${styles.flexCenter} min-h-[100vh] w-[100vw] relative flex-col gap-4  dark:bg-primary`}
      >
        <form
          className="dark:bg-[#00000076]  border dark:border-dimWhite border-primary 
          gap-y-[1rem] flex flex-col  sm:p-[5rem] sm:rounded-[2rem] rounded-[1rem] p-[1rem]"
        >
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
          <button
            disabled={isSubmitting}
            className={`${styles.button} disabled:cursor-not-allowed`}
            onClick={signIn}
          >
            {isSubmitting ? (
              <div
                className={`w-[20px] h-[20px] border-[3px] border-[white] border-b-[transparent]
             rounded-[50%] rotation flex mx-auto`}
              ></div>
            ) : (
              "Continue with Google"
            )}
          </button>
        </form>
      </div>
    </>
  );
};

export default Login;
