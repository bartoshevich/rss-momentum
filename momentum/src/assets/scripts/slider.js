import { getRandomNum } from './getRandomNum';
import { getTimeOfDay } from './getTimeOfDay';
import { setBg } from './setBg';
import { getUnsplashImage } from './unsplash';
import { getFlickrImage } from './flickr';


let n = getRandomNum();

let timeOfDay = getTimeOfDay();




let slideNext = document.querySelector('.slide-next');
let slidePrev = document.querySelector('.slide-prev');

// if (localStorage.getItem('photoSource') === 'unsplash') {
//     slideNext.addEventListener('click', getUnsplashImage);
//     slidePrev.addEventListener('click', getUnsplashImage);
// } else if (localStorage.getItem('photoSource') === 'flickr') {
//     slideNext.addEventListener('click', getFlickrImage);
//     slidePrev.addEventListener('click', getFlickrImage);
// } else {
//     slideNext.addEventListener('click', getSlideNext);
//     slidePrev.addEventListener('click', getSlidePrev);
// }

slideNext.addEventListener('click', () => {
    if (localStorage.getItem('photoSource') === 'unsplash') {
        getUnsplashImage();
    } else if (localStorage.getItem('photoSource') === 'flickr') {
        getFlickrImage();
    } else {
        getSlideNext();
    }
});

slidePrev.addEventListener('click', () => {
    if (localStorage.getItem('photoSource') === 'unsplash') {
        getUnsplashImage();
    } else if (localStorage.getItem('photoSource') === 'flickr') {
        getFlickrImage();
    } else {
        getSlidePrev();
    }
});

function getSlideNext() {
    if (n < 20) {
        n += 1;
    } else {
        n = 1;
    }
    let randomNum = n + '';
    let num = randomNum.padStart(2, '0');
    console.log(num);
    setBg(timeOfDay, num);
};


function getSlidePrev() {
    if (n > 1) {
        n -= 1;
    } else {
        n = 20;
    }
    let randomNum = n + '';
    let num = randomNum.padStart(2, '0');
    console.log(num);
    setBg(timeOfDay, num);
};