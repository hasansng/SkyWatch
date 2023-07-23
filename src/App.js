import React, { useRef, useEffect, useState } from "react";
import { Highlights, Sidebar } from "./components";

//Service component for get weather data
import { getAllWeather } from "./Services/Service";

//Context component for ContextAPI
import { Context } from "./Context/Context";

const App = () => {
  const [weather, setWeather] = useState({});
  const [loading, setLoading] = useState(true);
  const [weekday, setWeekday] = useState("");
  const [icon, setIcon] = useState("assets/img/icon/icon.png");
  const locationRef = useRef();

  const date = new Date();
  const day = date.getDay();

  useEffect(() => {
    switch (day) {
      case 0:
        setWeekday("Saturday");
        break;
      case 1:
        setWeekday("Sunday");
        break;
      case 2:
        setWeekday("Monday");
        break;
      case 3:
        setWeekday("Tuesday");
        break;
      case 4:
        setWeekday("Wednesday");
        break;
      case 5:
        setWeekday("Thursday");
        break;
      case 6:
        setWeekday("Friday");
        break;
      default:
        setWeekday("Saturday");
        break;
    }
  }, []);

  const searchLocation = async () => {
    try {
      const { data } = await getAllWeather(locationRef.current.value);
      setWeather(data);

      let desc = weather.weather[0].description;
      if (desc === "clear sky" && date.getHours() > 6 && date.getHours() < 19) {
        setIcon("assets/img/icon/sunny.png");
      }
      if (
        desc === "clear sky" &&
        (date.getHours() > 19) | (date.getHours() < 6)
      ) {
        setIcon("assets/img/icon/moon.png");
      }
      if (
        desc === "few clouds" &&
        date.getHours() > 6 &&
        date.getHours() < 19
      ) {
        setIcon("assets/img/icon/sunny-cloud.png");
      }
      if (
        desc === "few clouds" &&
        (date.getHours() > 19) | (date.getHours() < 6)
      ) {
        setIcon("assets/img/icon/few-clouds.png");
      }
      if (
        desc === "broken clouds" &&
        date.getHours() > 6 &&
        date.getHours() < 19
      ) {
        setIcon("assets/img/icon/short-cloud.png");
      }
      if (
        desc === "broken clouds" &&
        (date.getHours() > 19) | (date.getHours() < 6)
      ) {
        setIcon("assets/img/icon/moon.png");
      }
      if (
        desc === "broken clouds" &&
        date.getHours() > 6 &&
        date.getHours() < 19
      ) {
        setIcon("assets/img/icon/short-cloud.png");
      }
      if (
        desc === "broken clouds" &&
        (date.getHours() > 19) | (date.getHours() < 6)
      ) {
        setIcon("assets/img/icon/moon.png");
      }

      if (
        desc === "scattered clouds" &&
        date.getHours() > 6 &&
        date.getHours() < 19
      ) {
        setIcon("assets/img/icon/sunny-cloud.png");
      }
      if (
        desc === "scattered clouds" &&
        (date.getHours() > 19) | (date.getHours() < 6)
      ) {
        setIcon("assets/img/icon/few-clouds.png");
      }
      setLoading(false);
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <Context.Provider
      value={{
        loading,
        weather,
        location: locationRef,
        search: searchLocation,
        icon,
        weekday,
        date,
      }}
    >
      <div className="app d-flex">
        <Sidebar />
        <Highlights />
      </div>
    </Context.Provider>
  );
};

export default App;
