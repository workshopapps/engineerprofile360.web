import React from "react";
import UserProfileCard from "../components/Employees/UserProfileCard";
import PageInfo from "../components/molecules/PageInfo";

const UserProfile = () => {
  return (
    <>
      <PageInfo pageTitle="User Profile" />
      <UserProfileCard />
    </>
  );
};

export default UserProfile;
