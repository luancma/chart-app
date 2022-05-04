export interface IWebsocketResponse {
  id: number;
  timestamp: number;
  temperature: number;
  data: number;
}

export interface IReceiveWeatherItem {
  timestamp: number;
  id1: number;
  id2: number;
}
