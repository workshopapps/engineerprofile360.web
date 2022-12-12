import React, { useState, useEffect } from "react";
import axios from "../../../../api/axios";
import PageInfo from "../../../components/molecules/PageInfo";
import UsersList from "../../../components/Admin/Users/UsersList";
import { OverlayLoader } from "../../../../styles/reusableElements.styled";
import { showErrorToast } from "../../../../helpers/helper";

const Users = () => {
  const [users, setUsers] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getDetails = async () => {
      axios
        .get(`admin/users/?page=4`)
        .then((res) => {
          setUsers(res.data.data);
          setIsLoading(false);
        })
        .catch((err) => {
          setIsLoading(false);
          if (!err?.response) {
            showErrorToast(err.message);
          } else if (err?.response.data.errorState === true) {
            showErrorToast(err.response.data.message);
          }
        });
    };

    getDetails();
  }, []);

  return (
    <>
      <PageInfo pageTitle={"Users"} />
      {!isLoading ? (
        <UsersList users={users} />
      ) : (
        <OverlayLoader contained>
          <div></div>
          Preparing Users Table...
        </OverlayLoader>
      )}
    </>
  );
};

export default Users;
