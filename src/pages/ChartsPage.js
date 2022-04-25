import React from "react";
import { Charts } from "../components";
import { CostumerData } from "../Data";
import styled from "styled-components";

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;
const ChartsPage = () => {
  return (
    <Container>
      <Charts
        labels={CostumerData.map((data) => data.month)}
        label="Customers Gained"
        data={CostumerData.map((data) => data.gain)}
      />
      <Charts
        labels={CostumerData.map((data) => data.month)}
        label="Customers Lost"
        data={CostumerData.map((data) => data.lost)}
      />
    </Container>
  );
};

export default ChartsPage;
