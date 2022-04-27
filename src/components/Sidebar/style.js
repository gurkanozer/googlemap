import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const SidebarContainer = styled.div`
  width: 280px;
  height: calc(100vh - 60px);
  position: fixed;
  top: 60px;
  left: -100vw;
  z-index: 10;
  transition: all 0.3s ease;
  background-color: ${({ theme }) => theme.colors.white};
  border-right: 1px solid ${({ theme }) => theme.colors.gray};
  @media (min-width: 768px) {
    left: 0;
  }
  &.active {
    left: 0;
    transition: all 0.3s ease;
  }
`;

export const Title = styled.p`
  color: ${({ theme }) => theme.colors.darkBlue};
  font-size: 24px;
  text-align: center;
  text-transform: capitalize;
`;

export const SidebarLinks = styled.ul`
  display: flex;
  flex-direction: column;
`;

export const SidebarLinkItem = styled.li`
  padding: 8px;
  text-transform: capitalize;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray};
  /* &:first-child {
    border-top: 1px solid ${({ theme }) => theme.colors.gray};
  } */
`;

export const SidebarLink = styled(NavLink)`
  &.active {
    color: ${({ theme }) => theme.colors.blue};
  }
`;
