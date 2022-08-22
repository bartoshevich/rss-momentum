export function getTimeOfDay() {

    const date = new Date();
    const hours = date.getHours();   
    let timeOfDay = '';


    if (hours >= 0 && hours < 6) {
        timeOfDay = 'night';
    } else if
        (hours >= 6 && hours < 12) {
        timeOfDay = 'morning';
    } else if (hours >= 12 && hours < 18) {
        timeOfDay = 'afternoon';
    } else {
        timeOfDay = 'evening';
    }

 return timeOfDay;
}

