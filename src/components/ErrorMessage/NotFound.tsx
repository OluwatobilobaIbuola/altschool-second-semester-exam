import React from "react";
import { Link } from "react-router-dom";
import styles from "../../styles";

const NotFound = () => {
  const reRoute = () => {
    window.location.href = "/";
  };

  return (
    <div className="w-[100vw] inset-0 fixed overflow-y-scroll overflow-x-hidden z-[100000] bg-translucent">
      <div className={`${styles.flexCenter} h-full w-full`}>
        <div className="p-[2rem] dark:bg-zinc-800 dark:text-dimWhite rounded-[8px] border-dimWhite border-[1px]">
          <h1 className="text-[32px]">
            404...
            <br /> Page Not Found.
          </h1>
          <p className="text-[24px]">
            This is not the page you are looking for. Check the spelling and try
            again.
          </p>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
