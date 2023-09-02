function validarFormulario() {
    var usuario = document.getElementById("ejemplo1").value;
    var contrasena = document.getElementById("Ejemplo2").value;
    
    if (usuario.trim() === "" && contrasena.trim() === "") {
      // Caso 1: Ambos campos están vacíos
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Debes llenar los campos de usuario y contraseña',
      });
    } else if (usuario.trim() === "") {
      // Caso 2: El campo de usuario está vacío
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Debes llenar el campo de usuario',
      });
    } else if (contrasena.trim() === "") {
      // Caso 3: El campo de contraseña está vacío
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Debes llenar el campo de contraseña',
      });
    } else {
      // Realiza aquí la lógica de inicio de sesión si ambos campos están llenos
      // Por ejemplo, puedes enviar los datos al servidor para la autenticación.
      // Aquí puedes agregar tu código para redireccionar a otra página.
      window.location.href = "index.html"; // Redirecciona al index.html
    }
}
