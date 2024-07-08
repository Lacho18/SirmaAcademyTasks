function removecolor() {
    let optionsHTML = Array.from(document.getElementById("colorSelect").children);

    let options = optionsHTML.map(option => option.textContent);

    let selectOptions = document.getElementById("colorSelect");

    let indexToRemove = options.indexOf(selectOptions.value);

    selectOptions.children[indexToRemove].remove();
}