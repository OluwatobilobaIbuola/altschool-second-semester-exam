import styles from "../styles";
import { discount, clients } from "../assets";
import GetStarted from "./GetStarted";
import { EventValues } from "../context/context";
import { useContext } from "react";

const Hero = () => {
  const { mode } = useContext(EventValues);
  return (
    <section
      id="home"
      className={`flex md:flex-row flex-col  ${styles.paddingY}`}
    >
      <div className={`flex-1 ${styles.flexStart} flex-col`}>
        <div
          className={`flex transition ease-in-out duration-500 flex-row items-center py-[6px] px-4 ${
            mode === "true"
              ? "bg-discount-gradient"
              : "bg-discount-gradientWhite"
          } rounded-[10px] mb-2`}
        >
          <img src={discount} alt="discount" className="w-[32px] h-[32px]" />
          <p className={`${styles.paragraph} ml-2`}>
            <span className="transition ease-in-out duration-500 dark:text-white">
              10%
            </span>{" "}
            Discount For{" "}
            <span className="transition ease-in-out duration-500 dark:text-white">
              1 Month
            </span>{" "}
            Sign Up
          </p>
        </div>

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] dark:text-white ss:leading-[100.8px] leading-[75px]">
            The Next <br className="sm:block hidden" />{" "}
            <span
              className={` transition ease-in-out duration-500 ${
                mode === "true" ? "text-gradient" : "text-gradientWhite"
              }`}
            >
              Generation
            </span>{" "}
          </h1>
          <div className="ss:flex hidden md:mr-4 mr-0">
            <GetStarted />
          </div>
        </div>

        <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] dark:text-white ss:leading-[100.8px] leading-[75px] w-full">
          Client Sourcing Platform.
        </h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Our team of experts uses a methodology to identify the best client
          most likely to fit your needs. We examine their performance and strength and make astute decision with this.
        </p>
      </div>

      <div
        className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}
      >
        <img
          src={clients}
          alt="billing"
          className="w-[100%] h-[100%] relative z-[5]"
        />

        {/* gradient start */}
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        {/* gradient end */}
      </div>

      <div className={`ss:hidden ${styles.flexCenter}`}>
        <GetStarted />
      </div>
    </section>
  );
};

export default Hero;
