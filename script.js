const appBox = document.getElementById("appBox");
const emailBox = document.getElementById("emailBox");
const passwordBox = document.getElementById("passwordBox");
const appendContainer= document.getElementById("appendContainer");

function addPassword() {
  if (appBox.value === "" || emailBox.value === "" || passwordBox.value === "") {
    alert("input incomplete!!!");
  } else {
    let li = document.createElement("li");
    li.classList.add("table-row");
    li.innerHTML = "<div class='col col-1' data-label='application'>" + 
      appBox.value + 
      "</div><div class='col col-2' data-label='email'>" +
      emailBox.value + 
      "</div><div class='col col-3' data-label='password'>" + 
      passwordBox.value + 
      "</div>";
    // "</div><div class='col col-3' data-label='password'><input type='text' class='passwords' readonly value='" + 
    // passwordBox.value + 
    // "'></div>";
    appendContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  appBox.value = "";
  emailBox.value = "";
  passwordBox.value = "";
  saveData();
}

appendContainer.addEventListener("click", function(e){
if(e.target.tagName === "SPAN"){
    e.target.parentElement.remove();
    saveData();
  }
});

function saveData() {
  localStorage.setItem("data", appendContainer.innerHTML);
}

function showList() {
  appendContainer.innerHTML = localStorage.getItem("data");
}

function showPasswords() {
  console.log("showing passwords...");
  document.getElementsByClassName("passwords").type="text";
}

showList();