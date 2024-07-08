function insertRow() {
    let table = document.getElementById("sampleTable").children[0];

    let tdElement1 = document.createElement("td");
    let tdElement2 = document.createElement("td");

    tdElement1.textContent = `Row${table.children.length + 1} cell1`;
    tdElement2.textContent = `Row${table.children.length + 1} cell2`;

    let newRow = document.createElement("tr");
    newRow.appendChild(tdElement1);
    newRow.appendChild(tdElement2);

    table.appendChild(newRow);
}