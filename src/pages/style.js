import styled from "styled-components";

export const MainContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.grayBlue};
  display: flex;
  flex-direction: row;
  @media (min-width: 768px) {
    justify-content: flex-end;
  }
`;
export const HomeContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
export const ChartContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  margin-top: 100px;
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;
