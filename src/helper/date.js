let date_time = new Date();
const result = date_time.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
   });

let date = ("0" + date_time.getDate()).slice(-2);
let month = date_time.getMonth()
let year = date_time.getFullYear();
let days = date_time.getDay()


const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July','August', 'September', 'October', 'November',  'December'];
const dayName = dayNames[days];
const monthName = monthNames[month]

date = `${dayName}, ${date} ${monthName},${year} ${result}`
export default date