import React from "react";
import { SidebarContainer, SidebarLinks, SidebarLinkItem } from "./style";
import { NavLink } from "react-router-dom";

const activeStyle = {
  textDecoration: "underline",
};
const Sidebar = ({ isActive, links }) => {
  return (
    <SidebarContainer className={isActive ? "active" : ""}>
      <SidebarLinks>
        {links.map((link, index) => (
          <SidebarLinkItem key={index}>
            <NavLink
              to={link.href}
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              {link.label}
            </NavLink>
          </SidebarLinkItem>
        ))}
      </SidebarLinks>
    </SidebarContainer>
  );
};

export default Sidebar;
