import Notiflix from 'notiflix';

const ApiKey = '734588c2699055204b9a6d7af7a03dcd'

export const fetchData = async (location) => {
  try {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${ApiKey}`);
    
    if (!response.ok) {
      Notiflix.Report.failure('Error', `City ${location} is not exist`, 'Ok');
      return null;
    }

    const data = await response.json();
    return data;
  } catch (error) {
    Notiflix.Notify.failure("Error loading data. Check your internet connection");
    return null;
  }
};

export const fetchNextHours = async (location) => {
  try {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=${ApiKey}`);
    
    if (!response.ok) {
      Notiflix.Report.failure('Error', `City ${location} is not exist`, 'Ok');
      return null;
    }

    const data = await response.json();
    return data;
  } catch (error) {
    Notiflix.Notify.failure("Error loading data. Check your internet connection");
    return null;
  }
};










// export const fetchData = async (location) => {
//   try {
//     const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=734588c2699055204b9a6d7af7a03dcd`);
    
//     if (!response.ok) {
//       console.error(`Ошибка!!!: ${response.statusText}`);
//       return null;
//     }

//     const data = await response.json();
//     return data;
//   } catch (error) {
//     console.error("Ошибка при загрузке данных", error);
//     return null;
//   }
// };

// export const fetchNextHours = async (location) => {
//   try {
//     const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=734588c2699055204b9a6d7af7a03dcd`);
    
//     if (!response.ok) {
//       console.error(`Ошибка!!: ${response.statusText}`);
//       return null;
//     }

//     const data = await response.json();
//     return data;
//   } catch (error) {
//     console.error("Ошибка при загрузке данных", error);
//     return null;
//   }
// };













// export const fetchData = async (location) => {
//   const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=734588c2699055204b9a6d7af7a03dcd`);
//   const data = await response.json();
//   return data;
// };



// export const fetchNextHours = async (location) => {
//   const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=734588c2699055204b9a6d7af7a03dcd`);
//   const data = await response.json();
//   return data;
// };






























// import axios from "axios";

// export const fetchWeatherData = async (location) => {
//   const response = await axios.get(
//     `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=734588c2699055204b9a6d7af7a03dcd`
//   );
//   return response.data;
// };

// export const fetchNextHours = async (location) => {
//   const response = await axios.get(
//     `https://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=734588c2699055204b9a6d7af7a03dcd`
//   );
//   return response.data;
// };



// import axios from "axios";

// const weatherApiInstance = axios.create();

// // Удаление заголовка Authorization
// delete weatherApiInstance.defaults.headers.common["Authorization"];

// export const fetchWeatherData = async (location) => {
//   const response = await weatherApiInstance.get(
//     `https://api.allorigins.win/raw?url=https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=734588c2699055204b9a6d7af7a03dcd`
//   );
//   return response.data;
// };

// export const fetchNextHours = async (location) => {
//   const response = await weatherApiInstance.get(
//     `https://api.allorigins.win/raw?url=https://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=734588c2699055204b9a6d7af7a03dcd`
//   );
//   return response.data;
// };
