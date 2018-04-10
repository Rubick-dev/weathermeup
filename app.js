$( document ).ready(function(){
  var latitude, longitude;
  var fTemp = 0;
  var temp = "Curent Temperature";
  const clickToggleButton = document.getElementById("tempTypeToggle");

  // Gather the latitude and longtitude of users current location or provide error message
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      latitude = "lat=" + position.coords.latitude;
      longitude = "&lon=" + position.coords.longitude;
      console.log(latitude + " " + longitude);
      getWeather(latitude, longitude);
    });
  } else {
      Alert('Geo Location is not enabled or setup correctly on this device');
  }

  var customURL = "https://fcc-weather-api.glitch.me/api/current?"
  function getWeather(latitude, longitude) { 
    let location = "City name - country name";
    let status = "Current Temp";
    let icon = "to be image URL";
    $.ajax({
      url: customURL + latitude + longitude,
      success: function(data) { 
        location = data.name + " - " + data.sys.country;
        temp = data.main.temp;
        icon = data.weather[0].icon;
        console.log(icon);
        document.getElementById("city").innerHTML = location;
        document.getElementById("temp").innerHTML = temp;
        document.getElementById("weatherIcon").src = icon;
        document.getElementById("weatherIcon").removeAttribute("height");
        document.getElementById("weatherIcon").removeAttribute("width");
        fTemp = Math.round((temp * (9/5)) + 32);
      },
   });
  }
  
  // Event Listener for toggling the Temp between Celsius and Fahrenheit
  clickToggleButton.addEventListener('click', function(){
    if(clickToggleButton.classList.contains("celsius")) {
      clickToggleButton.classList.add("fahrenheit");
      clickToggleButton.classList.remove("celsius");
      document.getElementById("temp").innerHTML = fTemp;
      document.getElementById("tempType").innerHTML = " °F";
    } else {
      clickToggleButton.classList.remove("fahrenheit");
      clickToggleButton.classList.add("celsius");
      document.getElementById("temp").innerHTML = temp;
      document.getElementById("tempType").innerHTML = " °C";
    }
  });

}); // End of Ready document