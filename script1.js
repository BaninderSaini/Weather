var lonvalue;
var latvalue;
let weather = {
    apiKey: "44fcc504c7f7714bf491d4c0714dedb7",
    fetchWeather: function (city) {
      fetch(
        "https://api.openweathermap.org/data/2.5/weather?q=" +
          city +
          "&units=metric&appid=" +
          this.apiKey
      )
        .then((response) => {
          if (!response.ok) {
            alert("No weather found.");
            throw new Error("No weather found.");
          }
          return response.json();
        })
        .then((data) => this.displayWeather(data));
    },
    displayWeather: function (data) {
      const { name } = data;
      const { icon, description } = data.weather[0];
      const {lon, lat}=data.coord;
     const{temp}=data.main;
      lonvalue=lon;
      latvalue=lat;
      document.querySelector(".placename").innerText =   name.toUpperCase();
      document.querySelector(".temp").innerText = temp+"°C";
      document.querySelector(".tempdesc").innerText =description;
      
      document.querySelector(".icon").src =
      "https://openweathermap.org/img/wn/" + icon + ".png";
      
    },
    search: function () {
      this.fetchWeather(document.querySelector(".search-bar").value);
    },
  };
  
  document.querySelector(".search button").addEventListener("click", function () {
    weather.search();
  });
  
  document
    .querySelector(".search-bar")
    .addEventListener("keyup", function (event) {
      if (event.key == "Enter") {
        weather.search();
      }
    });
  
  weather.fetchWeather("Delhi");

