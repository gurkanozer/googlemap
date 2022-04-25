import React, { useState } from "react";
import {
  ChartsContainer,
  ChartsHeader,
  ChartsBody,
  Title,
  ButtonGroup,
} from "./style";
import RadioButton from "../RadioButton";
import PieChart from "./PieChart";
import BarChart from "./BarChart";
import LineChart from "./LineChart";

const options = {
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
};
const chartSettings = {
  backgroundColor: [
    "rgba(249, 65, 68, 0.6)",
    "rgba(248, 150, 30, 0.6)",
    "rgba(67, 170, 139, 0.6)",
    "rgba(39, 125, 161, 0.6)",
    "rgba(249, 132, 74, 0.6)",
  ],
  borderColor: [
    "rgba(249, 65, 68, 1)",
    "rgba(248, 150, 30, 1)",
    "rgba(67, 170, 139, 1)",
    "rgba(39, 125, 161, 1)",
    "rgba(249, 132, 74, 1)",
  ],
  borderWidth: 1,
};

const Charts = ({ labels, label, name, data }) => {
  /*---------------------State */
  /* eslint-disable no-unused-vars */
  const [chartData, setchartData] = useState({
    labels,
    datasets: [
      {
        label,
        data: data,
        ...chartSettings,
      },
    ],
  });
  const [chartType, setChartType] = useState("bar");
  /*-------------------------Handle on Click */
  const hanldeOnChange = (e) => {
    setChartType(e.currentTarget.value);
  };
  return (
    <ChartsContainer>
      <ChartsHeader>
        <Title>{label}</Title>
        <ButtonGroup>
          <RadioButton
            label="Bar"
            name={name}
            value="bar"
            onChange={(e) => hanldeOnChange(e)}
            checked={chartType === "bar" ? true : false}
          />
          <RadioButton
            label="Pie"
            name={name}
            value="pie"
            onChange={(e) => hanldeOnChange(e)}
            checked={chartType === "pie" ? true : false}
          />
          <RadioButton
            label="Line"
            name={name}
            value="line"
            onChange={(e) => hanldeOnChange(e)}
            checked={chartType === "line" ? true : false}
          />
        </ButtonGroup>
      </ChartsHeader>
      <ChartsBody>
        {chartType === "pie" && (
          <PieChart chartData={chartData} options={options} />
        )}
        {chartType === "bar" && (
          <BarChart chartData={chartData} options={options} />
        )}
        {chartType === "line" && (
          <LineChart chartData={chartData} options={options} />
        )}
      </ChartsBody>
    </ChartsContainer>
  );
};

export default Charts;
