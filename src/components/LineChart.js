import React from "react";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";
// import { Box } from "@chakra-ui/react";

const LineC = ({ coinHistory }) => {
  //  const datas = coinHistory.map(d => {
  //   //  let newDate = (new Date(d.timestamp).toLocaleDateString());
  //    return
  //  })

  let data = [];

  for (let i = 0; i < coinHistory?.length; i++) {
    data.push({
      price: coinHistory[i]?.price,
      timestamp: new Date(coinHistory[i].timestamp * 1000).toLocaleDateString(),
    });
  }
  console.log(data);
  return (
    <ResponsiveContainer minWidth={260} minHeight={240}>
      <LineChart data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
        <Line type="monotone" dataKey="price" stroke="#8884d8" />
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <XAxis dataKey="timestamp" />
        <YAxis />
        <Tooltip />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default LineC;
