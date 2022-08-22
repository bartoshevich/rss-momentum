import { getTimeOfDay } from './getTimeOfDay';
import { getRandomNum } from './getRandomNum';
import { setBg } from './setBg';
import { getUnsplashImage } from './unsplash';
import { getFlickrImage } from './flickr';



const unsplashButton = document.getElementById('unsplash');
const flickrButton = document.getElementById('flickr');
const githubButton = document.getElementById('github');
const photoTags = document.querySelector('.photo__tags');

const tagsSubmit = document.getElementById('tagsSubmit');

if (localStorage.getItem('photoSource') === 'unsplash') {
    unsplashButton.classList.add('button--active');
} else if (localStorage.getItem('photoSource') === 'flickr') {
    flickrButton.classList.add('button--active');
} else {
    githubButton.classList.add('button--active');
}


unsplashButton.addEventListener('click', () => {
    localStorage.removeItem('photoSource');
    photoTags.classList.remove('visibility--hidden');
    unsplashButton.classList.add('button--active');
    flickrButton.classList.remove('button--active');
    githubButton.classList.remove('button--active');
    localStorage.setItem('photoSource', 'unsplash');

})

flickrButton.addEventListener('click', () => {
    localStorage.removeItem('photoSource');
    photoTags.classList.remove('visibility--hidden');
    unsplashButton.classList.remove('button--active');
    flickrButton.classList.add('button--active');
    githubButton.classList.remove('button--active');
    localStorage.setItem('photoSource', 'flickr');

})


githubButton.addEventListener('click', () => {
    localStorage.removeItem('photoSource');
    photoTags.classList.add('visibility--hidden');
    unsplashButton.classList.remove('button--active');
    flickrButton.classList.remove('button--active');
    githubButton.classList.add('button--active');
    localStorage.setItem('photoSource', 'github');

    let randomNum = getRandomNum() + '';
    let num = randomNum.padStart(2, '0');
    let timeOfDay = getTimeOfDay();
    setBg(timeOfDay, num);

})




tagsSubmit.addEventListener('click', () => {
    if (localStorage.getItem('photoSource') === 'unsplash') {
        getUnsplashImage();
    } else if (localStorage.getItem('photoSource') === 'flickr') {
        getFlickrImage();
    }

})