import React, { Suspense } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import styles from "../styles";

export const Skeleton = () => {
  return (
    <div className="dark:bg-primary inset-0 fixed w-[100vw] z-[100000]">
      <div className={`${styles.flexCenter} w-full h-full dark:text-dimWhite`}>
        <CircularProgress color="inherit" />
      </div>
    </div>
  );
};

export const WithSuspense = (Component: any) => (props: any) =>
  (
    <Suspense fallback={<Skeleton />}>
      <Component {...props} />
    </Suspense>
  );
