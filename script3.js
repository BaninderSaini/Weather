var any;
let weather2 = {
    apiKey: apiKey: " ",//Insert your Api key within quotes 
    fetchWeatherExtra: function (city) {
      fetch(
        "https://api.openweathermap.org/data/2.5/forecast?q="+city+"&appid="+this.apiKey+"&units=metric&exclude=hourly"
      )
        .then((response) => {
          if (!response.ok) {
            alert("No weather found.");
            throw new Error("No weather found.");
          }
          return response.json();
        })
        .then((data) => this.displayWeatherExtra(data));
    },
    displayWeatherExtra: function (data) {
      
      for(var i=0;i<=5;i++)
      {const {temp}=data.list[i].main;
      const {icon}=data.list[i].weather[0];
      const{dt_txt}=data.list[i];
     
      
      document.querySelectorAll(".img")[i].innerText =  dt_txt.substring(8,10)+dt_txt.substring(4,7)+"-"+dt_txt.substring(2,4)+"   |   "+dt_txt.substring(11,16);
      document.querySelectorAll(".data")[i].innerText =  temp+"°C";
      document.querySelectorAll(".icons")[i].src =
      "https://openweathermap.org/img/wn/" + icon + ".png";

    }
      
    
      
    },
    search: function () {
      this.fetchWeatherExtra(document.querySelector(".search-bar").value);
    },
  };
  
  document.querySelector(".search button").addEventListener("click", function () {
    weather2.search();
  });
  
  document
    .querySelector(".search-bar")
    .addEventListener("keyup", function (event) {
      if (event.key == "Enter") {
        weather2.search();
      }
    });
  
  weather2.fetchWeatherExtra("Delhi");

