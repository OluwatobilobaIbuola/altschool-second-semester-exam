import React, { useState } from "react";
import { useQuery } from "react-query";
import { useEffect } from "react";
// import { Skeleton } from "../WithSuspense";
// import { Error } from "../ErrorMessage/Error";
import { EventValues } from "../context/context";
import { useContext } from "react";
import styles from "../styles";
import Client from "./Client";
import { getUsers } from "../services/apis";

const PageButton = ({ pg, setPage, page }: any) => {
  return (
    <button
      className="p-[0.5rem] w-[70px] h-auto m-0 mr-2 rounded-[4px] border-[1.5px]
       dark:border-dimWhite dark:text-dimWhite whitespace-nowrap focus:dark:bg-dimWhite focus:bg-primary
     focus:text-dimWhite"
      onClick={() => setPage(pg)}
    >
      {pg}
    </button>
  );
};

const ClientsList = ({ setClients }: any) => {
  const [page, setPage] = useState(1);
  const [result, setResult] = useState(10);
  const { screenSize } = useContext(EventValues);
  const {
    isLoading,
    isError,
    isFetching,
    data: clients,
    isPreviousData,
  } = useQuery(["users", page, result], () => getUsers(page, result), {
    keepPreviousData: true,
  });

  useEffect(() => {
    setClients(clients);
  }, [clients]);

  const prevPage = () => setPage((prev) => prev - 1);
  const nextPage = () => setPage((prev) => prev + 1);

  // if (isLoading) {
  //   return <Skeleton />;
  // }

  // if (isError) {
  //   return <Error />;
  // }

  return (
    <div className={`${styles.boxWidth}  ${styles.paddingY}`}>
      <div className={`${styles.flexCenter} w-1/2 sm:mx-auto ml-auto flex-col`}>
        <nav className={`${styles.flexCenter} mb-[1rem] flex-nowrap`}>
          <button
            className="p-[0.5rem] w-[70px] h-auto m-0 mr-2 rounded-[4px] border-[1.5px]
             dark:border-dimWhite dark:text-dimWhite whitespace-nowrap  focus:dark:bg-dimWhite"
            onClick={prevPage}
            disabled={isPreviousData || page === 1}
          >
            Prev
          </button>
          {screenSize > 768 &&
            [1, 2, 3, 4, 5].map((pg) => (
              <PageButton key={pg} pg={pg} page={page} setPage={setPage} />
            ))}
          <p className="whitespace-nowrap py-0 dark:text-dimWhite px-[0.5rem]">
            Page {clients?.info?.page}
          </p>
          <button
            className="p-[0.5rem] w-[70px] h-auto m-0 mr-2 rounded-[4px] border-[1.5px]
           dark:border-dimWhite dark:text-dimWhite whitespace-nowrap  focus:dark:bg-dimWhite"
            onClick={nextPage}
            disabled={isPreviousData}
          >
            Next
          </button>
        </nav>
      </div>
      <div className={` ${styles.flexCenter} flex-wrap`}>
        {clients?.results?.length > 1 &&
          clients?.results?.map((client: any, index: number) => {
            return <Client client={client} index={index} />;
          })}
      </div>
    </div>
  );
};

export default ClientsList;
