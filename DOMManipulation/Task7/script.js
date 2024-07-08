function createTable() {
    let textValue = document.getElementsByName('input')[0].value;

    if (textValue.includes("Row") && textValue.includes("Column")) {
        let rowsIndex = textValue.indexOf('-') + 1;
        let columnsIndex = textValue.indexOf('-', rowsIndex) + 1;

        let rows = Number(textValue[rowsIndex]);
        let columns = Number(textValue[columnsIndex]);

        let table = document.getElementById("myTable");

        let values = 1;

        for (let i = 0; i < rows; i++) {
            let newRow = document.createElement("tr");

            for (let j = 0; j < columns; j++) {
                let newCell = document.createElement("td");
                newCell.textContent = values;
                newRow.appendChild(newCell);

                values++;
            }

            table.appendChild(newRow);
        }
    }
    else {
        console.log("Invalid input");
    }
}