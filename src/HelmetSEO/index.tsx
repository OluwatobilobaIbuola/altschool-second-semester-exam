import React from "react";
import { Helmet } from "react-helmet-async";
const HelmetSEO = ({ title }: any) => {
  return (
    <Helmet prioritizeSeoTags>
      <title>{title}</title>
      <meta name="description" />
      <link rel="canonical" href="" />
      <meta property="og:title" content="A very important title" />
    </Helmet>
  );
};

export default HelmetSEO;
