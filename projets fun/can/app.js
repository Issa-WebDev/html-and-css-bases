
const button1 = document.querySelector(".button1")
const button2 = document.querySelector(".button2")
const button3 = document.querySelector(".button3")
const button4 = document.querySelector(".button4")
const button5 = document.querySelector(".button5")

const span1 = document.querySelector(".span1")
const span2 = document.querySelector(".span2")
const span3 = document.querySelector(".span3")
const span4 = document.querySelector(".span4")
const span5 = document.querySelector(".span5")

span1.addEventListener("click" , () => {
    button1.classList.toggle('lime')
})
span2.addEventListener("click" , () => {
    button2.classList.toggle('lime')
})
span3.addEventListener("click" , () => {
    button3.classList.toggle('lime')
})
span4.addEventListener("click" , () => {
    button4.classList.toggle('lime')
})
span5.addEventListener("click" , () => {
    button5.classList.toggle('lime')
})