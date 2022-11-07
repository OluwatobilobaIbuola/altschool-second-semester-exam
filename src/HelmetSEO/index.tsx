import React from "react";
import { Helmet } from "react-helmet-async";
const HelmetSEO = ({ title, content, href }: any) => {
  return (
    <Helmet prioritizeSeoTags>
      <title>{title}</title>
      <meta name="description" content={content} />
      <link rel="canonical" href={href} />
    </Helmet>
  );
};

export default HelmetSEO;
