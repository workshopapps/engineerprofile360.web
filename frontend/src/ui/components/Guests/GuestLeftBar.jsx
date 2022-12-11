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

const GuestLeftBar = () => {
  const { pathname } = useLocation();
  const { auth } = useAuth();

  return (
    <LeftBarContainer>
      <List>
        <ListItem
          $active={
            pathname.split("/guest-assessment-list")[1] ===
              "guest-assessment-list" || pathname === "/guest-assessment-list"
              ? "active"
              : ""
          }
        >
          <Link to="/guest-assessment-list">
            <Menu /> Dashboard
          </Link>
        </ListItem>
        <ListItem
          $active={
            pathname.split("/guest-assessment")[1] === "assessment" ||
            pathname === "/guest-assessment"
              ? "active"
              : ""
          }
        >
          <Link to="/guest-assessment">
            <TaskSquare /> Assessment
          </Link>
        </ListItem>
      </List>
    </LeftBarContainer>
  );
};

export default GuestLeftBar;

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
