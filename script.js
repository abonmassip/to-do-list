var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var itemsList = document.querySelectorAll("li"); // new var, list of all <li>

function inputLength() {
    return input.value.length;
};

function createListElement() {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = "";

    countList(); // counts again the list after creating the new <li>
    addDeleteButton(itemsList.length - 1); // add delete button to the new <li>
}

function addListAfterClick() {
    if (inputLength() > 0) {
        createListElement();
    }
}

function addListAfterKeypress(event) {
    if (inputLength() > 0 && event.keyCode === 13) {
        createListElement();
    }
}

button.addEventListener("click", addListAfterClick)
input.addEventListener("keypress", addListAfterKeypress)


for (var i = 0; i < itemsList.length; i++) { // loop to add eventListener to the original <li>
    itemsList[i].firstChild.addEventListener("click", taskClick);
    addDeleteButton(i);
};

function countList() { // function that counts again the list
    itemsList = document.querySelectorAll("li");
}

function addDeleteButton(i) { // add delete button
    var button = document.createElement("button");
    button.appendChild(document.createTextNode("delete"));
    itemsList[i].appendChild(button);
    itemsList[i].addEventListener("click", taskClick); // add eventListener to the new button
}

function taskClick(event) {
    if (event.target.nodeName === "BUTTON") { // if it's a button delete the parentElement
        event.target.parentElement.remove();
        countList();
    } else { // if not a button toggle CSS class "done"
        event.target.classList.toggle("done");
    }
};