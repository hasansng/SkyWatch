import { useContext } from "react";
import { Context } from "../Context/Context";
import { Card } from "antd";
import "./Highlights.css";

const Highlights = () => {
  const { loading, weather } = useContext(Context);
  const data = [{}, {}, {}, {}, {}];

  if (loading) {
    return (
      <div className="highlights">
        <div className="header">
          <h1>Today's Highlights</h1>
          <img src="assets/img/logo/logo.png" alt="logo" />
        </div>
        <div className="box d-flex flex-wrap">
          {data.map((data) => (
            <Card
              style={{
                width: 270,
                height: 180,
                background: "#fff",
                border: "none",
                boxShadow: "0px 0px 26px 0px rgba(138, 122, 122, 0.3)",
                margin: 28,
              }}
              loading={loading}
            ></Card>
          ))}
        </div>
      </div>
    );
  } else {
    return (
      <div className="highlights">
        <div className="header">
          <h1>Today's Highlights</h1>
          <img src="assets/img/logo/logo.png" alt="logo" />
        </div>
        <div className="box d-flex flex-wrap">
        <div className="weather-card">
            <p className="title">Weather</p>
            <h1 className="value">{weather.weather[0].description}</h1>
          </div>

          <div className="weather-card">
            <p className="title">Wind status</p>
            <h1 className="value">{`${weather.wind.speed} km/h`}</h1>
          </div>

          <div className="weather-card">
            <p className="title">Humidity</p>
            <h1 className="value">{`${weather.main.humidity} %`}</h1>
          </div>

          <div className="weather-card">
            <p className="title">Pressure</p>
            <h1 className="value">{`${weather.main.pressure} mbar`}</h1>
          </div>
          
          <div className="weather-card">
            <p className="title">Rain</p>
            <h1 className="value">0mm</h1>
          </div>
        </div>
      </div>
    );
  }
};

export default Highlights;
