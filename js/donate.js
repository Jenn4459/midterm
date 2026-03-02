// jQuery function to validate form
$(document).ready(function(){ // ensures document is fully loaded
    $('form').on('submit', function(event) { //triggers when submit is clicked
        event.preventDefault();
        let personal = validatePersonal(); 
        if (personal) {
            personal = validateLoc();
        }
        if (personal) {
            alert("Thank you so much for your donation!!!");
        }
    });
});

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