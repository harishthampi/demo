import { Coordinates } from "@/api/types";
import { useEffect, useState } from "react";
// Purpose of this hook - to get GeolocationCoordinates of the user's device.

export interface Geolocation {
    Coordinates: Coordinates|null;
    isLoading: boolean;
    error: string|null;
}
export function useGeolocation() {
// a useSate to store the current Location of the user's device.
    const[location,setLocation] = useState<Geolocation>({
        Coordinates:null,
        isLoading:true,
        error:null
    })
// a function inside the hook to get the Geolocation of the user's device.
    const getGeoLocation = () =>{
// if navigator.geolocation is not supported in the browser, then set the error message.
        if(!navigator.geolocation){
            setLocation({
                Coordinates:null,
                isLoading:false,
                error:'Geolocation is not supported in your browser'
            });
        }
// if navigator.geolocation is supported, then get the current position of the user's device.
        navigator.geolocation.getCurrentPosition((position) =>{
            setLocation({
                Coordinates:{
                    lat:position.coords.latitude,
                    lon:position.coords.longitude
                },
                error:null,
                isLoading:false
            })
        },
// if there is an error in getting the user's location, then set the error message.
        (error) => {
            let errorMessage:string;

            switch(error.code){
                case error.PERMISSION_DENIED:
                    errorMessage = 'User denied the request for Geolocation.';
                    break;  
                case error.POSITION_UNAVAILABLE:
                    errorMessage = 'Location information is unavailable.';
                    break;
                case error.TIMEOUT:
                    errorMessage = 'The request to get user location timed out.';
                    break;
                default:
                    errorMessage = 'An unknown error occurred.';
                    break;
            }
            setLocation({
                Coordinates:null,
                isLoading:false,
                error:errorMessage
            })
        },
        {
                enableHighAccuracy: true,
                timeout: 5000,
                maximumAge: 0,
        })
       
    }

    // useEffect to get the user's location when the component is mounted.
    useEffect(()=>{
        getGeoLocation();
    },[]);

    return{
        ...location,
        getGeoLocation
    }
}