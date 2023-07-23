import { useContext, useEffect, useState } from "react";
import { Context } from "../Context/Context";
import "./Sidebar.css";

const Sidebar = () => {
  const { weather, location, loading, search, icon, weekday, date } =
    useContext(Context);

  if (loading) {
    return (
      <div className="sidebar">
        <div className="form d-flex align-items-center">
          <button className="search-btn" onClick={search}>
            <img
              src="/assets/img/icon/search.png"
              alt="Search ICON"
              width={30}
              height={30}
            />
          </button>
          <input
            name="location"
            type="text"
            ref={location}
            className="input"
            placeholder="Another Location"
            autoFocus={true}
          />
          <button className="target-btn">
            <img
              src="assets/img/icon/target.png"
              alt="Locatin | Target"
              width={22}
            />
          </button>
        </div>
        <img
          src={icon}
          alt="Weather | SkyWatch"
          className="weather-icon"
          width={260}
        />
        <h1 className="degree">00°</h1>
        <p className="date">
          {weekday}{" "}
          <span className="time">{`${date.getHours()} : ${date.getMinutes()}`}</span>
        </p>
        <hr className="line" />
        <div className="weather d-flex">
          <img src="assets/img/icon/cloud.png" alt="Weather" width={55} />
          <p>Cloud</p>
        </div>
        <div className="rain d-flex">
          <img src="assets/img/icon/rain.png" alt="Weather" width={40} />
          <p>Rain</p>
        </div>
        <div className="city-banner">
          <h3 className="city-name">SkyWatch</h3>
        </div>
      </div>
    );
  } else {
    return (
      <div className="sidebar">
        <div className="form d-flex align-items-center">
          <button className="search-btn" onClick={search}>
            <img
              src="assets/img/icon/search.png"
              alt="Search ICON"
              width={30}
              height={30}
            />
          </button>
          <input
            name="location"
            type="text"
            ref={location}
            className="input"
            placeholder="Another Location"
            autoFocus={true}
          />
          <button className="target-btn">
            <img
              src="assets/img/icon/target.png"
              alt="Locatin | Target"
              width={22}
            />
          </button>
        </div>
        <img
          // src={weather.weather[0].description.includes("scattered clouds") ? "assets/img/icon/icon2.png" : icon }
          // src={
          //   weather.weather[0].description.includes("scattered clouds")
          //     ? "assets/img/icon/icon2.png"
          //     : icon
          // }
          src={icon}
          alt="Weather | SkyWatch"
          className="weather-icon"
          width={260}
        />
        <h1 className="degree">
          {Math.floor((weather.main.temp.toFixed() - 32) / 1.8)}°
        </h1>
        <p className="date">
          {weekday}{" "}
          <span className="time">{`${date.getHours()} : ${date.getMinutes()}`}</span>
        </p>
        <hr className="line" />
        <div className="weather d-flex">
          <img src="assets/img/icon/cloud.png" alt="Weather" width={55} />
          <p>{weather.weather[0].description}</p>
        </div>
        <div className="rain d-flex">
          <img src="assets/img/icon/rain.png" alt="Weather" width={40} />
          <p>0%</p>
        </div>
        <div className="city-banner">
          <h3 className="city-name">{` ${weather.name} ,${weather.sys.country}`}</h3>
        </div>
      </div>
    );
  }
};

export default Sidebar;
