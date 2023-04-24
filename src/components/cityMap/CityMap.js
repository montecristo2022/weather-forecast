import React, { useEffect, useState } from "react";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

const CityMap = ({ cityName }) => {
  const [map, setMap] = useState(null);
  console.log(cityName);
  useEffect(() => {
    if (!map) {
      const initialMap = L.map("map").setView([0, 0], 5);
      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(initialMap);
      setMap(initialMap);
    }
  }, [map]);

  useEffect(() => {
    if (cityName && map) {
      fetch(
        `https://nominatim.openstreetmap.org/search?city=${cityName}&format=json&limit=1`
      )
        .then((response) => response.json())
        .then((data) => {
          if (data && data.length > 0) {
            const { lat, lon } = data[0];
            map.setView([lat, lon], 10);

            const apiKey = "734588c2699055204b9a6d7af7a03dcd";
            const weatherLayer = L.tileLayer(
              `https://{s}.tile.openweathermap.org/map/temp_new/{z}/{x}/{y}.png?appid=${apiKey}`,
              {
                maxZoom: 18,
                attribution:
                  'Weather data &copy; <a href="https://openweathermap.org/">OpenWeatherMap</a>',
                tileSize: 256,
                opacity: 0.5,
              }
            );
            map.eachLayer((layer) => {
              if (
                layer !==
                map.getPane().getElementsByClassName("leaflet-tile-pane")[0]
                  .firstChild
              ) {
                map.removeLayer(layer);
              }
            });
            weatherLayer.addTo(map);
          }
        })
        .catch((error) => {
          console.error("Error fetching city coordinates:", error);
        });
    }
  }, [cityName, map]);

  return (
    <div
      id="map"
      style={{
        height: "600px",
        width: "100%",
        marginBottom: "20px",
      }}
    ></div>
  );
};

export default CityMap;
