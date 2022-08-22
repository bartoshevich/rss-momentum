
import langArr from './lang';




// const weatherError = document.querySelector('.weather-error');

const weatherIcon = document.querySelector('.weather-icon');
const temperature = document.querySelector('.temperature');
const weatherDescription = document.querySelector('.weather-description');
const wind = document.querySelector('.wind');
const humidity = document.querySelector('.humidity');
const cityInput = document.querySelector('.city');


 export async function getWeather() {


    let city;
    if (localStorage.getItem('city')) {
        cityInput.value = localStorage.getItem('city');
        city = localStorage.getItem('city');
    } else {
        city = 'Minsk'
        if (localStorage.getItem('lang') === 'en') {
            cityInput.value = 'Minsk';
        } else {
            cityInput.value = 'Менск';
        }
        
    }

   
    let lang;  
    if (localStorage.getItem('lang')) {
        lang = localStorage.getItem('lang');
    } else {
        lang = 'en';
    }


    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=en&appid=ef61ba002b45ac08867487114bd7c40b&units=metric`;
    const res = await fetch(url);
    const data = await res.json();
    // console.log(url);
    let code = `${data.cod}`;

    // console.log(code);

    

    if (code == 200) {

        // console.log('cod 200')
        if (document.querySelector('.weather-error')) {
            document.querySelector('.weather-error').textContent = '';
        }
        weatherIcon.className = 'weather-icon owf owf-3x';
        weatherIcon.classList.add(`owf-${data.weather[0].id}`);
        temperature.textContent = langArr['temp'][lang] + ' ' + Math.round(`${data.main.temp}`) + '°C';

        if (localStorage.getItem('lang') === 'by') {
            weatherDescription.textContent = '';
        } else {
            weatherDescription.textContent = data.weather[0].description;
        };
       

        wind.textContent = langArr['wind'][lang] + ' ' + Math.round(`${data.wind.speed}`) + langArr['ms'][lang];
        humidity.textContent = langArr['humidity'][lang] + ' ' + Math.round(`${data.main.humidity}`) + '%';
        // cityInput.value = `${data.name}`;
        setTimeout(getWeather, 3600000);
    } else {
        if (!document.querySelector('.weather-error')) {
            let weatherError = document.createElement('div');
            weatherError.classList.add('weather-error');
            document.querySelector('.weather').append(weatherError);
        }

        const weatherError = document.querySelector('.weather-error');
        if (localStorage.getItem('lang') === 'by') {
            weatherError.textContent = 'Няма інфармацыі. Калі ласка, спраўдзіце назву горада.';
        } else {
            weatherError.textContent = 'No information. Please check city name.';
        };


        wind.textContent = '';
        humidity.textContent = '';
        weatherDescription.textContent = '';
        temperature.textContent = '';
        weatherIcon.className = '';
    }


}


getWeather()


cityInput.addEventListener('change', () => {
   
    localStorage.removeItem('city');
    // let city = cityInput.value;
    localStorage.setItem('city', cityInput.value);
    getWeather();
});
