import React from "react"

export default function Weather(){
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
            <h1>Zurich</h1>
            <ul>
                <li>
                    Monday 11:40
                </li>
                <li>
                    Cloudy
                </li>
            </ul>
            <div className="row mt-3">
                <div className="col-6">
                    <div className="clearfix">
                        <img src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png" alt="cloudy"/>
                        <span className="temperature"><strong>6</strong></span>
                        <span className="unit">°C</span>
                    </div>  
                </div>
                <div className="col-6">
                    <ul>
                        <li>Humidity: 77%</li>
                        <li>Wind: 14km/h</li>
                    </ul>
                </div>
            </div>
        </div>
    )

}