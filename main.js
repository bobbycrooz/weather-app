

function getWeatherInfo(cityID){
    var key = 'c15d4b899f51f22fda078a255baf5bee';
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+cityID+ '&APPID=' +key)
    .then(function(resp){
        return resp.json();
    })
    .then(function(data){
        drawWeather(data);
      
    })

}

window.onload = function(){
    getWeatherInfo('lagos')

}

function drawWeather(d){
    var cel = Math.round(parseFloat(d.main.temp)-273.15);
    var cloudID = d.weather[0].icon
    document.getElementById('discription').innerHTML=d.weather[0].description;
    document.getElementById('temp').innerHTML=cel+"&deg; C"
    document.getElementById('country').innerHTML=d.sys.country
    document.getElementById('name').innerHTML=d.name
    document.getElementById('cloudicon').src = "http://openweathermap.org/img/wn/"+cloudID+"@2x.png"


    
}

function show(){
    var query = document.getElementById('gsearch').value;
    getWeatherInfo(query)
    
}