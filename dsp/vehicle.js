document.addEventListener('DOMContentLoaded', function() {
    const userName = localStorage.getItem('userName');
    document.getElementById('welcome-message').textContent = `Hi, ${userName}! Select your vehicle type:`;
    
    document.getElementById('select-bike').addEventListener('click', function() {
        window.location.href = 'bike.html';
    });

    document.getElementById('select-car').addEventListener('click', function() {
        window.location.href = 'car.html';
    });
});
