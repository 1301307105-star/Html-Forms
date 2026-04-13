console.log("script started");

function processForm(event) {
    event.preventDefault();
    console.log("click");

    let flameInput = document.getElementById("firstname");
    let firstname = flameInput.value;
    console.log(firstname);


    let dateinput = document.getElementById("birthdate");
    let birthdate = dateinput.value;
    console.log(birthdate);
}