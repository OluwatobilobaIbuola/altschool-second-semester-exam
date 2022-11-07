import styles from "../styles";
import { arrowUp } from "../assets";
import { EventValues } from "../context/context";
import { useContext } from "react";

const GetStarted = () => {
  const { mode } = useContext(EventValues);
  return (
    <div
      className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer`}
    >
      <div
        className={`${styles.flexCenter} flex-col transition ease-in-out duration-500 dark:bg-primary w-[100%] h-[100%] rounded-full`}
      >
        <div className={`${styles.flexStart} flex-row`}>
          <p className="font-poppins font-medium text-[18px] leading-[23.4px]">
            <span
              className={`transition ease-in-out duration-500 ${
                mode === "true" ? "text-gradient" : "text-white"
              }`}
            >
              Get
            </span>
          </p>
          <img
            src={arrowUp}
            alt="arrow-up"
            className="w-[23px] h-[23px] object-contain"
          />
        </div>

        <p className="font-poppins font-medium text-[18px] leading-[23.4px]">
          <span
            className={`transition ease-in-out duration-500 ${
              mode === "true" ? "text-gradient" : "text-white"
            }`}
          >
            Started
          </span>
        </p>
      </div>
    </div>
  );
};

export default GetStarted;
