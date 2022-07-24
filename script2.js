latvalue=28.6667;
lonvalue=77.2167;
let weather1 = {
    apiKey: apiKey: " ",//Insert your Api key within quotes 
    fetchTime: function (city) {
      setInterval(async()=>{
      fetch(
        " https://api.timezonedb.com/v2.1/get-time-zone?key="+this.apiKey+"&by=position&lat="+latvalue+"&lng="+lonvalue+"&format=json"
      )
        .then((response) => {
          if (!response.ok) {
            alert("No time found.");
            throw new Error("No time found.");
          }
          return response.json();
        })
        .then((data) => this.displayTime(data));},1000)
    },
    displayTime:function (data) {
     
      const { formatted} = data;
      document.querySelector(".time").innerText = formatted.substring(0,10);
      document.querySelector(".date").innerText=formatted.substring(11,20);
      


    },
    search: function () {
      this.fetchTime(document.querySelector(".search-bar").value);
    },
  };
  
  document.querySelector(".search button").addEventListener("click", function () {
    weather1.search();
  });
  
  document
    .querySelector(".search-bar")
    .addEventListener("keyup", function (event) {
      if (event.key == "Enter") {
        weather1.search();
      }
    });
  
weather1.fetchTime("Delhi");

 

