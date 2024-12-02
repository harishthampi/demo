import CurrentWeatherCard from "@/components/CurrentWeatherCard";
import HourlyForecast from "@/components/HourlyForecast";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import WeatherSkelton from "@/components/weatherSkelton";
import { useGeolocation } from "@/hooks/use-geolocation";
import {
  useForecast,
  useReverseGeocode,
  useWeather,
} from "@/hooks/use-weather";
import { AlertTriangle, MapPin, RefreshCw } from "lucide-react";

const WeatherDashboard = () => {
  const {
    Coordinates,
    error: locationError,
    getGeoLocation,
    isLoading: locationLoading,
  } = useGeolocation();


  const handleRefresh = () =>{
    getGeoLocation();
    if(Coordinates){
      weatherQuery.refetch();
      forecastQuery.refetch();
      locationQuery.refetch();
    }
  }
  const weatherQuery = useWeather(Coordinates);
  const forecastQuery = useForecast(Coordinates);
  const locationQuery = useReverseGeocode(Coordinates);
  console.log("weatherQuery-",weatherQuery.data);
  console.log("forecastQuery-",forecastQuery.data);
  console.log("locationQuery -",locationQuery .data);
  const locationName = locationQuery.data?.[0];
  if (locationLoading) {
    <WeatherSkelton />;
  }
  if (!weatherQuery.data || !forecastQuery.data) {
    return <WeatherSkelton />;
  }

  if (weatherQuery.error || forecastQuery.error) {
    return (
      <Alert variant="destructive">
        <AlertTriangle className="h-4 w-4" />
        <AlertTitle>Error</AlertTitle>
        <AlertDescription className="flex flex-col gap-4">
          <p>Failed to fetch weather data. Please try again.</p>
          <Button variant="outline" onClick={handleRefresh} className="w-fit">
            <RefreshCw className="mr-2 h-4 w-4" />
            Retry
          </Button>
        </AlertDescription>
      </Alert>
    );
  }
  if (locationError) {
    return (
      <Alert variant="destructive">
        <AlertTriangle className="h-4 w-4" />
        <AlertTitle>Error</AlertTitle>
        <AlertDescription className="flex flex-col gap-4">
          <p>{locationError}</p>
          <Button variant="outline" onClick={handleRefresh} className="w-fit">
            <MapPin className="mr-2 h-4 w-4" />
            Enable Location
          </Button>
        </AlertDescription>
      </Alert>
    );
  }
  if (!Coordinates) {
    return (
      <Alert>
        <MapPin className="h-4 w-4" />
        <AlertTitle>Location Required</AlertTitle>
        <AlertDescription className="flex flex-col gap-4">
          <p>Please enable location access to see your local weather.</p>
          <Button variant="outline" onClick={getGeoLocation} className="w-fit">
            <MapPin className="mr-2 h-4 w-4" />
            Enable Location
          </Button>
        </AlertDescription>
      </Alert>
    );
  }
  return (
  <div className="space-y-4">
    {/* FavoriteCity */}
      <div className="flex justify-between">
        <h1 className="font-bold tracking-tight text-xl">My Location</h1>
        <Button  variant="outline" size="icon"
        onClick={handleRefresh}
        disabled={weatherQuery.isFetching||forecastQuery.isFetching}>
          <RefreshCw className={`w-4 h-4 ${weatherQuery.isFetching?"animate-spin":""}`}/>
        </Button>
      </div>
      <div className="flex gap-2">
        <CurrentWeatherCard data={weatherQuery.data} locationName={locationName}/>
        <HourlyForecast data={forecastQuery.data} />
      </div>
  </div>
   )
};

export default WeatherDashboard;
