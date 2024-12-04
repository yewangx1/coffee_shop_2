document.addEventListener('DOMContentLoaded', () => {
    const loginButton = document.getElementById('login-btn');
    const loginForm = document.getElementById('login-form');
    const closeButtons = loginForm.querySelectorAll('button[type="button"]');

    loginButton.addEventListener('click', (e) => {
        e.preventDefault();
        loginForm.classList.remove('hidden');
    });

    closeButtons.forEach(button => {
        button.addEventListener('click', () => {
            loginForm.classList.add('hidden');
        });
    });
});

function validateForm() {
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    let valid = true;

    if (!email.checkValidity()) {
        email.classList.add('invalid');
        valid = false;
    } else {
        email.classList.remove('invalid');
    }

    if (!password.checkValidity()) {
        password.classList.add('invalid');
        valid = false;
    } else {
        password.classList.remove('invalid');
    }

    return valid;
}