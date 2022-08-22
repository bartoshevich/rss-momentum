import { getTimeOfDay } from './getTimeOfDay';
import { checkName } from './name';
import langArr from './lang';






export function showGreetings() {
    const name = `, ${checkName()}`;
    let timeOfDay = getTimeOfDay();
    let lang = localStorage.getItem('lang'); 
    const greetingText = langArr[timeOfDay][lang] + `${name}!`;   
    let greetingMessage = document.querySelector('.greeting'); 
  

        greetingMessage.textContent = greetingText; 
  
 
      
    setTimeout(showGreetings, 1000);
}
// setInterval(showGreetings, 1000);
showGreetings();



