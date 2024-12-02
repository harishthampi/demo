import { Coordinates } from "@/api/types";
import { weatherAPI } from "@/api/weather";
import { useQuery } from "@tanstack/react-query";
const WEATHER_KEY = {
     weather:(Coords:Coordinates) => ['weather',Coords] as const ,
     forecast:(Coords:Coordinates) => ['forecast',Coords] as const,
    reverseGeocode:(Coords:Coordinates) => ['reverseGeocode',Coords] as const
}

export function useWeather(coordinates:Coordinates|null){
   return useQuery({
    queryKey:WEATHER_KEY.weather(coordinates ?? {lat:0,lon:0}),
    queryFn:() => coordinates?weatherAPI.getCurrentData(coordinates):null,
   }) 
}

export function useForecast(coordinates:Coordinates|null){
    return useQuery({
     queryKey:WEATHER_KEY.forecast(coordinates ?? {lat:0,lon:0}),
     queryFn:() => coordinates?weatherAPI.getForecastData(coordinates):null,
    }) 
}

export function useReverseGeocode(coordinates:Coordinates|null){
    return useQuery({
     queryKey:WEATHER_KEY.reverseGeocode(coordinates ?? {lat:0,lon:0}),
     queryFn:() => coordinates?weatherAPI.getReverseLocation(coordinates):null,
    }) 
 }