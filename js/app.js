const API_KEY = "df1f1e0c2e624ec2b9b144536242303";


let search = () => {
    let value = document.getElementById("search-bar").value;

    let url = `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${value}&days=3`;
    fetch(url).
        then(res => res.json()).
        then(data => {
            console.log(data);
            setWeatherDeatils(data);
            //setForecast(data);
            //changeColor();
        })
}
function setWeatherDeatils(data){
    document.getElementById("city-name").innerHTML = data.location.name;
    document.getElementById("state-country-name").innerHTML = data.location.country;
    document.getElementById("temp").innerHTML = data.current.temp_c + `&deg;C`;
    document.getElementById("condition").innerHTML = data.current.condition.text;
    document.getElementById("feels-like").innerHTML = data.current.feelslike_c;
    //document.querySelector(".weather-condition-img").src = data.current.condition.icon;
    document.getElementById("humidity").innerHTML = data.current.humidity + "%";
    document.getElementById("uv").innerHTML = data.current.uv + "%";
    document.getElementById("wind-speed").innerHTML = data.current.wind_mph + " mph";
    document.getElementById("pressure").innerHTML = data.current.pressure_in + " in";
}
function setForecastDetails(data){
    document.getElementById("temp-day1").innerHTML = data.forecast.forecastday[0].day.avgtemp_c + `°C`;
    document.getElementById("temp-day2").innerHTML = data.forecast.forecastday[1].day.avgtemp_c + `°C`;
    document.getElementById("temp-day3").innerHTML = data.forecast.forecastday[2].day.avgtemp_c + `°C`;


    document.getElementById("state-country-name").innerHTML = data.location.country;
    document.getElementById("temp").innerHTML = data.current.temp_c + `&deg;C`;
    document.getElementById("condition").innerHTML = data.current.condition.text;
    document.getElementById("feels-like").innerHTML = data.current.feelslike_c;

}