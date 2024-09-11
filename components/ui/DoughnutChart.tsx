// "use client";
// import React from "react";
// import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
// import { Doughnut } from "react-chartjs-2";

// const DoughnutChart = ({ accounts }: DoughnutChartProps) => {
//   const data = {
//     datasets: [
//       {
//         lable: "Banks",
//         data: [12500, 3500, 3750],
//         backgroundColor: ["#0747b6", "#2265d8", "#2f91fa"],
//       },
//     ],
//     labels: ["Bank 1", "Bank 2", "Bank 3"],
//   };
//   return <Doughnut data={data} />;
// };

// export default DoughnutChart;

"use client";
import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

interface DoughnutChartProps {
  accounts: any[];
}

const DoughnutChart: React.FC<DoughnutChartProps> = ({ accounts }) => {
  const data = {
    datasets: [
      {
        label: "Banks",
        data: [12500, 3500, 3750],
        backgroundColor: ["#0747b6", "#2265d8", "#2f91fa"],
      },
    ],
    labels: ["Bank 1", "Bank 2", "Bank 3"],
  };

  return (
    <Doughnut
      data={data}
      options={{
        cutout: "60%",
        plugins: {
          legend: {
            display: false,
          },
        },
      }}
    />
  );
};

export default DoughnutChart;
