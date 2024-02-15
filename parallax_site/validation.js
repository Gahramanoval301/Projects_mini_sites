const email_regex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/
const telephone_regex = /^\d{10}$|^\+\d{1,15}$/
const fullname_regex = /^[a-zA-Z]+$/

const validateForm = (event) => {

    const name = document.getElementById('name').value
    const surname = document.getElementById('surname').value
    const email = document.getElementById('email').value
    const phone_number = document.getElementById('phone_number').value
    const message = document.getElementById('message').value

    const name_error = document.getElementById('name-error');
    const surname_error = document.getElementById('surname-error');
    const email_error = document.getElementById('email-error');
    const phone_number_error = document.getElementById('phone_number-error');
    const message_error = document.getElementById('message-error');

    event.preventDefault();

    var isValid = true;

    // Reset error messages before validation
    name_error.innerText = '';
    surname_error.innerText = '';
    email_error.innerText = '';
    phone_number_error.innerText = '';
    message_error.innerText = '';

    if (!name.match(fullname_regex)) {
        name_error.innerText = "Name can't contain digits or symbols.";
        isValid = false;
    }

    if (!surname.match(fullname_regex)) {
        surname_error.innerText = 'Surname can\'t contain digits or symbols.';
        isValid = false;
    }

    if (!email.match(email_regex)) {
        email_error.innerText = 'Please enter a valid email address.';
        isValid = false;
    }

    if (!phone_number.match(telephone_regex)) {
        phone_number_error.innerText = 'Please enter a valid phone number.';
        isValid = false;
    }


    return isValid;
}