import { Coordinates } from "@/api/types";
import { weatherAPI } from "@/api/weather";
import { useQuery } from "@tanstack/react-query";
const WEATHER_KEY = {
     weather:(Coords:Coordinates) => ['weather',Coords] as const ,
     forecast:(Coords:Coordinates) => ['forecast',Coords] as const,
    reverseGeocode:(Coords:Coordinates) => ['reverseGeocode',Coords] as const
}

export function useWeather(coordinates:Coordinates){
   return useQuery({
    queryKey:WEATHER_KEY.weather(coordinates ?? {lat:0,lon:0}),
    queryFn:() => weatherAPI.getCurrentData(coordinates),
   }) 
}

export function useForecast(coordinates:Coordinates){
    return useQuery({
     queryKey:WEATHER_KEY.forecast(coordinates ?? {lat:0,lon:0}),
     queryFn:() => weatherAPI.getForecastData(coordinates),
    }) 
}

export function useReverseGeocode(coordinates:Coordinates){
    return useQuery({
     queryKey:WEATHER_KEY.reverseGeocode(coordinates ?? {lat:0,lon:0}),
     queryFn:() => weatherAPI.getGeoLocation(coordinates),
    }) 
 }