//select the target element

let selectBox = document.querySelector("#select-tag");

//lets add event listeners
selectBox.addEventListener("change", function () {
  //i will select a value
  let selectedOption = selectBox.value;

  let spanTag = document.querySelector("#span-1");
  console.log(spanTag);

  spanTag.innerText = selectedOption;
  console.log(selectBox);
});

//we are wrting the logic to reverse a string
let reverseString = (str) => {
  //creating a empty string
  let tempstr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    tempstr += str[i];
  }
  return tempstr;
};

//keyup event
let textBox = document.querySelector("#username");
textBox.addEventListener("keyup", function () {
  let textEnter = textBox.value;
  console.log(textEnter);
  let usertext = document.querySelector("#user-text");
  usertext.innerText = reverseString(textEnter);
});

let textArea = document.querySelector("#text-area");
let count = 100;
textArea.addEventListener("keyup", function () {
  let textEnteredLength = textArea.value.length;
  console.log(textEnteredLength);
  let spanTag = document.querySelector("#span-2");
  spanTag.innerText = count - textEnteredLength;
  if (spanTag.innerText == 0) {
    alert("Cant enter more data");
  }
});

// index=0
