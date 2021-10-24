// I am executing 10 lines

// 5 hr

// setTimeout and setInterval

// it execute a js statement after n interval
// setTimeout(function(){
//     somefun()
// },1000)

// setInterval(function(){
//     fun()
// },3000)

// should be in millisecond

// setTimeout(() => {
//   console.log("I will execute after 2000 millisecond");
// }, 5000);

// function displayData() {
//   console.log("I will execute after 3000ms");
// }

// let setTimer = setTimeout(displayData, 3000);

// // i want to cancel setTImeout

// setTimeout(() => {
//   clearTimeout(setTimer);
// }, 100);

let i = 0;
let fruits = ["Papaya", "Grapes", "Pinapple", "Orange", "Banana"];

function displayFruit() {
  console.log(fruits[i]);
  i++;
}

let setTimer = setInterval(displayFruit, 1000);

setTimeout(() => {
  clearTimeout(setTimer);
}, 2000);

// we are creating a delay after every interval

// setTimeout=>
// 1.runs your code only once after the timeout is completed

// setInterval=>
// run your code /function repeatedly b/w the length of each input
