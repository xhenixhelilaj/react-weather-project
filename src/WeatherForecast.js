import React,{ useState } from "react"
import "./WeatherForecast.css"
import WeatherForecastDay from"./WeatherForecastDay"
import axios from "axios";


export default function WeatherForecast(props){
    const [loaded, setLoaded] = useState(false)
    const[forecast, setForecast] = useState(null)
    function handleResponse(response){
        console.log(props.coordinates)
        setForecast(response.data.daily)
        setLoaded(true)
    }
    
    if(loaded){
return(
        <div className="WeatherForecast">
           <div className="row">
               <div className="col">
               <WeatherForecastDay data={forecast[0]} />
               </div>
           </div>
        </div>
    )  
     
    }else{
         let apiKey="5f472b7acba333cd8a035ea85a0d4d4c";
      let lon=props.coordinates.lon
      let lat=props.coordinates.lat
      let apiUrl=`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`

      axios.get(apiUrl).then(handleResponse) 
      return null;
    }

}