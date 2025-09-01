const apikey = "9f3316faa84c535a2279f7e8ede82ac5";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

let temp = document.querySelector(".temp");
let winddata = document.querySelector("#winddata")
let humiddata = document.querySelector("#humiddata");
let search = document.querySelector("#search");
let btn = document.querySelector(".box");
let icon = document.querySelector(".weathericon");
let clouddata = document.querySelector("#clouddata");
let countryicon = document.querySelector(".countryicon");
let visible = document.querySelector(".visible");
let hide = document.querySelector(".hide");
let hide2 = document.querySelector(".hide2");
let hide3 = document.querySelector(".hide3");
let body = document.querySelector(".body");
let bg = document.querySelector(".bg");

bg.classList.remove("bg");

async function cheakweather(city) {
    try {
        const response = await fetch(apiurl + city + `&appid=${apikey}`);
        var data = await response.json();
        console.log(data);
        visible.classList.remove("visible");
        hide.classList.remove("hide");
        hide2.classList.add("hide2");
        bg.classList.add("bg");
        hide3.classList.add("hide3");

        document.querySelector(".city").innerHTML = data.name;
        temp.innerHTML = Math.round(data.main.temp) + "°C";
        humiddata.innerHTML = data.main.humidity + "%";
        winddata.innerHTML = data.wind.speed + "Km/h";
        clouddata.innerHTML = data.clouds.all + "%";

      
        //weather icon

        if (data.weather[0].main == "Clouds") {
            icon.src = "cloudy.png";
        }
        else if (data.weather[0].main == "Rain") {
            icon.src = "rain.png";
        }
        else if (data.weather[0].main == "Haze") {
            icon.src = "haze.png";
           
        }
        else if (data.weather[0].main == "Clear") {
            icon.src = "clear.png";
            
        }
        else if (data.weather[0].main == "Mist") {
            icon.src = "mist.png";
           
        }

        //country flag

        if (data.sys.country == "IN") {
            countryicon.src = "india.png";
        }
        else if (data.sys.country == "PK") {
            countryicon.src = "pakistan.png";
        }
        else if (data.sys.country == "AU") {
            countryicon.src = "australia.png";
        }
        else if (data.sys.country == "US") {
            countryicon.src = "us.png";
        }
        else if (data.sys.country == "AE") {
            countryicon.src = "uae.png";
        }
        else if (data.sys.country == "NZ") {
            countryicon.src = "nz.png";
        }
        else if (data.sys.country == "IR") {
            countryicon.src = "iran.png";
        }
        else if (data.sys.country == "BD") {
            countryicon.src = "bangladesh.png";
        }
        else if (data.sys.country == "GB") {
            countryicon.src = "uk.png";
        }
        else if (data.sys.country == "LK") {
            countryicon.src = "lanka.png";
        }
        else if (data.sys.country == "CN") {
            countryicon.src = "china.png";
        }
        else if(data.sys.country == "JP"){
            countryicon.src = "japan.png"
        }  
        else if(data.sys.country == "FR" || data.sys.country == "CI"){
            countryicon.src = "france.png"
        }

    } catch (err) {
        console.log( err);
        
        hide2.classList.remove("hide2");
        visible.classList.add("visible");
        hide.classList.add("hide");
        
        bg.classList.remove("bg");
        hide3.classList.remove("hide3");
    }
}

btn.addEventListener("click", () => {
    cheakweather(search.value);
})
search.addEventListener('keydown', (event) => {
    if (event.key == 'Enter') {
        cheakweather(search.value);
    }
})