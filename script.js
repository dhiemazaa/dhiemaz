// Login Form
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const messageElement = document.getElementById('message');

    if (username === 'iyajelek' && password === 'betulbanget') {
        window.location.href = 'dashboard.html';
    } else {
        messageElement.textContent = 'Username atau password salah!';
    }
});

// Menghubungkan ke dashboard.html (jika ada tombol di dashboard)
document.getElementById('goToDashboard')?.addEventListener('click', function() {
    window.location.href = 'dashboard.html'; // Arahkan ke dashboard
});