document.getElementById('loginBtn').onclick = function() {
    document.getElementById('loginModal').style.display = 'block';
};

document.getElementsByClassName('close')[0].onclick = function() {
    document.getElementById('loginModal').style.display = 'none';
};

window.onclick = function(event) {
    if (event.target === document.getElementById('loginModal')) {
        document.getElementById('loginModal').style.display = 'none';
    }
};

function login() {
    // Simulación de inicio de sesión (cambia esto con tu lógica de autenticación real)
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    if (username === 'usuario' && password === 'contraseña') {
        alert('Inicio de sesión exitoso. ¡Bienvenido!');
        document.getElementById('loginModal').style.display = 'none';
    } else {
        alert('Nombre de usuario o contraseña incorrectos. Por favor, inténtalo de nuevo.');
    }
}

function toggleMenu() {
    var sideMenu = document.getElementById('side-menu');
    sideMenu.style.left = (sideMenu.style.left === "0px") ? "-250px" : "0px";
}