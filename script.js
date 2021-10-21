let Fruits = ["Apple", "Grapes", "Mangoes", "kiwi", "Coconut"];
// 1.loop normal for loops
// let result = "  ";
// for (let i = 0; i < Fruits.length; i++) {
//   result += ` ${Fruits[i]} `;
// }

// console.log(result);
// 2.for-in

// let result = " ";
// for (let index in Fruits) {
//   result += ` ${Fruits[index]} `;
// }
// console.log(result);

// 3.for-of loop

// result = "";
// for (let fruit of Fruits) {
//   result += ` ${fruit} `; //template literal ` ` and $
// }
// console.log(result);
// 4.Es5 forEach function

result = "";

Fruits.forEach(function (fruit) {
  result += ` ${fruit} `;
});

console.log(result);
// 5.foEach functuin with Arrow operator Es6

result = "";

Fruits.forEach((x) => (result += ` ${x} `));

console.log(result);

// for-of
