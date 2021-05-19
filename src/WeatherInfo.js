import React from "react"
import WeatherIcon from "./WeatherIcon"
import FormattedDate from "./FormattedDate"

export default function WeatherInfo (props){
    return (
        <div className="WeatherInfo">
            <h1>{props.data.city}</h1>
        <ul>
            <li>
                <FormattedDate date={props.data.date}/>
            </li>
            <li className="text-capitalize">
                {props.data.description}
            </li>
        </ul>
        <div className="row mt-3">
            <div className="col-6">
            <div className="clearfix">
            <div className="float-left">
              <WeatherIcon code={props.data.icon} />
            </div>

            <div className="float-left">
            <span className="temperature"><strong>{Math.round(props.data.temperature)}</strong></span>
                        <span className="unit">°C</span>
            </div>
          </div>
            </div>
            <div className="col-6">
                <ul>
                    <li>Humidity: {props.data.humidity}%</li>
                    <li>Wind: {props.data.wind}km/h</li>
                </ul>
            </div>
        </div></div>
    )
}