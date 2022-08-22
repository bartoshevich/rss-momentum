
import { getTimeOfDay } from './getTimeOfDay';



export async function getUnsplashImage() {
    
    let tagsInput = document.querySelector('.tags__input').value;
    if (tagsInput.length === 0) {
        tagsInput = getTimeOfDay();

    }



    const urlUnsplash = `https://api.unsplash.com/photos/random?orientation=landscape&query=${tagsInput}&client_id=jfpzEnM4iMEA-quSls66K4GormSwSe2IUX98FhPyNxI`



    console.log(`tag for unsplash background photo: ${tagsInput}`);
    const url = urlUnsplash;
    const res = await fetch(url);
    const data = await res.json();

    let body = document.querySelector('.page__body');
    const img = new Image();
    img.src = data.urls.regular;

    img.addEventListener('load', () => {
        body.style.backgroundImage = `url(${data.urls.regular})`;
    });

}

