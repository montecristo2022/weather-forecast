import FiveDaysForecast from "../fiveDaysForecast/FiveDaysForecast.js";
import { Card, CardContent, CardHeader, Typography } from "@mui/material";
import { useEffect } from "react";
import "./mainContent.css";


function MainContent({ renderData }) {
  const makeCelsius = 273.15;

  useEffect(() => {
    if (renderData) {
      console.log(renderData);
    }
  }, [renderData]);

  if (!renderData) {
    return null;
  }

  const sunrise =
    renderData.sys?.sunrise &&
    new Date(renderData.sys.sunrise * 1000).toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
    });

  const sunset =
    renderData.sys?.sunset &&
    new Date(renderData.sys.sunset * 1000).toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
    });

  const date =
    renderData.dt &&
    new Date(renderData.dt * 1000).toLocaleDateString("en-US", {
      weekday: "long",
    });

  const time =
    renderData.dt &&
    new Date(renderData.dt * 1000).toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
    });

  return (
    <main className="main">
      <div className="weatherContainer">
        <Card className="weatherCard">
          <CardHeader title={`City: ${renderData.name}`} />
          <CardContent>
            <Typography className="cardText">
              Day of week: {date}
            </Typography>
            <Typography className="cardText">Time: {time}</Typography>
            <Typography className="cardText">
              Temperature:{" "}
              {Math.round(renderData.main.temp - makeCelsius)}&#8451;
            </Typography>
          </CardContent>
        </Card>

        <Card className="weatherCard">
          <CardHeader title="Sunrise and Sunset" />
          <CardContent>
            {sunrise && (
              <Typography className="cardText">Sunrise: {sunrise}</Typography>
            )}
            {sunset && (
              <Typography className="cardText">Sunset: {sunset}</Typography>
            )}
          </CardContent>
        </Card>

        <Card className="weatherCard">
          <CardHeader title="Weather Info" />
          <CardContent>
            <div className="weatherMainInfo">
              <Typography className="cardText">
                Weather: {renderData.weather[0].main}
              </Typography>
              <div className="weatherInfo">
                {/* <img
                  src={`http://openweathermap.org/img/w/${renderData.weather[0].icon}.png`}
                  alt={renderData.weather[0].description}
                /> */}
              </div>
            </div>
            <Typography className="cardText">
              Humidity: {renderData.main.humidity}%
            </Typography>
            <Typography className="cardText">
              Wind speed: {renderData.wind.speed} m/s
            </Typography>
          </CardContent>
        </Card>
      </div>
      <FiveDaysForecast renderData={renderData.name} />
    </main>
  );
}



export default MainContent;
