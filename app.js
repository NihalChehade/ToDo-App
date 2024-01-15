const form = document.querySelector("form");
const input = document.querySelector("#newToDoItem");
const ul = document.querySelector("#TODOs");

form.addEventListener("click", function (ev) {
  ev.preventDefault();
  if (input.value && ev.target.tagName === "BUTTON") {
    ul.prepend(addNewTODO(input.value));
    input.value = "";
  }
});

function addNewTODO(txt) {
  const TODOLi = document.createElement("LI");
  const newCheckBox = document.createElement(`input`);
  const newBtn = document.createElement("button");
  newCheckBox.setAttribute("type", "checkbox");
  TODOLi.innerText = txt;
  TODOLi.prepend(newCheckBox);
  TODOLi.append(newBtn);
  return TODOLi;
}


ul.addEventListener("click", function(e){
    if(e.target.checked){
        e.target.parentElement.classList.add("strikethrough");
    } else {
        e.target.parentElement.classList.remove("strikethrough");
    }

    if(e.target.tagName==="BUTTON"){
        e.target.parentElement.remove();
    }
});