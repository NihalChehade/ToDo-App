const form = document.querySelector("form");
const input = document.querySelector("#newToDoItem");
const ol = document.querySelector("#TODOs");

form.addEventListener("click", function (ev) {
  ev.preventDefault();
  if (input.value && ev.target.tagName === "BUTTON") {
    newLi = addNewTODO(input.value);
    ol.prepend(newLi);
    input.value = "";
  }
});

function addNewTODO(txt) {
  const TODOLi = document.createElement("li");
  const newCheckBox = document.createElement(`input`);
  const newBtn = document.createElement("button");
  newCheckBox.setAttribute("type", "checkbox");
  newBtn.setAttribute("class", "delete");
  newBtn.innerText = "X";
  TODOLi.innerText = txt;
  TODOLi.append(newCheckBox);
  TODOLi.append(newBtn);
  return TODOLi;
}

ol.addEventListener("click", function (e) {
  if (e.target.checked) {
    e.target.parentElement.classList.add("strikethrough");
  } else {
    e.target.parentElement.classList.remove("strikethrough");
  }

  if (e.target.tagName === "BUTTON") {
    e.target.parentElement.remove();
    // const savedArray=JSON.parse(localStorage.liArray);
    // savedArray.
  }
});

window.addEventListener("unload", function () {
  if (!ol.children) {
    localStorage.clear();
    
  } else {
    localStorage.setItem("olLi", ol.innerHTML);
  }
});
window.addEventListener("load", function () {
  
    const lis = localStorage.getItem("olLi");
    if(lis){
    ol.innerHTML=lis;
    const liElements=ol.querySelectorAll("LI");
    
    for(let li of liElements){
      if(li.className==="strikethrough"){
        const checkboxInsideLi=li.querySelector(`input[type="checkbox"]`);
      checkboxInsideLi.checked=true;
      }

    }
  }
});
