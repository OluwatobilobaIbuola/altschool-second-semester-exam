import React from "react";
import { ClientsList } from "../components";
import styles from "../styles";
import { Outlet, useParams } from "react-router-dom";
import HelmetSEO from "../HelmetSEO";

const Clients = () => {
  const { userId } = useParams();
  return (
    <>
      <HelmetSEO
        title={`Our Clients | Teneeds Clients Sourcing`}
        content={`Our team of experts uses a methodology to identify the best client
          most likely to fit your needs. We examine their performance and
          strength and make astute decision with this.`}
        href={`/clients`}
      />
      {!userId && (
        <section
          className={`transition ease-in-out duration-500  dark:bg-primary mt-[100px] min-h-[100vh] ${styles.flexCenter}`}
        >
          <div className={`${styles.paddingX}  ${styles.flexStart}`}>
            <div className={`${styles.boxWidth}`}>
              <ClientsList  />
            </div>
          </div>
        </section>
      )}
      <Outlet />
    </>
  );
};

export default Clients;
