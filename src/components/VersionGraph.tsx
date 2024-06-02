import React from "react";
import {
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Legend,
  Bar,
  ResponsiveContainer,
} from "recharts";
interface Props {
  data: any;
}
const VersionGraph: React.FC<Props> = ({ data }) => {
  return (
    <ResponsiveContainer width={"90%"} height={450}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Legend />
        <Bar dataKey="1.0.0.swordupgradekillstickman.iec" fill="blue" />
        <Bar dataKey="1.0.0.swordupgradekillstickman.sip" fill="green" />
        <Bar dataKey="1.0.0.swordupgradekillstickman.std" fill="orange" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default VersionGraph;
