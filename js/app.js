// DO NOT show API KEY on your JS File //
const API_KEY = `70d1720cff3cbedf9b0e09b4e9ba46e4`;

const loadTemperature = city => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    fetch(url)
        .then(res => res.json())
        .then(data => displayTemperature(data))
}

const displayTemperature = (temp) => {
    const temperature = document.getElementById('temp');
    temperature.innerText = temp.main.temp;
    const city = document.getElementById('city');
    city.innerText = temp.name;
    const weather = document.getElementById('weather');
    weather.innerText = temp.weather[0].main;
}

document.getElementById('btn-search').addEventListener('click', function() {
    const searchField = document.getElementById('search-field');
    const city = searchField.value;
    loadTemperature(city);
})

loadTemperature('dhaka');