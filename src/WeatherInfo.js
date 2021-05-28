import React from "react"
import WeatherIcon from "./WeatherIcon"
import FormattedDate from "./FormattedDate"
import WeatherTemperature from "./WeatherTemperature"
import "./WeatherInfo.css"

export default function WeatherInfo(props){
    return (
        <div className="WeatherInfo">
               <h2>{props.data.city}</h2>
                  <ul>
                      <li>
                        <FormattedDate date={props.data.date}/>
                        </li>
                    </ul>
                    <div className="row mt-3">
                         <div className="col-6">
                             <WeatherIcon code={props.data.icon} size={139} />
                             </div>       
                            <div className="col-6">
                                <WeatherTemperature celsius={props.data.temperature} />
                                </div>
                    </div>
                <ul>
                  <li className="text-capitalize">
                 {props.data.description}
                  </li>
               </ul>
                   <div className="wind">Humidity: {props.data.humidity}%|Wind: {props.data.wind}km/h</div>
                   <hr />
        </div>           

    )
}