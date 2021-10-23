function addNew() {
  //select the target element that list
  let select = document.getElementById("list");

  //create a new option
  let newOption = document.createElement("option");

  //select the input country using textbox
  newOption.text = document.getElementById("textbox").value;
  select.add(newOption);
}
