function getOptions() {
    let optionsHTML = Array.from(document.getElementById("mySelect").children);

    let options = optionsHTML.map(option => option.textContent);

    alert(`Count: ${options.length} \n Values: ${options.join(', ')}`);
}