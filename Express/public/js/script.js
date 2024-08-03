const STEPS = 4;
let currentStep = 0;
let steps = ["characteristics", "email", "hobbies"];
let buttonContinue = document.getElementById("continue");
let mainForm = document.getElementById("mainForm");

buttonContinue.addEventListener('click', () => {
    let allInputs = document.querySelectorAll("#mainForm input");
    if (allInputs.length == 0) {
        allInputs = document.querySelectorAll("#mainForm textarea");
        console.log(allInputs);
    }
    let data = {};

    allInputs.forEach((input) => {
        data[input.name] = input.value;
    });

    console.log(data);

    if (currentStep < STEPS - 1) {
        fetch(`/${steps[currentStep]}/?data=${encodeURIComponent(JSON.stringify(data))}`, {
            method: "GET",
            headers: {
                'Content-type': 'application/json'
            }
        }).then((data) => {
            currentStep++;

            data.text().then((response) => {
                mainForm.innerHTML = response;
            });
        });
    }
    else {
        fetch(`/end/?data=${encodeURIComponent(JSON.stringify(data))}`);
    }
});