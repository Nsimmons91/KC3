/*
Print a message inside the div with the error class whenever the user submits a blank form (JS)
Handle failure icon visibility (CSS). Hint: check the HTML for the error-classes
Handle the success icon visibility if a user completes all inputs and submits (CSS)
Ensure password must have more that 8 letters
Email can not be empty
Bonus
Change the success/failure icons according to successful input values or incorrect input values


Pseudocode:
Failure icon visible upon empty form submission using the error class, change icon to red
Success icon visible upon user input and submit, change icon to green

Handle user inputs on user input area id (username, password, email), then grab value

Check if user input is 8 letters long for the password, and handle with a failure icon if not 8 letters
Check that the email has more than zero length input, has an '@', required attribute, find regex to help meet this pattern => [letters/numbers/punctuation]@[letters].[letters]

How do we make success / failure icon invisible
Activate click on submit ID and conditionally do these things
  username => failure_icon ? empty : success_icon
  email => failure_icon ? zero length or not meeting the pattern : success_icon
  password => failure_icon ? is < 8 chars : success_icon

*/

// make success icons invisible




// Access the success and failure icons
const successIcons = document.getElementsByClassName("far fa-check-circle success-icon");
const failureIcons = document.getElementsByClassName("fas fa-exclamation-circle failure-icon");


// Hide success icons initially
successIcons[0].style.visibility = 'hidden';
successIcons[1].style.visibility = 'hidden';
successIcons[2].style.visibility = 'hidden';


// Hide failure icons initially
failureIcons[0].style.visibility = 'hidden';
failureIcons[1].style.visibility = 'hidden';
failureIcons[2].style.visibility = 'hidden';


// Valid email regex
const correctEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;


// Activate click on submit ID and conditionally do these things
document.getElementById('submit').addEventListener('click', (event) => {
    event.preventDefault();


    // Grab error message elements
    const userNameError = document.getElementsByClassName('error')[0];
    const emailError = document.getElementsByClassName('error')[1];
    const passwordError = document.getElementsByClassName('error')[2];


    // Change style of the messages
    userNameError.style.color = 'red';
    emailError.style.color = 'red';
    passwordError.style.color = 'red';


    // Handle user inputs (username, email, password)
    const username = document.getElementById('username').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();


    // Clear previous errors
    userNameError.innerText = '';
    emailError.innerText = '';
    passwordError.innerText = '';


    // Validation variable
    let isValid = true;


    // Username validation
    if (username === '') {
        userNameError.innerText = "Hey, what's your username?";
        failureIcons[0].style.visibility = "visible";
        successIcons[0].style.visibility = "hidden";
        isValid = false;
    } else {
        successIcons[0].style.visibility = "visible";
        failureIcons[0].style.visibility = "hidden";
    }


    // Email validation
    if (email === '') {
        emailError.innerText = "Hello, don't forget to put your email";
        failureIcons[1].style.visibility = "visible";
        successIcons[1].style.visibility = "hidden";
        isValid = false;
    } else if (!correctEmail.test(email)) {
        emailError.innerText = "Please enter a valid email";
        failureIcons[1].style.visibility = "visible";
        successIcons[1].style.visibility = "hidden";
        isValid = false;
    } else {
        successIcons[1].style.visibility = "visible";
        failureIcons[1].style.visibility = "hidden";
    }


    // Password validation
    if (password === '') {
        passwordError.innerText = "Yo Yo Yo, your password is empty";
        failureIcons[2].style.visibility = "visible";
        successIcons[2].style.visibility = "hidden";
        isValid = false;
    } else if (password.length < 8) {
        passwordError.innerText = "Oops, it has to be at least 8 characters";
        failureIcons[2].style.visibility = "visible";
        successIcons[2].style.visibility = "hidden";
        isValid = false;
    } else {
        successIcons[2].style.visibility = "visible";
        failureIcons[2].style.visibility = "hidden";
    }


    // If all fields are valid return message
    if (isValid) {
        console.log('Form submitted successfully:', { username, email, password });
    }
});
