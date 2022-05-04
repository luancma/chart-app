import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { IReceiveWeatherItem, IWebsocketResponse } from "./types";
import { ChartBody } from "./ChartBody";
import { ChartHeader } from "./ChartHeader";

const ws = new WebSocket("ws://localhost:8999");
export function Chart() {
  const [chartData, setChartData] = useState<IReceiveWeatherItem[]>([]);

  useEffect(() => {
    ws.onmessage = ({ data }: { data: string }) => {
      const stopFetchingTime = 1000 * 60 * 5;
      const webSocketResponse = JSON.parse(data) as IWebsocketResponse[];
      const timestamp = webSocketResponse[0]?.timestamp;

      if (
        webSocketResponse[0]?.data < 100 ||
        webSocketResponse[1]?.data < 100
      ) {
        const receivedWeatherItem: IReceiveWeatherItem = {
          timestamp,
          id1: webSocketResponse[0].temperature,
          id2: webSocketResponse[1].temperature,
        };

        setChartData((currentData: IReceiveWeatherItem[]) => {
          if (!currentData?.length) {
            return currentData?.concat(receivedWeatherItem);
          }
          if (
            Date.now() - currentData[0]?.timestamp < stopFetchingTime &&
            currentData?.length
          ) {
            return currentData?.concat(receivedWeatherItem);
          }
          ws.close();
          return currentData;
        });
      }
    };
  }, []);

  ws.onerror = () => {
    toast.error("Connection error");
  };

  ws.onopen = () => {
    toast.success("Connected");
  };

  ws.onclose = () => {
    toast.info("Disconnected");
  };

  return (
    <div className="flex flex-col items-center">
      <ChartHeader
        id1={chartData[chartData?.length - 1]?.id1}
        id2={chartData[chartData?.length - 1]?.id2}
      />
      <ChartBody
        chartData={chartData?.slice(chartData?.length - 3, chartData?.length)}
      />
    </div>
  );
}
