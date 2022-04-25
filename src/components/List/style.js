import styled from "styled-components";

export const ListContainer = styled.div`
  width: 100%;
`;

export const ListInner = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

export const ListItem = styled.li`
  margin: 8px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.white};
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray};
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Button = styled.button`
  padding: 12px;
  color: ${({ theme }) => theme.colors.darkBlue};
  &:hover {
    color: ${({ theme }) => theme.colors.blue};
  }
`;
