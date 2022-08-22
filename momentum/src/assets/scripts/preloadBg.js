
import { getTimeOfDay } from './getTimeOfDay';



function preloadImages() {
    let timeOfDay = getTimeOfDay();
    for (let i = 1; i <= 20; i++) {
        let n = (i + '').padStart(2, '0');
        const img = new Image();
        img.src = `https://raw.githubusercontent.com/bartoshevich/images_RSS_webp/main/${timeOfDay}/${n}.webp`;
    }
}
preloadImages();


