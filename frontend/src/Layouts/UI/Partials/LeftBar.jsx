import React from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import useAuth from "../../../hooks/useAuth";

import {
  Menu,
  TaskSquare,
  Profile2User,
  Home3,
  Folder2,
  Box1,
} from "iconsax-react";

const LeftBar = () => {
  const { pathname } = useLocation();
  const { auth } = useAuth();

  return (
    <LeftBarContainer>
      {auth.roles === 1 && (
        <List>
          <ListItem
            $active={
              pathname.split("/")[2] === "dashboard" ||
              pathname === "/employee/dashboard"
                ? "active"
                : ""
            }
          >
            <Link to="/employee/dashboard">
              <Menu /> Dashboard
            </Link>
          </ListItem>
          <ListItem
            $active={
              pathname.split("/")[2] === "assessment" ||
              pathname === "/employee/assessment"
                ? "active"
                : ""
            }
          >
            <Link to="/employee/assessment">
              <TaskSquare /> Assessment
            </Link>
          </ListItem>
        </List>
      )}

      {auth.roles === 2 && (
        <List>
          <ListItem
            $active={
              pathname.split("/")[1] === "dashboard" ||
              pathname === "/dashboard"
                ? "active"
                : ""
            }
          >
            <Link to="/dashboard">
              <Menu /> Dashboard
            </Link>
          </ListItem>
          <ListItem
            $active={
              pathname.split("/")[1] === "departments" ||
              pathname === "/departments"
                ? "active"
                : ""
            }
          >
            <Link to="/departments">
              <Home3 /> Departments
            </Link>
          </ListItem>
          <ListItem
            $active={
              pathname.split("/")[1] === "categories" ||
              pathname === "/categories"
                ? "active"
                : ""
            }
          >
            <Link to="/categories">
              <Folder2 /> Categories
            </Link>
          </ListItem>
          <ListItem
            $active={
              pathname.split("/")[1] === "assessment" ||
              pathname === "/assessment"
                ? "active"
                : ""
            }
          >
            <Link to="/assessment">
              <TaskSquare /> Assessment
            </Link>
          </ListItem>
          <ListItem
            $active={
              pathname.split("/")[1] === "employees" ||
              pathname === "/employees"
                ? "active"
                : ""
            }
          >
            <Link to="/employees">
              <Profile2User /> Employees
            </Link>
          </ListItem>
        </List>
      )}

      {auth.roles === 3 && (
        <List>
          <ListItem
            $active={
              pathname.split("/")[2] === "dashboard" ||
              pathname === "/admin/dashboard"
                ? "active"
                : ""
            }
          >
            <Link to="/admin/dashboard">
              <Menu /> Dashboard
            </Link>
          </ListItem>
          <ListItem
            $active={
              pathname.split("/")[2] === "stacks" ||
              pathname === "/admin/stacks"
                ? "active"
                : ""
            }
          >
            <Link to="/admin/stacks">
              <Box1 /> Stacks
            </Link>
          </ListItem>
          <ListItem
            $active={
              pathname.split("/")[2] === "assessments" ||
              pathname === "/admin/assessments"
                ? "active"
                : ""
            }
          >
            <Link to="/admin/assessments">
              <TaskSquare /> Assessments
            </Link>
          </ListItem>
          <ListItem
            $active={
              pathname.split("/")[2] === "users" || pathname === "/admin/users"
                ? "active"
                : ""
            }
          >
            <Link to="/admin/users">
              <Profile2User /> Users
            </Link>
          </ListItem>
        </List>
      )}
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
    margin-left: -16px;
    border-radius: ${({ theme }) => theme.spacing(1)};

    &:hover {
      color: ${(props) => (props.$active === "active" ? "#141ae9" : "#323130")};
    }
  }
`;
