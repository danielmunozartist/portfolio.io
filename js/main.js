
document.addEventListener('DOMContentLoaded', function () {
    // Obtener el formulario por su ID
    var loginForm = document.getElementById('loginForm');

    // Agregar un evento de escucha para el envío del formulario
    loginForm.addEventListener('submit', function (event) {
        // Evitar que el formulario se envíe de forma predeterminada
        event.preventDefault();

        // Obtener el valor de la contraseña
        var password = document.getElementById('floatingPassword').value;

        // Verificar si la contraseña es correcta
        if (password === '12345') {
            // Establecer la cookie de autenticación
            document.cookie = 'authenticated=true;path=/';

            // Redirigir a galeria.html
            window.location.href = 'galeria.html';
        } else {
            // Mostrar un mensaje de error o realizar otras acciones si la contraseña no es correcta
            alert('Contraseña incorrecta. Inténtalo de nuevo.');
        }
    });
});


