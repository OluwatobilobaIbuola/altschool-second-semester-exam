import React from "react";
import { Link } from "react-router-dom";
import { welcomeRobo } from "../../assets";
import styles from "../../styles";

const Error = () => {
  const reRoute = () => {
    window.location.href = "/";
  };

  return (
    <div className="w-[100vw] inset-0 fixed overflow-y-scroll overflow-x-hidden z-[100000] dark:bg-primary bg-[white]">
      <img src={welcomeRobo} className="absolute right-[10px] top-[10px]" />
      <div className={`${styles.flexCenter} h-full w-full`}>
        <div
          className="p-[4rem] dark:bg-[white] bg-zinc-800 dark:text-primary text-dimWhite text-[20px] rounded-[8px]
   dark:border-dimWhite border-primary border-[1px]"
        >
          <p>
            Something went wrong!!!{" "}
            <Link className="no-underline" to="" onClick={reRoute}>
              Try again
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Error;
