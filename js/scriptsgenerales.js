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
