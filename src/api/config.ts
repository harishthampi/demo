 export const API_CONFIG={
    BASE_URL:'https://api.openweathermap.org/data/2.5/',
    GEOCODING_URL:'https://api.openweathermap.org/geo/1.0/',
    API_KEY:import.meta.env.API_KEY,
    DEFAULT_PARAMS:{
        appid:import.meta.env.API_KEY,
        units:'metric'
    }
 }