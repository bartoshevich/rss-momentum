import { checkName } from './name';
import { showGreetings} from './greetingMessage';


const nameCurrent = document.querySelector('.name__current');
const nameButton = document.querySelector('.name-change__button');
const nameProperty = document.querySelector('.name__property');

if (localStorage.getItem('input')) {
    nameCurrent.textContent = localStorage.getItem('input');
}

nameButton.addEventListener('click', () => {    
    nameCurrent.classList.add('visibility--hidden');
    nameButton.classList.add('visibility--hidden');

    let newName = document.createElement('input'); 
    newName.type = 'text';
    newName.classList.add('settings__name--input');
    nameProperty.append(newName); 

    let newNameSave = document.createElement('button'); 
    newNameSave.classList.add('setting__button');
    newNameSave.classList.add('lng-save');
    if (localStorage.getItem('lang') === 'by') {
        newNameSave.textContent = 'Захаваць';
    } else {
        newNameSave.textContent = 'Save';
    }
    nameProperty.append(newNameSave); 
    

    newNameSave.addEventListener('click', () => {
        localStorage.removeItem('input');
        if (newName.value.length === 0) {
            newName.value = 'Anonim';
        } 
        localStorage.setItem('input', newName.value); 
        showGreetings();
            newName.remove();
            newNameSave.remove();
            nameCurrent.classList.remove('visibility--hidden');
            nameButton.classList.remove('visibility--hidden'); 
            nameCurrent.textContent = localStorage.getItem('input');
            checkName();
         
    })


});



