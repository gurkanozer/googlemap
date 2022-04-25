import styled from "styled-components";
import { FaBars } from "react-icons/fa";

export const TopNavContainer = styled.div`
  width: 100%;
  height: 60px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray};
  position: fixed;
  background-color: ${({ theme }) => theme.colors.white};
  top: 0;
  left: 0;
  align-items: center;
  justify-content: space-between;
  z-index: 999;
`;

export const ToggleButton = styled.button`
  width: 44px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (min-width: 768px) {
    display: none;
  }
`;
export const IconActive = styled(FaBars)`
  color: ${({ theme }) => theme.colors.darkBlue};
`;
