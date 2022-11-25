import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import {
  Container,
  Content,
  Dropdown,
  Header,
  Navigation,
  NavItem,
  NavItems,
  Profile,
} from "./DashBoard";
import User from "../../../assets/images/app/User-button.png";
import Bell from "../../../assets/icons/app/notification.svg";
import Arrow from "../../../assets/icons/app/arrow-down.svg";
import Users from "../../../assets/icons/profile.svg";
import Setting from "../../../assets/icons/setting.svg";
import Logout from "../../../assets/icons/logout.svg";
import Logo from "../../../assets/icons/app/logo.svg";
import Dashboard from "../../../assets/icons/app/dashboard.svg";
import Assessment from "../../../assets/icons/app/assessment.svg";
import Employee from "../../../assets/icons/app/user.svg";
import menuIcon from "../../../assets/icons/menu.svg";
import { Link } from "react-router-dom";

export function DashboardLayout() {
  const [dropdown, setDropdown] = useState(false);
  const [open, setOpen] = useState(true);

  const handleToggle = () => {
    setOpen(!open);
  };

  return (
    <Container>
      {open && (
        <Navigation>
          <header>
            <img src={Logo} alt="" className="logo" />
            <div className="toggle">
              <button onClick={handleToggle} className="header-toggle">
                <img src={menuIcon} alt="" />
              </button>
            </div>
          </header>

          <NavItems>
            <div>
              <img src={Dashboard} alt="" />
              <p>Dashboard</p>
            </div>
            <Link to="/assessment">
              <div>
                <img src={Assessment} alt="" />
                <p>Assessment</p>
              </div>
            </Link>

            <div>
              <img src={Employee} alt="" />
              <p>Employee</p>
            </div>
          </NavItems>
        </Navigation>
      )}

      <Content>
        <div className="toggle">
          <button onClick={handleToggle}>
            <img src={menuIcon} alt="" />
          </button>
        </div>
        <Header>
          <input type="search" placeholder="Search" />
          <Profile>
            <img src={User} alt="" />
            <p>Mark Jilaga</p>
            <img src={Bell} alt="" />
            <button onClick={() => setDropdown(!dropdown)}>
              <img src={Arrow} alt="" />
            </button>
            {dropdown && (
              <Dropdown>
                <a href="#/">
                  <img src={Users} alt="" /> Profile
                </a>
                <a href="#/">
                  <img src={Setting} alt="" /> Settings
                </a>
                <a href="#/">
                  <img src={Logout} alt="" /> Logout
                </a>
              </Dropdown>
            )}
          </Profile>
        </Header>

        <main style={{ overflow: "auto" }}>
          <Outlet />
        </main>
      </Content>
    </Container>
  );
}
