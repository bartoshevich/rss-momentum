
import { dateBel } from './time__by'

export function showTime() {
    const time = document.querySelector('.time');
    const date = new Date();
    let currentTime = date.toLocaleTimeString('ru-BY', { hour12: false });
    time.textContent = currentTime;

    const calendar = document.querySelector('.date');
    const options = {month: 'long', day: 'numeric', weekday: 'long'};
    let currentDate;
    if (localStorage.getItem('lang') === 'en') {
     currentDate = date.toLocaleDateString('en-US', options);
    } else {
    //  currentDate = date.toLocaleDateString('be-BY', options);
    //  console.log(date.toLocaleDateString(month));
    //  console.log(date.toLocaleDateString(day));
    //  console.log(date.toLocaleDateString(weekday));
     
     currentDate = dateBel();
    }

    
    calendar.textContent = currentDate; 




}
setInterval(showTime, 1000);
showTime();

