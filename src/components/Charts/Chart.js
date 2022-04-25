// import React from "react";

// const Chart = () => {
//   return (
//     <ChartContainer>
//       <ChartHeader>
//         <Title>{label}</Title>
//         <ButtonGroup>
//           <RadioButton
//             label="Bar"
//             name="chart"
//             value="bar"
//             onChange={(e) => hanldeOnChange(e)}
//             checked={chartType === "bar" ? true : false}
//           />
//           <RadioButton
//             label="Pie"
//             name="chart"
//             value="pie"
//             onChange={(e) => hanldeOnChange(e)}
//             checked={chartType === "pie" ? true : false}
//           />
//         </ButtonGroup>
//       </ChartHeader>
//       <ChartBody>
//         {chartType === "pie" ? (
//           <PieChart chartData={chartData} options={options} />
//         ) : (
//           <BarChart chartData={chartData} options={options} />
//         )}
//       </ChartBody>
//     </ChartContainer>
//   );
// };

// export default Chart;
