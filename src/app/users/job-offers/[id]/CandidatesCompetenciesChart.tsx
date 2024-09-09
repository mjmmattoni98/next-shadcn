"use client";

import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const CandidatesCompetenciesChart = () => {
  const data = [
    {
      name: "Candidato 1",
      react: 15,
      typescript: 20,
      javascript: 10,
      ux: 5,
      design: 10,
    },
    {
      name: "Candidato 2",
      react: 27,
      typescript: 25,
      javascript: 41,
      ux: 53,
      design: 17,
    },
    {
      name: "Candidato 3",
      react: 12,
      typescript: 40,
      javascript: 8,
      ux: 23,
      design: 9,
    },
    {
      name: "Candidato 4",
      react: 5,
      typescript: 32,
      javascript: 47,
      ux: 26,
      design: 55,
    },
  ];

  return (
    <div className="w-1/2 h-[500px]">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="react" stackId="a" fill="#8884d8" />
          <Bar dataKey="typescript" stackId="a" fill="#82ca9d" />
          <Bar dataKey="javascript" stackId="a" fill="#0088FE" />
          <Bar dataKey="ux" stackId="a" fill="#FFBB28" />
          <Bar dataKey="design" stackId="a" fill="#FF8042" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};
export default CandidatesCompetenciesChart;
