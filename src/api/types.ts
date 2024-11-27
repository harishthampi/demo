export interface Coordinates{
    lat:number;
    lon:number;
}
export interface WeatherCondition{
    id:number;
    main:string;
    description:string;
    icon:string;
}
export interface CurrentWeather {
    coord:Coordinates;
    weather:WeatherCondition[];
    main:{
        temp:number;
        feels_like:number;
        temp_min:number;
        temp_max:number;
        pressure:number;
        humidity:number;
    };
    wind:{
        speed:number;
        deg:number;
    };
    dt:number;
    sys:{
        country:string;
        sunrise:number;
        sunset:number;
    };
}

export interface ForecastWeather{
    list:Array<{
        dt:number;
        main:CurrentWeather['main'];
        weather:WeatherCondition[];
        wind:CurrentWeather['wind'];
        dt_txt: string;
    }>;
    city:{
        name:string;
        country:string;
        sunrise:number;
        sunset:number;
    }
}

export interface geoLocation{
    name:string;
    lat:number;
    lon:number;
    country:string;
    state?:string;
}