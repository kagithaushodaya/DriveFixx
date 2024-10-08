document.getElementById('login-button').addEventListener('click', function() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    // Hardcoded credentials
    const correctEmail = "dsp@gmail.com";
    const correctPassword = "dsp@123";

    if (email === correctEmail && password === correctPassword) {
        // Redirect to vehicle selection page
        window.location.href = 'vehicle.html';
    } else {
        // Show error message
        document.getElementById('error-message').innerText = "Please enter the correct email or password.";
    }
});