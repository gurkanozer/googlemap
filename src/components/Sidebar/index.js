import React from "react";
import {
  SidebarContainer,
  SidebarLinks,
  SidebarLinkItem,
  SidebarLink,
} from "./style";

const Sidebar = ({ isActive, links }) => {
  return (
    <SidebarContainer className={isActive ? "active" : ""}>
      <SidebarLinks>
        {links.map((link, index) => (
          <SidebarLinkItem key={index}>
            <SidebarLink
              to={link.href}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              {link.label}
            </SidebarLink>
          </SidebarLinkItem>
        ))}
      </SidebarLinks>
    </SidebarContainer>
  );
};

export default Sidebar;
