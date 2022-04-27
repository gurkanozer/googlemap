import styled from "styled-components";

export const MapContainer = styled.div`
  position: relative;
  box-shadow: 1px 3px 8px 0px rgba(221, 221, 221, 1);
  overflow-x: hidden;
`;
//---------------- INFO CONTAINER
export const InfoContainer = styled.div`
  width: 100%;
  min-width: 240px;
`;
export const PanText = styled.p`
  font-size: 14px;
  line-height: 28px;
`;

export const Strong = styled.span`
  font-weight: 600;
  color: ${({ color }) => color};
`;
//--------------------------- ACTION CONTAINER
export const ActionContainer = styled.div`
  position: absolute;
  z-index: 1;
  top: 16px;
  left: 16px;
`;
export const ActionButton = styled.button`
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
//----------------------------- ITEM LIST
export const ItemsListContainer = styled.div`
  position: absolute;
  top: 0;
  right: -100%;
  width: 200px;
  height: 100%;
  overflow: auto;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 1px 3px 8px 0px rgba(221, 221, 221, 1);
  transition: all 0.4s ease;
  z-index: 2;
  &.active {
    right: 0;
  }
  //SCROOL BAR
  /* width */
  ::-webkit-scrollbar {
    width: 8px;
  }
  /* Track */
  ::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.colors.white};
  }
  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.gray};
  }
  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: ${({ theme }) => theme.colors.darkGray};
  }
`;
export const ItemsList = styled.ul`
  margin-top: 80px;
  width: 100%;
  display: flex;
  flex-direction: column;
`;
export const Item = styled.li`
  padding: 8px;
  width: 100%;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray};
  &:first-child {
    border-top: 1px solid ${({ theme }) => theme.colors.gray};
  }
`;
export const ItemButton = styled.button`
  width: 100%;
  text-align: left;
  color: ${({ theme }) => theme.colors.darkBlue};
  &.active {
    color: ${({ theme }) => theme.colors.blue};
  }
`;
export const ItemToggleButton = styled.button`
  position: absolute;
  z-index: 10;
  top: 16px;
  right: 16px;
  background-color: ${({ theme }) => theme.colors.white};
  padding: 12px;
  margin-right: 8px;
  color: ${({ theme }) => theme.colors.darkBlue};
  box-shadow: 2px 3px 8px -1px rgba(221, 221, 221, 1);
`;
