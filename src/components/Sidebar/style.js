import styled from "styled-components";

export const SidebarContainer = styled.div`
  width: 280px;
  height: calc(100vh - 60px);
  position: fixed;
  top: 60px;
  left: -100vw;
  z-index: 1;
  transition: all 0.3s ease;
  background-color: ${({ theme }) => theme.colors.white};
  border-right: 1px solid ${({ theme }) => theme.colors.gray};
  @media (min-width: 768px) {
    position: relative;
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
`;

export const SidebarLinks = styled.ul`
  display: flex;
  flex-direction: column;
`;

export const SidebarLinkItem = styled.li`
  padding: 8px;
`;
