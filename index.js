const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const buttonStart = document.querySelector('button[data-action = start')
const buttonStop = document.querySelector('button[data-action = stop')

const generationBackground = function(){
  document.body.setAttribute("style", `background-color:${colors[randomIntegerFromInterval(0,5)]}`)
}
let intervalGeneration;

document.body.setAttribute("style", "background-color:white")

buttonStart.addEventListener('click', ()=>{
intervalGeneration = setInterval(generationBackground, 1000)
buttonStart.setAttribute("disabled", "true");
})

buttonStop.addEventListener('click', ()=>{
buttonStart.removeAttribute("disabled")
  clearInterval(intervalGeneration)
  })

