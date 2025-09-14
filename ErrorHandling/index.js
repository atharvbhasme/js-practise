//example
function rishkyFunction(){
    throw new Error(`Error is occured`)
}

try{
    rishkyFunction()
}catch(e){
    console.error(error)
}finally{
    console.log("this will print what ever happens")
}

//what is Error handling: anticepting and managing error that occurs during code excution, preventing it from crashing
