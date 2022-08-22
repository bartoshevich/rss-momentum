
export function checkName() {

    let input = document.querySelector('.name__input');
    let button = document.querySelector('.name__button');
    

    window.addEventListener('beforeunload', setLocalStorage);
    window.addEventListener('DOMContentLoaded', getLocalStorage); 
    button.addEventListener('click', setLocalStorage);
  
    function setLocalStorage() {
        localStorage.setItem('input', input.value);  
        if (input.value.length === 0) {
            input.value = 'Anonim';
        }   
        document.querySelector('.name__current').textContent = input.value;
    }

    function getLocalStorage() {
        if (localStorage.getItem('input')) {
            input.value = localStorage.getItem('input');  
                   
        } 
    }
    getLocalStorage();
    
    return input.value;
    
    
}






