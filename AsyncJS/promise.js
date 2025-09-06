//what are promises in JS
//promise is object that represent the eventually success or failure of async operation and its results
//promises have three sets pending(intial), fulfil(success) and rejected(failed)

//creating the new promises
const myPromise = new Promise((resolve, reject)=>{
    const success = true;
   setTimeout(() => {
    if (success) {
      resolve("Data successfully loaded!"); // Fulfill the promise
    } else {
      reject("Failed to load data."); // Reject the promise
    }
  }, 2000);
})

//consuming promise
myPromise.then((data)=>{console.log(data)}).catch((error)=>{console.error(error)}).finally(console.log(`It will run eventually in call cases failure or success`))


//Promise.all()
//It used to call mutiple async operatons waited all them to conmplete
const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 2000, "foo");
});
const promise4 = Promise.reject("Error:sending error")

Promise.all([promise1,promise2,promise3]).then((data)=>{
  console.log(`Data is ${JSON.stringify(data)}`)
})

//diference between promise.all ad promose.allSettled
//promise.all: if any one promise faile, it will not excute other promises, return the rejection
//promise.allSettled: if any one failed it will excute other promised and return data
Promise.allSettled([promise4,promise1,promise2,promise3]).then((data)=>{
  for(const d of data){
    if(d.status === 'fulfilled'){
    console.log(`Successful promises ${d}`)
  }else{
    console.log(`rejected promises ${d}`)
  }
  }
})


//what are promises in JS: promise is object that represent the eventually success or failure of async operation and its results
//promises have three sets pending(intial), fulfil(success) and rejected(failed)
//what is difference between promises and callback ?
//callback lead to deeply nested callback hell, while promises provide flat chained structure for aysnc code. 
// and it's also better for error handling
//promise chaining =>  promise.then().then().catch()
//Promise.all([...promises]) It used to call mutiple async operatons waited all them to conmplete
//diference between promise.all ad promose.allSettled
//promise.all: if any one promise faile, it will not excute other promises, return the rejection
//promise.allSettled: if any one failed it will excute other promised and return data. it will never excute the catch block