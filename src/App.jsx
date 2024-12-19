// import React from 'react'
// import { useState } from 'react'
// import axios from 'axios'
// import './App.css'

// const App = ()=> {
//   const [city, setcity] = useState("");
//   const [weather,setweather] = useState("");
//   const [error,seterror] = useState("");


//   const fetchWeather = async () => {
//     const API_KEY = "";
//     const Url = "";

//     try{
//       const response = await axios.get(Url);
//       setweather(response.data)
//       seterror("");
//     }
//      catch(err){
//       seterror("City not found, please try Again !!")
//       setweather(null);
//      }
//   }

//   return (
//       <div className='weather-app'>
//         <div className='container'>
//           <h1 className='title'>Weather App</h1>
//           <div className='search-box'>
//             <input type="text" placeholder='Enter city Name...' value={city} onChange={(e)=> setcity(e.target.value)}/>
//             <button onClick={fetchWeather}>search</button>
//           </div>
//           {error && <p className='error'>{error}</p>}
//           {weather &&(

//             <div className='weather-card'>
//               <h2>{weather.name}</h2>
//               <h3>{weather.weather[0].main}</h3>
//               <img src="" alt="" />
//               <p>{weather.main.temp}</p>
//               <small>
//                 Feels like : {weather.main.feels_like} c | Humidity : {" "}
//                 {weather.main.humidity} %
//               </small>
//               </div>

//           )}

//         </div>

//       </div>
     
//   )
// }

// export default App

// import React, { useState } from "react";
// import axios from "axios";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "./App.css";

// const App = () => {
//   const [city, setCity] = useState("");
//   const [weather, setWeather] = useState(null);
//   const [error, setError] = useState("");

//   const fetchWeather = async () => {
//     const API_KEY = "5fe36b192ffd1c36dffb6752bc1722b2";
//     const Url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

//     try {
//       const response = await axios.get(Url);
//       setWeather(response.data);
//       setError("");
//     } catch (err) {
//       setError("City not found, please try again!");
//       setWeather(null);
//     }
//   };

//   return (
//     <div className="weather-app py-5">
//       <div className="container">
//         <h1 className="text-center mb-4">Weather App</h1>
//         <div className="row justify-content-center">
//           <div className="col-md-6">
//             <div className="input-group mb-3">
//               <input
//                 type="text"
//                 className="form-control"
//                 placeholder="Enter city name..."
//                 value={city}
//                 onChange={(e) => setCity(e.target.value)}
//               />
//               <button
//                 className="btn btn-primary"
//                 onClick={fetchWeather}
//                 disabled={!city.trim()}
//               >
//                 Search
//               </button>
//             </div>
//           </div>
//         </div>

//         {error && (
//           <div className="alert alert-danger text-center" role="alert">
//             {error}
//           </div>
//         )}

//         {weather && (
//           <div className="card mx-auto mt-4" style={{ maxWidth: "500px" }}>
//             <div className="card-body text-center">
//               <h2 className="card-title">{weather.name}</h2>
//               <h3 className="text-muted">{weather.weather[0].main}</h3>
//               <img
//                 src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
//                 alt={weather.weather[0].description}
//                 className="mb-3"
//               />
//               <h4>{weather.main.temp}°C</h4>
//               <p className="text-muted mb-0">
//                 Feels like: {weather.main.feels_like}°C | Humidity:{" "}
//                 {weather.main.humidity}%
//               </p>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default App;

import React, { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

const App = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");

  const fetchWeather = async () => {
    const API_KEY = "5fe36b192ffd1c36dffb6752bc1722b2";
    const Url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

    try {
      const response = await axios.get(Url);
      setWeather(response.data);
      setError("");
    } catch (err) {
      setError("City not found, please try again!");
      setWeather(null);
    }
  };

  return (
    <div className=" container weather-app d-flex align-items-center justify-content-center">
      <div className="container text-center">
        <h1 className="mb-4 text-white display-4">Weather App</h1>
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Enter city name..."
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
              <button
                className=" btn btn-secondary rounded-2 ms-3"
                onClick={fetchWeather}
                disabled={!city.trim()}
              >
                Search
              </button>
            </div>
          </div>
        </div>

        {error && (
          <div className="alert alert-danger" role="alert">
            {error}
          </div>
        )}

        {weather && (
          <div className="card weather-card mx-auto mt-4">
            <div className="card-body">
              <h2 className="card-title">{weather.name}</h2>
              <h3 className="text-muted">{weather.weather[0].main}</h3>
              <img
                src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                alt={weather.weather[0].description}
              />
              <h4 className="mt-2">{weather.main.temp}°C</h4>
              <p>
                Feels like: {weather.main.feels_like}°C | Humidity:{" "}
                {weather.main.humidity}%
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;


