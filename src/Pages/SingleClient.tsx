import React from "react";
import { useParams } from "react-router-dom";
import Button from "../components/Button";
import HelmetSEO from "../HelmetSEO";
import styles from "../styles";

const SingleClient = ({ clients }: any) => {
  const { userId } = useParams();
  const user = clients?.results?.find(
    (client: any) => client?.id?.value === userId
  );

  return (
    <>
      <HelmetSEO
        title={`Clients | Teneeds Clients Sourcing`}
        content="Our Clients with right skills to meet your business needs"
        href={`/clients/${userId}`}
      />
      <div
        className={`mt-[100px] min-h-[100vh] dark:bg-primary transition ease-in-out duration-500
      `}
      >
        <div className={`${styles.paddingX}  ${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}>
            <div className="flex p-[50px] sm:p-[10px]  flex-col sm:flex-row">
              <div className="min-w-[50%]">
                <img
                  className="w-[100%] h-[90vh] sm:object-cover sm:h-[70vh] object-contain"
                  src={user?.picture?.large}
                />
              </div>
              <div className="py-0 sm:px-[30px] min-w-[50%] p-[10px]">
                <div className="dark:text-dimWhite font-[400] text-[28px] break-all">
                  {user?.email}
                </div>
                <div className="dark:text-dimWhite font-[600] text-[24px] my-[20px] mx-0">
                  {user?.location?.city}
                </div>
                <div className="dark:text-dimWhite font-[400] text-[40px] ">
                  {user?.phone}
                </div>
                <Button styles="mt-[20px]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleClient;
