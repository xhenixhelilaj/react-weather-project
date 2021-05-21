import React,{useState} from "react"
import WeatherInfo from "./WeatherInfo"
import axios from "axios"
import "./Weather.css"
import WeatherForecast from "./WeatherForecast"


export default function Weather(props){
    const [weatherData, setWeatherData] = useState({ready: false})
    const [city, setCity] = useState(props.defaultCity)
    function handleResponse(response){
        console.log(response.data);
        setWeatherData({
            ready: true,
            coordinates: response.data.coord,
            date: new Date(response.data.dt*1000),
            temperature: response.data.main.temp,
            wind: response.data.wind.speed,
            city: response.data.name,
            description: response.data.weather[0].description,
            icon: response.data.weather[0].icon,
            humidity: response.data.main.humidity,

        })
    }

    function search(){
        const apiKey = "4b314f77d77d39ad00e3f1ae01186f3d"        
        let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
        axios.get(apiUrl).then(handleResponse)
    }

    function handleSubmit(event){
        event.preventDefault()
        search();
    }

    function handleCityChange(event){
        setCity(event.target.value)
    }
    
    if(weatherData.ready){ 
      return(
        <div className="Weather">
            <form onSubmit={handleSubmit}>
                <div className="row">
                   <div className="col-9">
                     <input type="search" placeholder="Enter a city" autoFocus="on" className="form-control" onChange={handleCityChange} />
                </div>
                <div className="col-3">
                     <input type="submit" value="Search" className="btn btn-primary w-100"/>
                </div> 
                </div>  
            </form>
            <WeatherInfo data={weatherData}/>
            <WeatherForecast coordinates={weatherData.coordinates}/>

        </div>
    )}else{
        search()
    return "Loading..."

    }


}