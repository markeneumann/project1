// Handle input and compute average

const calculator = {
  avg(a,b,c) {
    if (a > 300 || b > 300 || c > 300){
      return "Value cannot be over 300";
    }
   return "Your average for the games entered is "+(Number(a) + Number(b)+ Number(c)) / 3;
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



