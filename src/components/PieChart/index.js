import React from "react";
import { Pie } from "react-chartjs-2";
/* eslint-disable no-unused-vars */
import { Chart as ChartJS } from "chart.js/auto";

const PieChart = ({ chartData }) => {
  return (
    <Pie
      data={chartData}
      //   options={}
    />
  );
};

export default PieChart;
