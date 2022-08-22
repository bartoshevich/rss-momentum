const settingsButton = document.querySelector('.settings__button');
const settingsPanel = document.querySelector('.settings');
const settingsContainer = document.querySelector('.settings__container');




function showSettings() {
    if (settingsButton.classList.contains('button--close')) {
        settingsButton.classList.remove('button--close');
        settingsButton.classList.add('button--open');
        settingsPanel.classList.toggle('settings--active');
        settingsContainer.classList.add('settings__container--active');
    } else if (settingsButton.classList.contains('button--open')) {
        settingsButton.classList.remove('button--open');
        settingsButton.classList.add('button--close');
        settingsPanel.classList.toggle('settings--active');
        settingsContainer.classList.remove('settings__container--active');
    } else {
        settingsButton.classList.add('button--open');
        settingsPanel.classList.toggle('settings--active');
        settingsContainer.classList.add('settings__container--active');
    }
}

settingsButton.addEventListener('click', showSettings); 




window.addEventListener('click', (event) => { 
    
    if (event.target.classList.contains('settings__container')  && event.target.classList.contains('settings__container--active')) {
        showSettings();
    } 
});