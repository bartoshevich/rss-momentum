import { getRandomNum } from './getRandomNum';
import { getTimeOfDay } from './getTimeOfDay';
import { getUnsplashImage } from './unsplash';
import { getFlickrImage } from './flickr';



let randomNum = getRandomNum() + '';
let num = randomNum.padStart(2, '0');
let timeOfDay = getTimeOfDay();

export function setBg(timeOfDay, num) {
  let body = document.querySelector('.page__body');
  let url = `https://raw.githubusercontent.com/bartoshevich/images_RSS_webp/main/${timeOfDay}/${num}.webp`;

  const img = new Image();
  img.src = url;

  img.addEventListener('load', () => {
    body.style.backgroundImage = `url(${url})`;
    // body.style.backgroundImage = body.style.backgroundImage = `url(${url})`;
  });

}


if (localStorage.getItem('photoSource') === 'unsplash' ) {
  getUnsplashImage();
} else if (localStorage.getItem('photoSource') === 'flickr') {
  getFlickrImage();
} else {
  setBg(timeOfDay, num);
}




