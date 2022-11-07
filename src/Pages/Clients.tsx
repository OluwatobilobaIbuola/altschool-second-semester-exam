import React from "react";
import { ClientsList } from "../components";
import styles from "../styles";
import { Outlet, useParams } from "react-router-dom";
import HelmetSEO from "../HelmetSEO";

const Clients = ({ setClients, setIsFetching }: any) => {
  const { userId } = useParams();
  return (
    <>
     <HelmetSEO title={`Our Clients`} />
      {!userId && (
        <section
          className={`transition ease-in-out duration-500  dark:bg-primary mt-[100px] min-h-[100vh] ${styles.flexCenter}`}
        >
          <div className={`${styles.paddingX}  ${styles.flexStart}`}>
            <div className={`${styles.boxWidth}`}>
              <ClientsList setIsFetching={setIsFetching} setClients={setClients} />
            </div>
          </div>
        </section>
      )}
      <Outlet />
    </>
  );
};

export default Clients;
