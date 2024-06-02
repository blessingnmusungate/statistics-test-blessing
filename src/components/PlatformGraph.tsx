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
const PlatformGraph: React.FC<Props> = ({ data }) => {
  return (
    <ResponsiveContainer width={"90%"} height={450}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Legend />
        <Bar dataKey="android" fill="blue" />
        <Bar dataKey="ios" fill="green" />
        <Bar dataKey="unknown" fill="orange" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default PlatformGraph;
