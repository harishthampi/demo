import { CurrentWeather, geoLocation } from "@/api/types";
import { Card, CardContent } from "./ui/card";
import { ArrowDown, ArrowUp, Droplet, Wind } from "lucide-react";
interface CurrentWeatherProps {
  data: CurrentWeather;
  locationName?: geoLocation;
}

const CurrentWeatherCard = (data: CurrentWeatherProps) => {
  const tempFormat = (temp: number) => {
    return Math.round(temp);
  };
  return (
    <Card className="overflow-hidden">
      <CardContent className="p-6">
        <div className="grid md:grid-cols-2">
          <div className="space-y-4">
            <div className="space-y-2">
              <div className="flex items-end">
                <h2 className="text-xl tracking-tight font-bold">
                  {data.locationName?.name},
                </h2>
                {data.locationName?.state && (
                  <p className="text-muted-foreground text-sm">
                    {data.locationName?.state}
                  </p>
                )}
              </div>
              <p>{data.locationName?.country}</p>
            </div>

            <div className="flex items-center gap-2">
              <p className="text-7xl font-bold tracking-tighter">
                {tempFormat(data.data.main.temp)}°
              </p>
              <div className="space-y-1">
                <p className="text-muted-foreground">
                  Feels like {tempFormat(data.data.main.feels_like)}°
                </p>
                <div className="flex gap-2 text-sm font-medium">
                  <span className="flex items-center text-blue-500 gap-1">
                    <ArrowUp className="h-3 w-3" />
                    {tempFormat(data.data.main.temp_max)}
                  </span>
                  <span className="flex items-center gap-1 text-red-500">
                    <ArrowDown className="h-3 w-3" />
                    {tempFormat(data.data.main.temp_min)}
                  </span>
                </div>
              </div>
            </div>

            <div className="flex gap-10">
              <div className="flex items-center gap-2">
                <Droplet className="h-6 w-6 text-blue-500" />
                <div className="space-y-0.5">
                  <p className="text-sm font-medium">Humidity</p>
                  <p className="text-sm text-muted-foreground">
                    {data.data.main.humidity}%
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Wind className="h-6 w-6 text-blue-500" />
                <div  className="space-y-0.5">
                  <p>Wind Speed</p>
                  <p className="text-muted-foreground">
                    {data.data.wind.speed}m/s
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center">
            <div className="relative flex aspect-square w-full max-w-[200px] items-center justify-center">
              <img
                src={`https://openweathermap.org/img/wn/${data.data.weather[0].icon}@4x.png`}
                alt={data.data.weather[0].description}
                className="h-full w-full object-contain"
              />
              <div className="absolute bottom-0 text-center">
                <p className="text-sm font-bold capitalize">
                  {data.data.weather[0].description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CurrentWeatherCard;
