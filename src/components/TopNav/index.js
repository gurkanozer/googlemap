import React from "react";
import { TopNavContainer, ToggleButton, IconActive } from "./style";

const TopNav = ({ toggleSidebar }) => {
  return (
    <TopNavContainer>
      <ToggleButton onClick={toggleSidebar}>
        <IconActive />
      </ToggleButton>
    </TopNavContainer>
  );
};

export default TopNav;
