//Extract File

function solve(input) {
    let inputArray = input.split("\\");
    let lastElement = inputArray[inputArray.length - 1];

    let components = lastElement.split(".");
    let fileName = "";
    let fileExtension = "";
    for (let i = 0; i < components.length - 1; i++) {
        if (i + 1 == components.length - 1) {
            fileName += components[i];
            break;
        }
        fileName += components[i] + '.'
    }

    fileExtension = components[components.length - 1];

    console.log("File name: " + fileName);
    console.log("File extension: " + fileExtension);
}

solve("C:\\Projects\\website.folder\\file.name.js");