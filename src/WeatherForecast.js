import React,{ useState, useEffect } from "react"
import "./WeatherForecast.css"
import WeatherForecastDay from"./WeatherForecastDay"
import axios from "axios";


export default function WeatherForecast(props){
    const [loaded, setLoaded] = useState(false)
    const[forecast, setForecast] = useState(null)   
    
    useEffect(() => {
        setLoaded(false);
    }, [props.coordinates])

    function handleResponse(response){
        console.log(props.coordinates)
        setForecast(response.data.daily)
        setLoaded(true)
    }

    function load(){
      let apiKey="4b314f77d77d39ad00e3f1ae01186f3d";
      let lon=props.coordinates.lon
      let lat=props.coordinates.lat
      let apiUrl=`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`

      axios.get(apiUrl).then(handleResponse) 
    }


    
    if(loaded){
return(
        <div className="WeatherForecast">
           <div className="row">
               {forecast.map(function (dailyForecast, index) {
                   if (index < 6) {
                       return (
                           <div className="col" key="index">
                               <WeatherForecastDay data={dailyForecast} />
                          </div> 
                       );
                   }else{
                       return null;
                   }
               })}
               
           </div>
        </div>
    )  
     
    }else{
         load()
      return null;
    }

}