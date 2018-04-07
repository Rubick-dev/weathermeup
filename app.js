const API_KEY = "";

function getWeather() { 
  $.ajax({
    url: 'https://fcc-weather-api.glitch.me/',
    type: 'GET',
    data: {},
    dataType:'json',
    success: function(data) { 

    },
    error: function(err) { alert(err); },
    beforeSend: function(xhr) {
    xhr.setRequestHeader("", API_Key);}
  });
}