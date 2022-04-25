import React from "react";
import { Map, List } from "../components";
import styled from "styled-components";
import useMarkers from "../hooks/useMarkers";

const HomeContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const HomePage = () => {
  const { markers } = useMarkers();
  return (
    <HomeContainer>
      <Map />
      <List items={markers} />
    </HomeContainer>
  );
};

export default HomePage;
