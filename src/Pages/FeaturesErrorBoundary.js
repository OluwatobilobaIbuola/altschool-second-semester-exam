import styles from "../styles";
import { useState, useEffect } from "react";

const FeaturesErrorBoundary = () => {
  const [errorTest, setErrorTest] = useState("");

  return (
    <>
      {errorTest?.map((error) => (
        <div
          className={`${styles.flexCenter} m-[5px] min-w-[280px] h-[350px] flex-1 relative bg-[#f5fbfd]`}
        ></div>
      ))}
    </>
  );
};

export default FeaturesErrorBoundary;
