import React from "react";

import PageInfo from "../../components/molecules/PageInfo";
import UsersList from "../../components/Admin/Users/UsersList";

const Users = () => {
  return (
    <>
      <PageInfo pageTitle={"Users"} />
      <UsersList />
    </>
  );
};

export default Users;
