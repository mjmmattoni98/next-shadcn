import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";

const PieChartPlot = () => {
  const COLORS = [
    "#0088FE",
    "#00C49F",
    "#FFBB28",
    "#FF8042",
  ];
  const data = [
    { name: "competence1", value: 10 },
    { name: "competence2", value: 20 },
    { name: "competence3", value: 9 },
    { name: "competence4", value: 51 },
  ];

  return (
    <ResponsiveContainer width="100%" height="100%">
      <PieChart width={400} height={400}>
        <Pie
          dataKey="value"
          data={data}
          cx="50%"
          cy="50%"
          outerRadius={80}
          fill="#8884d8"
          label
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    </ResponsiveContainer>
  );
};
export default PieChartPlot;
