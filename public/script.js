const get_date = document.getElementById("date");

const day = () => {
    const array_day = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const obj = new Date();
    let result = array_day[obj.getDay()];

    return result;
};

const month = () => {
    const array_month = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];
    const obj = new Date();
    let result_1 = array_month[obj.getMonth()];
    let result_2 = obj.getDate();
    return `${result_2} ${result_1}`;
};

const time = () => {
    const obj = new Date();
    let hours = obj.getHours();
    let mins = obj.getMinutes();

    let period = "AM";
    if (hours >= 12) {
        period = "PM";
        if (hours > 12) {
            hours = hours - 12;
        }
    }
    else if (hours == 0) {
        hours = 12;
    }
    if (hours < 10) {
        hours = "0" + hours;
    }
    if (mins < 10) {
        mins = "0" + mins;
    }

    return `${hours}:${mins} ${period}`
};

get_date.innerHTML = day() + " |" + month() + " |" + time();

// getting api

const api = (city) => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=460bf4f40f97fa431ae191303633c08d&units=metric`)
    .then(res => {
        if (!res.ok) {
            throw new Error("City not found");
        }
        return res.json();
    })
        .then((data) => {
            console.log(data);
             

            const temp = document.getElementById("temp_c");
            const min_temp = document.getElementById("min_temp_c");
            const max_temp = document.getElementById("max_temp_c");
            const humidity = document.getElementById("humidity");
            const wind_speed_data = document.getElementById("wind_speed_data");
            const sky=document.getElementById("sky");


            temp.innerHTML = data.main.temp;
            min_temp.innerHTML = data.main.temp_min;
            max_temp.innerHTML = data.main.temp_max;
            humidity.innerHTML = data.main.humidity;
            wind_speed_data.innerHTML = data.wind.speed;
            sky.innerHTML=data.weather[0].main;

            const pic = document.getElementById("weather_icon");
            const weather_icon=data.weather[0].icon;
             pic.src = `https://openweathermap.org/img/wn/${weather_icon}@2x.png`;

        })
        .catch(error => {
            console.error("error in fetching weather data" + error);
            if (error.message === "City not found") {
                alert("Please enter a valid city.");
            } else {
                alert("Error fetching weather data. Please try again later.");
            }
        });
}
const button = document.getElementById("submit");
button.addEventListener("click", (e) => {
    e.preventDefault();
    const city = document.getElementById("search_location").value;
    if(city){
        api(city);
    } else{
        alert("Please enter a valid city");
    }
    
});


