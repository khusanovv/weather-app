import "./App.css";
// import { useState } from "react"; 
// const api = {
//   key: "c4fb310c9d558e3592b116be9002b4a1",
//   base: "https://api.openweathermap.org/data/2.5/",
// };

function App() {
  // const [query, setQuery] = useState[""];
  // const [weather, setWeather] = useState[{}];

  // const search = (evt) => {
  //   if (evt.key === "Enter") {
  //     fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
  //       .then((res) => res.json())
  //       .then((result) => {
  //         setWeather(result);
  //         setQuery("");
  //         console.log(weather);
  //       });
  //   }
  // };
  // const options = {
  //   method: 'GET',
  //   headers: {
  //     'X-RapidAPI-Key': 'f6049895d7mshab176a5e6b17120p158ad2jsnc6bf4bdc0821',
  //     'X-RapidAPI-Host': 'weatherbit-v1-mashape.p.rapidapi.com'
  //   }
  // };
  
  fetch('https://api.openweathermap.org/data/2.5/weather?lat={41.2213}&lon={69.8597}&appid={c4fb310c9d558e3592b116be9002b4a1}')
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));

  const dateBuilder = (d) => {
    let months = [
      "January",
      "February ",
      " March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`;
  };
  return (
    <>
      <div className="app">
        <main>
          <div className="search-box">
            <input
              placeholder="Search..."
              type="text"
              className="search-bar"
              // onChange={(e) => setQuery(e.target.value)}
              // value={query}
              // onKeyPress={search}
            />
          </div>
          <div className="location-box">
            <div className="location">Tashkent</div>
            <div className="date">{dateBuilder(new Date())}</div>
          </div>
          <div className="weather-box">
            <div className="temp">
              15<sup>o</sup>C
            </div>
            <div className="weather">Sunny</div>
          </div>
        </main>
      </div>
    </>
  );
}

export default App;
