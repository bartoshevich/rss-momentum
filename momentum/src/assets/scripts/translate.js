import langArr from './lang';
import { getWeather} from './weather';
import { showTime} from './time';
import { showGreetings} from './greetingMessage';
import { getQuotes } from './getQuotes';

const belButton = document.getElementById('belButton');
const enButton = document.getElementById('engButton');

belButton.addEventListener('click', () => {
    enButton.classList.remove('button--active');
    if (!belButton.classList.contains('button--active')) {
        belButton.classList.add('button--active');
    }
    localStorage.setItem('lang', 'by');
    document.documentElement.lang = "be";
    translate();
})

enButton.addEventListener('click', () => {
    belButton.classList.remove('button--active');
    if (!enButton.classList.contains('button--active')) {
        enButton.classList.add('button--active');
    }
    localStorage.setItem('lang', 'en');
    document.documentElement.lang = "en";
    translate();
})

function translate() { 
    let lang = localStorage.getItem('lang');  
    for (let key in langArr) {
        
        let element = document.querySelector('.lng-' + key);
        if (element) {
            element.innerHTML = langArr[key][lang];
            
        }
    }
    
    document.querySelector('.lng-tags').placeholder = langArr['tags'][lang];
    if (document.querySelector('.weather-error')) {
        document.querySelector('.weather-error').textContent = langArr['weather-error'][lang];
    } 
    if (document.querySelector('.weather-description')) {
        document.querySelector('.weather-description').textContent = '';
    }
    if (document.querySelector('.name__input')) {
        document.querySelector('.name__input').placeholder = langArr['enter_name'][lang];
    } 
    
    getWeather();
    showTime();
    showGreetings();
    getQuotes();
}


window.addEventListener('DOMContentLoaded', () => {
    if (!localStorage.getItem('lang')) {
        localStorage.setItem('lang', 'en');
    }
    if (localStorage.getItem('lang') === 'en') {
        enButton.classList.add('button--active');
    }
    if (localStorage.getItem('lang') === 'by') {
        belButton.classList.add('button--active');
    }
    translate();
    
}); 