function changeContent(row, column, newText) {
    let table = document.getElementById("myTable").children[0];

    let targetRow = table.children[row - 1];
    let targetCell = targetRow.children[column - 1];
    console.log(targetCell);

    targetCell.textContent = newText
}