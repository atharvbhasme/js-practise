//What is DOM: Document Object Model that represent HTML in tree like structure
//DOM Selection: Select specific element on HTML to do operations 

const btn = document.querySelector("#signUpBtn")

const allTask = document.querySelector(".task-item")

//Event handling in JS
//You Listen an event like click, submit, mouseOver, Submit

btn.addEventListener('click',()=>{
alert("Button is CLicked")
})