
const quote = document.querySelector('.quote__block');

window.addEventListener('resize', hideElements)


function hideElements() {

     if (document.documentElement.clientHeight < 650 && document.documentElement.clientWidth < 791) {
        quote.classList.add('visibility--hidden');
        document.getElementById('song-2').classList.add('visibility--hidden');
        document.getElementById('song-3').classList.add('visibility--hidden');
    } else {
        quote.classList.remove('visibility--hidden');
        document.getElementById('song-2').classList.remove('visibility--hidden');
        document.getElementById('song-3').classList.remove('visibility--hidden');
    }
}



