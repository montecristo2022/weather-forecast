import { fetchNextHours } from "../../Api/Api";
import { useEffect, useState } from "react";
import { Card, CardHeader, CardContent, Grid } from "@mui/material";
import "./hourlyWeather.css";

function HourlyWeather({ renderData }) {
  const [dataForRender, setDataForRender] = useState(null);

  useEffect(() => {
    const fetchWeatherDataAsync = async () => {
      const weatherData = await fetchNextHours(renderData);
      setDataForRender(weatherData);
    };
    fetchWeatherDataAsync();
  }, [renderData]);

  return (
    <>
      <h1>Next hours</h1>
      {dataForRender ? (
        <div className="forecastContainer">
          <Grid container spacing={3} justifyContent="center">
            {dataForRender.list.slice(0, 8).map((item) => (
              <Grid key={item.dt} item xs={12} sm={6} md={4} lg={3}>
                <Card className="forecastCard">
                  <CardHeader title={item.dt_txt} />
                  <CardContent>
                    <p>{item.weather[0].description}</p>
                    <img
                      className="forecastIcon"
                      src={`http://openweathermap.org/img/w/${item.weather[0].icon}.png`}
                      alt="weather icon"
                    />
                    <div className="temperature-info">
                      <div className="temperature-row">
                        <span>Temp max:</span>
                        <span className="temperature-value">
                          {Math.round(item.main.temp_max - 273.15)}°C
                        </span>
                      </div>
                      <div className="temperature-row">
                        <span>Temp min:</span>
                        <span className="temperature-value">
                          {Math.round(item.main.temp_min - 273.15)}°C
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </div>
      ) : null}
    </>
  );
}

export default HourlyWeather;
