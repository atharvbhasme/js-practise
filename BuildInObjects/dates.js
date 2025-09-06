//what is Date
//It's a built-in tool that lets you work with dates and time
// new Date(year, month, day, hours, minutes, seconds, ms)
//note that months are 0 indexed

const demoDate = new Date(2020, 11, 25)//it will be 25th December 2020
console.log(demoDate)

//get property in Date
const now = new Date();
console.log(now.getFullYear());
console.log(now.getMonth()); 
console.log(now.getDate()); 
console.log(now.getDay()); // e.g., 1 (for Monday)

//How to set the dates
now.setHours(3)

//.toString object in JS
console.log(now.toString()); 
console.log(now.toDateString()); 
console.log(now.toTimeString()); 
console.log(now.toISOString()); 

//formatter
const formatter = new Intl.DateTimeFormat('en-US', {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric'
});
console.log(formatter.format(now)); 

//How to get time stamp
console.log(Date.now())

//calculate long operations
const start = Date.now();
// Some long-running operation
for (let i = 0; i < 1000000; i++) {}
const end = Date.now();

console.log(`Operation took ${end - start} milliseconds`);

//How do you create a date for a specific time zone?
const tokyoTime = new Date(Date.UTC(2023, 11, 25, 10 - 9, 30));