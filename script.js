let ullielement = document.querySelectorAll("ul li");
console.log(ullielement);

let ullilistitemclass = document.querySelectorAll("ul li.list-item");
console.log(ullilistitemclass);

let ullilistitemclass1 = document.querySelectorAll(".list-item");
console.log(ullilistitemclass1);

let newselect = document.querySelectorAll("ul.normallist li");
console.log(newselect);

ullielement[ullielement.length - 1].style.background = "red";
ullilistitemclass[ullilistitemclass.length - 1].innerHTML = "Hello";
