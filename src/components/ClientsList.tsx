import React, { useState } from "react";
import { useQuery } from "react-query";
import { useEffect } from "react";
import { Skeleton } from "../components/WithSuspense";
import Error from "../components/ErrorMessage/Error";
import { EventValues } from "../context/context";
import { useContext } from "react";
import styles from "../styles";
import Client from "./Client";
import { getClients } from "../services/apis";

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

const ClientsList = () => {
  const [page, setPage] = useState(1);
  const [result, setResult] = useState(10);
  const { screenSize, setIsFetching, setClients } = useContext(EventValues);
  const {
    isLoading,
    isError,
    isFetching,
    data: clientsdata,
    isPreviousData,
  } = useQuery(["clientsdata", page, result], () => getClients(page, result), {
    keepPreviousData: true,
  });

  useEffect(() => {
    setClients(clientsdata?.results);
    setIsFetching(isFetching);
  }, [clientsdata]);

  const prevPage = () => setPage((prev) => prev - 1);
  const nextPage = () => setPage((prev) => prev + 1);

  if (isLoading) {
    return <Skeleton />;
  }

  if (isError) {
    return <Error />;
  }

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
            Array(5)
              .fill(undefined)
              .map((_, i) => i + 1)
              .map((pg) => (
                <PageButton key={pg} pg={pg} page={page} setPage={setPage} />
              ))}
          <p className="whitespace-nowrap py-0 dark:text-dimWhite px-[0.5rem]">
            Page {clientsdata?.info?.page}
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
        {clientsdata?.results?.length > 1 &&
          clientsdata?.results?.map((client: any, index: number) => {
            return <Client client={client} index={index} />;
          })}
      </div>
    </div>
  );
};

export default ClientsList;
