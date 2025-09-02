//what are the modules in JS
//breaking your code into sperate files for each important task
//whay to use module: resualblity, easy to find

//exporting function
export function add(num1, num2){
    return num1 + num2;
}

//export the varibles
export const PI = 3.1423

//export the object
export const person = {
    name: 'Atharv',
    age: 24
}

//export classs
 export class DoThings{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    print(){
        console.log(`Hi, My name is ${this.name}. my age is ${this.age}`)
    }
 }

export default function printNumber () {console.log(12)};

