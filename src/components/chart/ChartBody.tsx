import { XAxis, YAxis, Line, LineChart, Legend, CartesianGrid } from "recharts";
import { IReceiveWeatherItem } from "./types";

export function ChartBody({ chartData }: { chartData: IReceiveWeatherItem[] }) {
  return (
    <LineChart width={500} height={300} data={chartData}>
      <XAxis />
      <YAxis />
      <Legend />
      <CartesianGrid strokeDasharray="3 3" />
      <Line
        data-testid="lineX"
        type="monotone"
        dataKey="id1"
        stroke="#4d0cbd"
      />
      <Line
        data-testid="lineY"
        type="monotone"
        dataKey="id2"
        stroke="#8a1b58"
      />
    </LineChart>
  );
}
