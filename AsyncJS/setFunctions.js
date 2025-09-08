//SetTimeout: Runs only one time
//functions shecudles functions that run at once after certain time

const timoutvalue = setTimeout(()=>{console.log("Say HI after 2 sec")}, 2000)

console.log(`Timout return value is : ${timoutvalue}`)


//setInterval: runs functions repatailty with fixed timed delay
let count = 0;

const intervalId = setInterval(()=>{
    console.log(`Interval Id is :${intervalId}`)
    count++;
    if(count > 5){
        clearInterval(intervalId)
    }
}, 1000)

//create setInterval using setTimout
function mySetInterval(callback, delay) {
  let timerId; // store timer reference
  let active = true; // to allow stopping

  function execute() {
    if (!active) return; // stop if cleared
    callback();
    timerId = setTimeout(execute, delay);
  }

  timerId = setTimeout(execute, delay);

  return {
    clear: () => { active = false; clearTimeout(timerId); }
  };
}

const interval = mySetInterval(()=>{console.log(`print 1 in 1 sec`)}, 1000)

setTimeout(()=>{
    console.log(`clearing the mySetinterval after 5 sec`)
    interval.clear()
}, 5000)


//what are the minimum delay in setTimout function: generaly 4 ms
//how to genrate setInterval using setTimeout, and also clearInterval