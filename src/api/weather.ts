import { API_CONFIG } from "./config";
import { Coordinates, CurrentWeather, ForecastWeather, geoLocation } from "./types";

class Weather{

    private createUrl(endpoint:string,params:Record<string,string|number>){
        const searchParams = new URLSearchParams({
            ...params,
            appid:API_CONFIG.API_KEY
        });
        return `${endpoint}?${searchParams.toString}`
    }

    private async fetchData<T>(url:string):Promise<T>{
        const response = await fetch(url);
        if(!response.ok){
            throw new Error(`Weather API Error : ${response.statusText}`);
        }
        return response.json();
    }
    async getCurrentData({lat,lon}:Coordinates):Promise<CurrentWeather>{
        const url = this.createUrl(`${API_CONFIG.BASE_URL}/weather`,{
            lat:lat,
            lon:lon,
            units:'metric'
        });
        return this.fetchData<CurrentWeather>(url);
    }
    async getForecastData({lat,lon}:Coordinates):Promise<ForecastWeather>{
        const url = this.createUrl(`${API_CONFIG.BASE_URL}/forecast`,{
            lat:lat,
            lon:lon,
            units:'metric'
        })
        return this.fetchData<ForecastWeather>(url);
    }
    async getGeoLocation({lat,lon}:Coordinates):Promise<geoLocation[]>{
        const url = this.createUrl(`${API_CONFIG.GEOCODING_URL}/reverse`,{
            lat:lat,
            lon:lon,
            limit:1
        });
        return this.fetchData<geoLocation[]>(url);
    }
}

export const weatherAPI = new Weather();