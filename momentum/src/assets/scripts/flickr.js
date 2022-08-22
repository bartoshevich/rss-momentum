import { getTimeOfDay } from './getTimeOfDay';




export async function getFlickrImage() {

    let tagsInput = document.querySelector('.tags__input').value;
    if (tagsInput.length === 0) {
        tagsInput = getTimeOfDay();

    }


    const urlFlickr = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=46e356809300200faaeacd8cfc81a488&tags=${tagsInput}&extras=url_l&format=json&nojsoncallback=1`

    // console.log(urlFlickr)


    console.log(`tag for flickr background photo: ${tagsInput}`);
    const url = urlFlickr;
    const res = await fetch(url);
    const data = await res.json();

    const photoArr = data.photos.photo;
    // console.log(data.photos.photo)
let num = Math.floor(Math.random() * (photoArr.length -1)) + 1;
// console.log(num)

    let body = document.querySelector('.page__body');
    const img = new Image();
    img.src = photoArr[num].url_l;

    img.addEventListener('load', () => {
        body.style.backgroundImage = `url(${photoArr[num].url_l})`;
    });

}
