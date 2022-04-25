import React from "react";
import { DashboardContainer } from "./style";
import { Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <DashboardContainer>
      <Outlet />
    </DashboardContainer>
  );
};

export default Dashboard;
