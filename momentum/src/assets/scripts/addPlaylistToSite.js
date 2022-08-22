
import playList  from './playlist';




const playListContainer = document.querySelector('.play-list');
playList.forEach(el => {
    let li = document.createElement('li');
    playListContainer.append(li);
    li.classList.add('play-item');

    let control = document.createElement('div');
    li.append(control);
    control.classList.add('item__control');

  
    let songName = document.createElement('div'); 
    li.append(songName);    
    songName.classList.add('item__name');
    songName.textContent = el.author;

    let songDuration = document.createElement('div'); 
    li.append(songDuration); 
    songDuration.classList.add('song__duration');

    let durationCurrent = document.createElement('div'); 
    songDuration.append(durationCurrent); 
    durationCurrent.classList.add('current');
    durationCurrent.textContent = '00:00';
    durationCurrent.id = `durationCurrent-${playList.indexOf(el)}`;

   
    let durationLength = document.createElement('div'); 
    songDuration.append(durationLength); 
    durationLength.classList.add('length');
    durationLength.textContent = `  / ${el.duration}`;

    let timeline = document.createElement('div');
    li.append(timeline);
    timeline.classList.add('timeline');
    timeline.id = `progressContainer-${playList.indexOf(el)}`;

    let progress = document.createElement('div');
    timeline.append(progress);
    progress.classList.add('progress');
    progress.id = `progressBar-${playList.indexOf(el)}`;



    li.setAttribute('id', `song-${playList.indexOf(el)}`);
    
  })
