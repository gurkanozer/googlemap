import React from "react";
import { SidebarContainer, SidebarLinks, SidebarLinkItem } from "./style";
import { NavLink } from "react-router-dom";

const activeStyle = {
  textDecoration: "underline",
};
const Sidebar = ({ isActive }) => {
  return (
    <SidebarContainer className={isActive ? "active" : ""}>
      <SidebarLinks>
        <SidebarLinkItem>
          <NavLink
            to="/"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Home
          </NavLink>
        </SidebarLinkItem>
        <SidebarLinkItem>
          <NavLink
            to="charts"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Charts
          </NavLink>
        </SidebarLinkItem>
        <SidebarLinkItem>
          <NavLink
            to="map"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Map
          </NavLink>
        </SidebarLinkItem>
      </SidebarLinks>
    </SidebarContainer>
  );
};

export default Sidebar;
