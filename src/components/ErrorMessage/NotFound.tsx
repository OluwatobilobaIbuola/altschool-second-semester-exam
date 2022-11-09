import React from "react";
import { Link } from "react-router-dom";
import { welcomeRobo } from "../../assets";
import styles from "../../styles";

const NotFound = () => {
  const reRoute = () => {
    window.location.href = "/";
  };

  return (
    <div className="w-[100vw] inset-0 fixed overflow-y-scroll overflow-x-hidden z-[100000] dark:bg-primary bg-[white]">
      <div className={`${styles.flexCenter} h-full w-full`}>
        <div
          className=" bg-zinc-800 dark:bg-dimWhite text-dimWhite dark:text-primary
          sm:rounded-[8px] rounded-[4px] sm:p-[4rem] p-[1rem] dark:border-dimWhite border-primary border-[1px]"
        >
          <h1 className="sm:text-[48px] text-[24px]">
            404...
            <br /> Page Not Found.
          </h1>
          <p className="sm:text-[24px] text-[14px]">
            This is not the page you are looking for.{" "}
            <br className="sm:hidden flex" /> Check the spelling and try again.
          </p>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
