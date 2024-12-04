import { CurrentWeather } from "@/api/types";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { format } from "date-fns";
import { Compass, Sunrise, Sunset } from "lucide-react";


interface WeatherDetailsProps {
    data: CurrentWeather;
}

export function WeatherDetails({data}:WeatherDetailsProps){
    const formatTime = (time:number) => {
        return format(new Date(time*1000),'hh:mm a');
    }
    const windDirection = (deg:number) => {
        const directions = ['N','NE','E','SE','S','SW','W','NW'];
        const index = Math.round(((deg%360) < 0 ? deg+360 :deg)/45)%8;
        return directions[index];
    }
    const details = [
        {
            title:'Sunrise',
            value:formatTime(data.sys.sunrise),
            icon:Sunrise,
            color:'text-orange-500'
        },
        {
            title:'Sunset',
            value:formatTime(data.sys.sunset),
            icon:Sunset,
            color:'text-blue-500'
        },
        {
            title:'Pressure',
            value:`${data.main.pressure}mph`,
            icon:Compass,
            color:'text-purple-500'
        },
        {
            title:'Wind Direction',
            value:`${data.wind.speed}m/s ${windDirection(data.wind.deg)}` ,
            icon:Compass,
            color:'text-purple-500'
        }
    ]
    return(
    <Card>
  <CardHeader>
    <CardTitle>Weather Details</CardTitle>
  </CardHeader>
  <CardContent className="grid sm:grid-cols-2 gap-6">
    {
        details.map((detail)=>(
            <div key={detail.title} className="flex items-center gap-3 border rounded-lg p-4">
                <detail.icon className={`h-6 w-6 ${detail.color}`}/>
                <div>
                    <p className="text-sm font-medium">{detail.title}</p>
                    <p className="text-sm text-muted-foreground">{detail.value}</p>
                </div>
            </div>
        ))
    }
  </CardContent>
</Card>
)
}