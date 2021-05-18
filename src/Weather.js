import React,{useState} from "react"
import axios from "axios"
import "./Weather.css"

export default function Weather(){
    const [weatherData, setWeatherData] = useState({ready: false})
    function handleResponse(response){
        console.log(response.data);
        setWeatherData({
            ready: true,
            temperature: response.data.main.temp,
            wind: 12,
            city: response.data.name,
            description: response.data.weather[0].description,
            iconUrl: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
            humidity: response.data.main.humidity,

        })
    }

    
    if(weatherData.ready){ 
      return(
        <div className="Weather">
            <form>
                <div className="row">
                   <div className="col-9">
                     <input type="search" placeholder="Enter a city" autoFocus="on" className="form-control" />
                </div>
                <div className="col-3">
                     <input type="submit" value="Search" className="btn btn-primary w-100"/>
                </div> 
                </div>  
            </form>
            <h1>{weatherData.city}</h1>
            <ul>
                <li>
                    Monday 11:40
                </li>
                <li className="text-capitalize">
                    {weatherData.description}
                </li>
            </ul>
            <div className="row mt-3">
                <div className="col-6">
                    <div className="clearfix">
                        <img src={weatherData.iconUrl} alt="cloudy"/>
                        <span className="temperature"><strong>{Math.round(weatherData.temperature)}</strong></span>
                        <span className="unit">°C</span>
                    </div>  
                </div>
                <div className="col-6">
                    <ul>
                        <li>Humidity: {weatherData.humidity}%</li>
                        <li>Wind: {weatherData.wind}km/h</li>
                    </ul>
                </div>
            </div>
        </div>
    )}else{
    const apiKey = "5f472b7acba333cd8a035ea85a0d4d4c"
    let city = "Zurich"
    let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    axios.get(apiUrl).then(handleResponse)

    return "Loading..."

    }


}