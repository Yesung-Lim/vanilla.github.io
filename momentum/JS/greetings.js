const logInForm = document.querySelector("#login-form");
const logInText = logInForm.querySelector("input:first-child");
const greeting = document.querySelector("#greeting");
const HIDDEN_CLASS = "hidden";
const USER_NAME = "username";

function greetUser(username) {
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASS);
}

function handleLogInSubmit(event) {
    event.preventDefault();
    logInForm.classList.add(HIDDEN_CLASS);
    localStorage.setItem(USER_NAME, logInText.value);
    greetUser(logInText.value);
}

function loadUser() {
    const savedUserName = localStorage.getItem(USER_NAME);

    if(savedUserName === null) {
        logInForm.classList.remove(HIDDEN_CLASS);
    } else {
        greetUser(savedUserName);
    }
}

logInForm.addEventListener("submit", handleLogInSubmit);
loadUser();