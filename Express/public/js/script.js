const STEPS = 4;
let currentStep = 0;
let steps = ["characteristics", "email", "hobbies"];
let buttonContinue = document.getElementById("continue");
let mainForm = document.getElementById("mainForm");

buttonContinue.addEventListener('click', () => {
    console.log("Button clicked : " + currentStep);
    if (currentStep < STEPS) {
        fetch(`/${steps[currentStep]}`, {
            method: "GET",
            headers: {
                'Content-type': 'application/json'
            }
        }).then((data) => {
            currentStep++;

            data.text().then((response) => {
                mainForm.innerHTML = response;
                console.log(response);
            });
        });
    }
    else {
        fetch('/end');
    }
})