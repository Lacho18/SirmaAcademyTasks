let list = document.getElementById("todo-list");

document.getElementById('add-button').addEventListener('click', function () {
    const input = document.getElementById('todo-input');
    const task = input.value.trim();

    createNewTask(list, task);
}
);

function createNewTask(list, value) {
    let li = document.createElement("li");
    li.textContent = value;

    let deleteButton = document.createElement("button");
    deleteButton.textContent = "X";
    li.appendChild(deleteButton);

    deleteButton.addEventListener('click', () => {
        list.removeChild(li);
    });

    list.appendChild(li);
}
