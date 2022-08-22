import playList from './playlist';


const songs = document.querySelectorAll('.play-item');
const play = document.querySelector('.play');
const next = document.querySelector('.play-next');
const prev = document.querySelector('.play-prev');
const controls = document.querySelectorAll('.item__control');
const volumeEl = document.querySelector(".volume-button");
const volumeSlider = document.querySelector(".volume-slider");

const audio = new Audio();

let isMuted = false;
let isPlay = false;
let playNum = 0;




play.addEventListener('click', playAudio);
next.addEventListener('click', playNext);
prev.addEventListener('click', playPrev);
audio.addEventListener('ended', playNext);





function playAudio() {
    if (isPlay === false) {
        clearPlayList();
        audio.src = playList[playNum].src,
            audio.currentTime = 0;
        audio.play();
        document.querySelectorAll('.item__control')[playNum].classList.add('item__control--play');
        play.classList.add('pause');
        document.getElementById(`song-${playNum}`).classList.add('item-active');
        isPlay = true;
    } else {
        clearPlayList();
        // document.getElementById(`song-${playNum}`).classList.remove('item-active');
        document.querySelectorAll('.item__control')[playNum].classList.remove('item__control--play');
        audio.pause();
        play.classList.remove('pause');
        isPlay = false;
    }
}

function playNext() {
    // document.getElementById(`song-${playNum}`).classList.remove('item-active');
    clearPlayList();
    if (playNum < songs.length - 1) {
        playNum += 1;
    } else {
        playNum = 0;
    }
    console.log(playNum);
    isPlay = false;
    playAudio();
}


function playPrev() {
    // document.getElementById(`song-${playNum}`).classList.remove('item-active');
    clearPlayList();
    if (playNum > 0) {
        playNum -= 1;
    } else {
        playNum = songs.length - 1;
    }
    console.log(playNum);
    isPlay = false;
    playAudio();
}



function clearPlayList() {
    // const songs = document.querySelectorAll('.play-item');
    for (let i = 0; i < songs.length; i++) {
        document.querySelectorAll('.item__control')[i].classList.remove('item__control--play');
        songs[i].classList.remove('item-active');
        songs[i].classList.remove('target');
        document.getElementById(`progressBar-${i}`).style.width = 0;
        document.getElementById(`durationCurrent-${i}`).textContent = '00:00';
    }
}




/***************************
 * Single song control + timeline
 *******************/


//  const controls = document.querySelectorAll('.item__control');
for (let i = 0; i < controls.length; i++) {
    controls[i].addEventListener('click', () => {
        if (document.getElementById(`song-${i}`).classList.contains('item-active')) {
            isPlay = true;
            clearPlayList();
            playNum = i;
            playAudio();

        } else {
            isPlay = false;
            clearPlayList();
            playNum = i;
            playAudio();
        }
    });

    const progressContainer = document.getElementById(`progressContainer-${i}`);
    progressContainer.addEventListener('click', function (e) {
        if (document.getElementById(`song-${i}`).classList.contains('item-active')) {

            const width = this.clientWidth;
            const clickX = e.offsetX;
            const duration = audio.duration;
            audio.currentTime = (clickX / width) * duration;


        } else {
          

            clearPlayList()


      

            isPlay = false;
            clearPlayList();
            playNum = i;
            playAudio();

        }
    });
}







/***************************
 * Volume
 *******************/


volumeSlider.addEventListener('click', e => {
    const sliderWidth = window.getComputedStyle(volumeSlider).width;
    const newVolume = e.offsetX / parseInt(sliderWidth);
    audio.volume = newVolume;
    document.querySelector(".volume-percentage").style.width = newVolume * 100 + '%';
}, false)



volumeEl.addEventListener("click", () => {
    if (isMuted === true) {
        volumeEl.classList.remove("volume-mute");
        volumeEl.classList.add("volume-icon");
        isMuted = false;
        audio.muted = false;

        document.querySelector(".volume-percentage").style.width = audio.volume * 100 + '%';
    } else {
        volumeEl.classList.add("volume-mute");
        volumeEl.classList.remove("volume-icon");
        isMuted = true;
        audio.muted = true;
        document.querySelector(".volume-percentage").style.width = 0 + '%';
    }
});





/***********************
 * timeline 
 ************/




audio.addEventListener('timeupdate', updateProgress);

function updateProgress(e) {
    for (let i = 0; i < songs.length; i++) {

        if (document.getElementById(`song-${i}`).classList.contains('item-active')) {
            const { duration, currentTime } = e.target;
            const progressPercent = (currentTime / duration) * 100;
            const progress = document.getElementById(`progressBar-${i}`);
            progress.style.width = `${progressPercent}%`;
            document.getElementById(`durationCurrent-${i}`).textContent = (formatTime(Math.floor(currentTime)));

        }
    }
}


function formatTime(seconds) {
    let min = Math.floor((seconds / 60));
    let sec = Math.floor(seconds - (min * 60));
    if (min < 10) {
        min = `0${min}`;
    };
    if (sec < 10) {
        sec = `0${sec}`;
    };
    return `${min}:${sec}`;
};
