function Terminarclase() {
    const radios = document.querySelectorAll('input[type="radio"]');
    const asistenciaCompleta = Array.from(radios).some((radio) => radio.checked);

    if (asistenciaCompleta) {
        Swal.fire({
            title: '¿Estás seguro de terminar la clase?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Sí, terminar',
            cancelButtonText: 'Cancelar'
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire('Clase finalizada con éxito', '', 'success').then(() => {
                    // Redirecciona a otra página cuando se confirma la terminación de la clase
                    window.location.href = 'listadoasistencia.html';
                });
            }
        });
    } else {
        Swal.fire({
            title: 'Oops...',
            text: 'Debes marcar la asistencia de al menos un estudiante.',
            icon: 'error',
        });
    }
}

function logout() { 
    document.getElementById('cerrarSesion').addEventListener('click', function (event) {
        // Evita que el enlace redireccione inmediatamente
        event.preventDefault();

        // Desactiva el botón para evitar clics repetidos
        document.getElementById('cerrarSesion').classList.add('disabled');
        
        // Oculta el texto del botón y muestra la animación de carga
        document.getElementById('botonTexto').style.display = 'none';
        document.getElementById('animacionCarga').style.display = 'inline-block';

        // Simula una pausa de 2 segundos (2000 milisegundos)
        setTimeout(function () {
            // Redirige al usuario a la página de inicio de sesión
            window.location.href = "login.html";
        }, 2000);
    });
}
function mostrarConfirmacion() {
    Swal.fire({
        title: '¿Estás seguro de iniciar la clase?',
        icon: 'question',
        showCancelButton: true,
        confirmButtonText: 'Sí, iniciar',
        cancelButtonText: 'Cancelar'
    }).then((result) => {
        if (result.isConfirmed) {
            // Redirige a la página de asistencia.html
            window.location.href = 'asistencia.html';
        }
    });
}






