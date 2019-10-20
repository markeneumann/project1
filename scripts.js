// Handle input and compute average

const calculator = {
  avg(a,b,c) {
   return (Number(a) + Number(b)+ Number(c)) / 3;
 }
};

const form=document.querySelector("form");
const num1=document.querySelector("#game-1");
const num2=document.querySelector("#game-2");
const num3=document.querySelector("#game-3");
const output=document.querySelector("output");

form.addEventListener("submit", function(event){

  event.preventDefault();

  output.textContent = calculator["avg"]( num1.value, num2.value, num3.value);
});



