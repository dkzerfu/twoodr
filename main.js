console.log("connected!");

var button = document.querySelector("#submit-twood");

button.addEventListener("click", function() {
  
  var display = document.querySelector(".twood");
  var inputText = document.querySelector("#twood-input");
  display.innerText = inputText.value;

})

