// jQuery function to validate form
$(document).ready(function(){ // ensures document is fully loaded
    $('form').on('submit', function(event) { //triggers when submit is clicked
        event.preventDefault();
        let radio = validateRadio();
        let personal = false;
        if (radio) {
            personal = validatePersonal(); 
        }
        if (personal) {
            personal = validateLoc();
        }
        if (personal) {
            window.location.href = "thankyou.html";
        }
    });
});

//validate radio buttons
function validateRadio() 
{
    const frequency = document.querySelector('input[name="frequency"]:checked');
    const donation = document.querySelector('input[name="donation"]:checked');
    if (!frequency) {
        alert("Please choose a donation frequency");
        return false;
    } else if (!donation) {
        alert("Please choose a donation amount");
        return false;
    }
    return true;
}

// validates name and email
function validatePersonal()
{
    //validate first name
    let name = $('#fname').val();
    if (name === "") {
        alert("Please enter your first name");
        return false;
    }
    //validate last name
    name = $('#lname').val();
    if (name === "") {
        alert("Please enter your last name");
        return false;
    }
    //validate email
    const email = $('#email').val();
    if (email === "" || !(email.includes('@'))) {
        alert("Please enter a valid email");
        return false;
    }
    const splitEm = email.split('@');
    if (!(splitEm[1].includes('.'))) {
        alert("Please enter a valid email");
        return false;
    }
    return true;
}

//validate the address fields
function validateLoc()
{
    let address = $('#address').val();
    if (address === "") {
        alert("Please enter your address");
        return false;
    }
    address = $('#city').val();
    if (address === "") {
        alert("Please enter your city");
        return false;
    }
    address = $('#state').val();
    if (address === "Select a State") {
        alert("Please select a state");
        return false;
    }
    address = $('#zip').val();
    if (address === "") {
        alert("Please enter your zipcode");
        return false;
    }
    return true;
}