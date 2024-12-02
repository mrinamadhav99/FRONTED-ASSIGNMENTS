function checkData() {
    let usname = document.myform.uname.value;
    let usmail = document.myform.umail.value;
    let ucontact = document.myform.contact.value;
    let ugender = document.myform.gender;
    let pass = document.myform.pass.value;

    // Validate Username: 3 to 15 characters with letters and spaces only
    if (!usname.trim().match(/^[a-zA-Z ]{3,15}$/)) {
        window.alert("Enter a minimum of 3 and a maximum of 15 characters for the name!");
        document.getElementById("uname").focus();
        return false;
    }

    // Validate Email: Should be in proper email format
    if (!usmail.trim().match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)) {
        window.alert("Enter a valid email address!");
        document.getElementById("umail").focus();
        return false;
    }

    // Validate Contact Number: Exactly 10 digits
    if (!ucontact.match(/^[0-9]{10}$/)) {
        window.alert("Enter a correct contact number (10 digits only)!");
        document.getElementById("contact").focus();
        return false;
    }

    // Validate Password: Minimum 8 characters with allowed special characters
    if (!pass.match(/^[a-zA-Z0-9@#$%^&*!<>?:|\/~]{8,}$/)) {
        window.alert("Enter a correct password (at least 8 characters, with letters, numbers, and special characters)!");
        document.getElementById("pass").focus();
        return false;
    }

    // Validate Gender: One of the radio buttons should be checked
    if (!(ugender[0].checked || ugender[1].checked)) {
        window.alert("Choose Gender!");
        return false;
    }

    // If all validations pass
    return true;
}