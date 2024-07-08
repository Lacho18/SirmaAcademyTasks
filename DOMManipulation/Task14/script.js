let list = document.getElementById("items");
let input = document.querySelector("input[type=text]");
let newTaskButton = document.querySelector("button");

newTaskButton.addEventListener("click", addNewTask);

function addNewTask() {
    let newLiElement = document.createElement("li");
    newLiElement.textContent = input.value;
    input.value = "";
    newLiElement.addEventListener("click", () => {
        editStructure(newLiElement.textContent, newLiElement);
    })
    list.appendChild(newLiElement);
}

function editStructure(value, liElement) {
    let newDiv = document.createElement("div");
    newDiv.id = "editDiv";

    let newInput = document.createElement("input");
    newInput.value = value;
    newInput.id = "newInput";
    newDiv.appendChild(newInput);

    let editButton = document.createElement("button");
    editButton.textContent = "Confirm edit";
    editButton.addEventListener('click', () => {
        confirmAndRemove(newInput.value, liElement);
    });
    newDiv.appendChild(editButton);
    document.body.appendChild(newDiv);
}

function confirmAndRemove(newEditedValue, liElement) {
    liElement.textContent = newEditedValue;
    let divEditStructure = document.getElementById("editDiv");
    divEditStructure.remove();
}