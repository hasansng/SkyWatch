import axios from "axios";

export const getAllWeather = (city) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=287846b11348f8a3015884c2deb1ead9`;
  return axios.get(url)
};
