import React from "react";
import { Footer, Hero, Navbar } from "../components";
import HelmetSEO from "../HelmetSEO";
import styles from "../styles";

const Home = () => {
  return (
    <>
    <HelmetSEO title={`Home | Teneeds Clients Sourcing`} content={`The next generation client sourcing platform`} href={`/`}/>
    <div className="dark:bg-primary transition ease-in-out duration-500 mt-[100px] min-h-[100vh]">
      <div className={` ${styles.paddingX}  ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>
      <div
        className={`dark:bg-primary transition ease-in-out duration-500 ${styles.paddingX} ${styles.flexStart}`}
      >
        <div className={`${styles.boxWidth}`}>
          <Footer />
        </div>
      </div>
    </div>
    </>
  );
};

export default Home;
