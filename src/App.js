import React, { useState } from "react";
import styled from "styled-components";
import { Routes, Route, Navigate } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { Sidebar, Dashboard, TopNav } from "./components";
import GlobalStyle from "./globalStyle";

//PAGES
import HomePage from "./pages/HomePage";
import ChartsPage from "./pages/ChartsPage";
import MapPage from "./pages/MapPage";

const theme = {
  colors: {
    darkBlue: "#022b3a",
    blue: "#45aaf2",
    lightBlue: "#bfdbf7",
    gray: "#e1e5f2",
    grayBlue: "#f1faee",
    white: "#ffffff",
  },
};
const MainContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  height: 100%;
  background-color: ${theme.colors.grayBlue};
  display: flex;
  flex-direction: row;
`;
function App() {
  const [isSidebarActive, setIsSidebarActive] = useState(false);
  const handleToggle = () => {
    setIsSidebarActive((prev) => !prev);
  };
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <TopNav toggleSidebar={handleToggle} />
      <MainContainer>
        <Sidebar isActive={isSidebarActive} />
        <Routes>
          <Route path="/" element={<Dashboard />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/charts" element={<ChartsPage />} />
            <Route path="/map" element={<MapPage />} />
          </Route>
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </MainContainer>
    </ThemeProvider>
  );
}

export default App;
