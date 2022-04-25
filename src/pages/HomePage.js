import React from "react";
import { Map, Charts } from "../components";
import { CostumerData } from "../Data";
import { HomeContainer, ChartContainer } from "./style";

const HomePage = () => {
  return (
    <HomeContainer>
      <Map />
      <ChartContainer>
        <Charts
          name="gain"
          labels={CostumerData.map((data) => data.month)}
          label="Customers Gained"
          data={CostumerData.map((data) => data.gain)}
        />
        <Charts
          name="lost"
          labels={CostumerData.map((data) => data.month)}
          label="Customers Lost"
          data={CostumerData.map((data) => data.lost)}
        />
      </ChartContainer>
    </HomeContainer>
  );
};

export default HomePage;
