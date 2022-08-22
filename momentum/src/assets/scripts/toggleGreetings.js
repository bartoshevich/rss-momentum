import { showGreetings} from './greetingMessage';


let button = document.querySelector('.name__button');
let nameWrapper = document.querySelector('.name__wrapper');
let greetingWrapper = document.querySelector('.greeting__wrapper');




 function closeInput() {
    nameWrapper.classList.toggle('hidden');
    greetingWrapper.classList.toggle('hidden');
}

 function checkInput() {
    if (localStorage.getItem('input')) {
        closeInput();
    } 
}

button.addEventListener('click', () => {
    showGreetings();
    closeInput();
});
window.addEventListener('DOMContentLoaded', checkInput);     
   
