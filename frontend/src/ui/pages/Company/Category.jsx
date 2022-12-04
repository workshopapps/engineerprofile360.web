import React from "react";

import PageInfo from "../../components/molecules/PageInfo";
import List from "../../components/Company/Categories/List";

const Category = () => {
  return (
    <>
      <PageInfo pageTitle={"Categories"} />
      <List />
    </>
  );
};

export default Category;
