import { useContext } from "react";
import { stats } from "../constants";
import { EventValues } from "../context/context";
import styles from "../styles";

const Stats = () => {
  const { mode } = useContext(EventValues);
  return (
    <section
      className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6 relative`}
    >
     <div className={`absolute z-[0] w-[100%] h-[100%] right-0 rounded-full ${mode !== "true" ? "blue__gradientTwo" : null} -top-[50%]`} />
      {stats.map((stat) => (
        <div
          key={stat.id}
          className={`flex-1 flex justify-start items-center flex-row m-3`}
        >
          <h4 className="font-poppins font-semibold xs:text-[40.89px] text-[30.89px] xs:leading-[53.16px] leading-[43.16px] dark:text-white">
            {stat.value}
          </h4>
          <p
            className={`font-poppins font-normal xs:text-[20.45px] text-[15.45px] xs:leading-[26.58px] leading-[21.58px]  ${
              mode === "true" ? "text-gradient" : "text-gradientWhite"
            } uppercase ml-3`}
          >
            {stat.title}
          </p>
        </div>
      ))}
    </section>
  );
};

export default Stats;
