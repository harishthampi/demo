import { ForecastWeather } from "@/api/types";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { format } from "date-fns";

interface HourlyForecastProps {
  data: ForecastWeather;
}
interface ChartData {
    time: string;
    temp: number;
    feels_like: number;
  }

const HourlyForecast = ({data}: HourlyForecastProps) => {
    const chartData : ChartData[] = data.list
    .slice(0,8)
    .map((item)=>({
        time:format(new Date(item.dt*1000),'ha'),
        temp:Math.round(item.main.temp),
        feels_like:Math.round(item.main.feels_like)
    }))
  return (
    <Card className="">
      <CardHeader>
        <CardTitle>Today's Temperature</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[200px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={chartData}>
              <XAxis
                dataKey="time"
                stroke="#888888"
                fontSize={12}
                tickLine={false}
                axisLine={false}
              />
              <YAxis
                dataKey="temp"
                stroke="#888888"
                fontSize={12}
                tickFormatter={(value) => `${value}°`}
                axisLine={false}
              />
              <Tooltip />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default HourlyForecast;
