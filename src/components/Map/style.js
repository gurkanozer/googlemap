import styled from "styled-components";

export const MapContainer = styled.div`
  position: relative;
`;
export const PanText = styled.p`
  font-size: 14px;
`;

export const Strong = styled.span`
  font-weight: 600;
  color: ${({ color }) => color};
`;

export const ActionContainer = styled.div`
  position: absolute;
  z-index: 10;
  top: 16px;
  left: 16px;
`;
export const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.white};
  padding: 12px;
  margin-right: 8px;
  color: ${({ theme }) => theme.colors.darkBlue};
  box-shadow: 2px 3px 8px -1px rgba(221, 221, 221, 1);
  &.active {
    background-color: ${({ theme }) => theme.colors.blue};
    color: ${({ theme }) => theme.colors.white};
  }
`;
