import React from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";

import { Menu, TaskSquare, Profile2User, Home3, Folder2 } from "iconsax-react";

const LeftBar = () => {
  const { pathname } = useLocation();

  return (
    <LeftBarContainer>
      <List>
        <ListItem $active={pathname.split("/")[1] === "dashboard" || pathname === "/dashboard" ? "active" : ""}>
          <Link to="/dashboard">
            <Menu /> Dashboard
          </Link>
        </ListItem>
        <ListItem $active={pathname.split("/")[1] === "departments" || pathname === "/departments" ? "active" : ""}>
          <Link to="/departments">
            <Home3 /> Departments
          </Link>
        </ListItem>
        <ListItem $active={pathname.split("/")[1] === "categories" || pathname === "/categories" ? "active" : ""}>
          <Link to="/categories">
            <Folder2 /> Categories
          </Link>
        </ListItem>
        <ListItem $active={pathname.split("/")[1] === "assessment" || pathname === "/assessment" ? "active" : ""}>
          <Link to="/assessment">
            <TaskSquare /> Assessment
          </Link>
        </ListItem>
        <ListItem $active={pathname.split("/")[1] === "employees" || pathname === "/employees" ? "active" : ""}>
          <Link to="/employees">
            <Profile2User /> Employees
          </Link>
        </ListItem>
      </List>
    </LeftBarContainer>
  );
};

export default LeftBar;

const LeftBarContainer = styled.nav`
  width: 100%;
  height: 100%;
  padding-left: ${({ theme }) => theme.spacing(2)};
  box-sizing: initial;

  ${({ theme }) => theme.breakpoints.down("md")} {
    width: 240px;
    background: #ffffff;
    padding-top: ${({ theme }) => theme.spacing(4)};
  }
`;

const List = styled.ul`
  width: 90%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(1)};
  }
`;

const ListItem = styled.li`
  a {
    display: flex;
    align-items: center;
    gap: ${({ theme }) => theme.spacing(3)};
    font-size: 18px;
    line-height: 24px;
    color: ${(props) => (props.$active === "active" ? "#141ae9" : "#323130")};
    font-weight: 600;
    padding: ${({ theme }) => theme.spacing(2)};
    border-radius: ${({ theme }) => theme.spacing(1)};

    &:hover {
      color: ${(props) => (props.$active === "active" ? "#141ae9" : "#323130")};
    }
  }
`;
