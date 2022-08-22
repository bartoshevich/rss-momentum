
const musicButton = document.querySelector('.music__button');
const weatherButton = document.querySelector('.weather__button');
const clockButton = document.querySelector('.clock__button');
const dateButton = document.querySelector('.date__button');
const greetingButton = document.querySelector('.greeting__button');
const quoteButton = document.querySelector('.quote__button');

const musicBlock = document.querySelector('.player');
const weatherBlock = document.querySelector('.weather');
const clockBlock = document.querySelector('.time');
const dateBlock = document.querySelector('.date');
const greetingBlock = document.querySelector('.message__block');
const quoteBlock = document.querySelector('.quote__block');


musicButton.addEventListener('click', () => {
    musicButton.classList.toggle('button--active');
    musicBlock.classList.toggle('visibility--hidden-2');
    if (musicBlock.classList.contains('visibility--hidden-2')) {
        localStorage.setItem('musicBlockStatus', 'hidden');               
    } else {
        localStorage.setItem('musicBlockStatus', 'visible');
    }  
})


window.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('musicBlockStatus') === 'hidden') {
        musicBlock.classList.add('visibility--hidden-2');
        musicButton.classList.remove('button--active');
    }
}); 



/**************
 * weather
 *******/
weatherButton.addEventListener('click', () => {
    weatherButton.classList.toggle('button--active');
    weatherBlock.classList.toggle('visibility--hidden-2');
    if (weatherBlock.classList.contains('visibility--hidden-2')) {
        localStorage.setItem('weatherBlockStatus', 'hidden');               
    } else {
        localStorage.setItem('weatherBlockStatus', 'visible');
    }  
})


window.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('weatherBlockStatus') === 'hidden') {
        weatherBlock.classList.add('visibility--hidden-2');
        weatherButton.classList.remove('button--active');
    }
})





/**************
 * Clock
 *******/
 clockButton.addEventListener('click', () => {
    clockButton.classList.toggle('button--active');
    clockBlock.classList.toggle('visibility--hidden-2');
    if (clockBlock.classList.contains('visibility--hidden-2')) {
        localStorage.setItem('clockBlockStatus', 'hidden');               
    } else {
        localStorage.setItem('clockBlockStatus', 'visible');
    }  
})


window.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('clockBlockStatus') === 'hidden') {
        clockBlock.classList.add('visibility--hidden-2');
        clockButton.classList.remove('button--active');
    }
}); 


/**************
 * Date
 *******/
 dateButton.addEventListener('click', () => {
    dateButton.classList.toggle('button--active');
    dateBlock.classList.toggle('visibility--hidden-2');
    if (dateBlock.classList.contains('visibility--hidden-2')) {
        localStorage.setItem('dateBlockStatus', 'hidden');               
    } else {
        localStorage.setItem('dateBlockStatus', 'visible');
    }  
})


window.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('dateBlockStatus') === 'hidden') {
        dateBlock.classList.add('visibility--hidden-2');
        dateButton.classList.remove('button--active');
    }
}); 



/**************
 * Greeting
 *******/
 greetingButton.addEventListener('click', () => {
    greetingButton.classList.toggle('button--active');
    greetingBlock.classList.toggle('visibility--hidden-2');
    if (greetingBlock.classList.contains('visibility--hidden-2')) {
        localStorage.setItem('greetingBlockStatus', 'hidden');               
    } else {
        localStorage.setItem('greetingBlockStatus', 'visible');
    }  
})


window.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('greetingBlockStatus') === 'hidden') {
        greetingBlock.classList.add('visibility--hidden-2');
        greetingButton.classList.remove('button--active');
    }
}); 



/**************
 * quote
 *******/
 quoteButton.addEventListener('click', () => {
    quoteButton.classList.toggle('button--active');
    quoteBlock.classList.toggle('visibility--hidden-2');
    if (quoteBlock.classList.contains('visibility--hidden-2')) {
        localStorage.setItem('quoteBlockStatus', 'hidden');               
    } else {
        localStorage.setItem('quoteBlockStatus', 'visible');
    }  
})


window.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('quoteBlockStatus') === 'hidden') {
        quoteBlock.classList.add('visibility--hidden-2');
        quoteButton.classList.remove('button--active');
    }
}); 
