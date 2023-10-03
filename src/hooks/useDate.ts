
export const useDate = () => {
    const date = new Date();
  
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
  
    const weekdays = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    const weekday = weekdays[date.getDay()];
  
    const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    const month = months[date.getMonth()];
    
    const day = date.getDate();

    const actual_datetime = `${hours}:${minutes} / ${weekday}, ${month} ${day}`;

    return {
        actual_datetime
    }
}