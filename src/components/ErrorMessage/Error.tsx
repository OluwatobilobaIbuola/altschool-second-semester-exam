import React from "react";
import { Link } from "react-router-dom";
import styles from "../../styles";

const Error = () => {
  const reRoute = () => {
    window.location.href = "/";
  };

  return (
    <div className="w-[100vw] inset-0 fixed overflow-y-scroll overflow-x-hidden z-[100000] bg-translucent">
      <div className={`${styles.flexCenter} h-full w-full`}>
        <div className="p-[2rem] bg-zinc-800 dark:text-dimWhite rounded-[4px] border-dimWhite border-[1px]">
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
