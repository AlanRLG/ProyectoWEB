function mostrarError(campo, mensaje, texto) {
    campo.classList.add("campo-invalido");
    campo.classList.remove("campo-valido");
    mensaje.textContent = texto;
    mensaje.classList.add("visible");
}

function mostrarValido(campo, mensaje) {
    campo.classList.remove("campo-invalido");
    campo.classList.add("campo-valido");
    mensaje.textContent = "";
    mensaje.classList.remove("visible");
}


var formProducto = document.getElementById("formProducto");

if (formProducto) {
    var codigo = document.getElementById("codigo");
    var nombre = document.getElementById("nombre");
    var categoria = document.getElementById("categoria");
    var precio = document.getElementById("precio");
    var existencias = document.getElementById("existencias");
    var descripcion = document.getElementById("descripcion");
    var imagen = document.getElementById("imagen");

    var errorCodigo = document.getElementById("errorCodigo");
    var errorNombre = document.getElementById("errorNombre");
    var errorCategoria = document.getElementById("errorCategoria");
    var errorPrecio = document.getElementById("errorPrecio");
    var errorExistencias = document.getElementById("errorExistencias");
    var errorDescripcion = document.getElementById("errorDescripcion");
    var errorImagen = document.getElementById("errorImagen");

    formProducto.onsubmit = function (evento) {
        evento.preventDefault();

        var valido = true;
        var codigoLimpio = codigo.value.trim().toUpperCase();
        var nombreLimpio = nombre.value.trim();
        var descripcionLimpia = descripcion.value.trim();
        var precioNumero = parseFloat(precio.value);
        var existenciasNumero = parseInt(existencias.value, 10);

        if (codigoLimpio === "") {
            mostrarError(codigo, errorCodigo, "Escribe el código del producto.");
            valido = false;
        } else if (!/^[A-Za-z]{3}-[0-9]{3}$/.test(codigoLimpio)) {
            mostrarError(codigo, errorCodigo, "Usa el formato ESC-017: tres letras, guion y tres dígitos.");
            valido = false;
        } else {
            codigo.value = codigoLimpio;
            mostrarValido(codigo, errorCodigo);
        }

        if (nombreLimpio === "") {
            mostrarError(nombre, errorNombre, "Escribe el nombre del producto.");
            valido = false;
        } else if (!/^[A-Za-zÁÉÍÓÚÜÑáéíóúüñ ]{3,60}$/.test(nombreLimpio)) {
            mostrarError(nombre, errorNombre, "Usa únicamente letras y espacios (3 a 60 caracteres).");
            valido = false;
        } else {
            mostrarValido(nombre, errorNombre);
        }

        if (categoria.value === "") {
            mostrarError(categoria, errorCategoria, "Selecciona una categoría.");
            valido = false;
        } else {
            mostrarValido(categoria, errorCategoria);
        }

        if (precio.value === "") {
            mostrarError(precio, errorPrecio, "Escribe el precio del producto.");
            valido = false;
        } else if (isNaN(precioNumero) || precioNumero <= 0 || precioNumero > 50000) {
            mostrarError(precio, errorPrecio, "El precio debe ser mayor que 0 y menor o igual a 50,000.");
            valido = false;
        } else {
            mostrarValido(precio, errorPrecio);
        }

        if (existencias.value === "") {
            mostrarError(existencias, errorExistencias, "Escribe la cantidad disponible.");
            valido = false;
        } else if (!/^[0-9]+$/.test(existencias.value) || existenciasNumero > 9999) {
            mostrarError(existencias, errorExistencias, "Escribe un número entero entre 0 y 9,999.");
            valido = false;
        } else {
            mostrarValido(existencias, errorExistencias);
        }

        if (descripcionLimpia === "") {
            mostrarError(descripcion, errorDescripcion, "Escribe la descripción del producto.");
            valido = false;
        } else if (descripcionLimpia.length < 10 || descripcionLimpia.length > 200) {
            mostrarError(descripcion, errorDescripcion, "La descripción debe tener entre 10 y 200 caracteres.");
            valido = false;
        } else {
            mostrarValido(descripcion, errorDescripcion);
        }

        if (imagen.files.length === 0) {
            mostrarError(imagen, errorImagen, "Selecciona una imagen del producto.");
            valido = false;
        } else if (!/\.(jpg|jpeg|png|svg|webp)$/i.test(imagen.files[0].name)) {
            mostrarError(imagen, errorImagen, "Selecciona un archivo JPG, JPEG, PNG, SVG o WEBP.");
            valido = false;
        } else {
            mostrarValido(imagen, errorImagen);
        }

        if (valido === false) {
            return;
        }

        alert("Producto registrado correctamente.");
        formProducto.reset();
    };

    formProducto.onreset = function () {
        window.setTimeout(function () {
            var campos = formProducto.querySelectorAll("input, select, textarea");
            var mensajes = formProducto.querySelectorAll(".mensaje-error");
            var i;

            for (i = 0; i < campos.length; i++) {
                campos[i].classList.remove("campo-invalido");
                campos[i].classList.remove("campo-valido");
            }

            for (i = 0; i < mensajes.length; i++) {
                mensajes[i].textContent = "";
                mensajes[i].classList.remove("visible");
            }
        }, 0);
    };
}


var formAdmin = document.getElementById("formAdmin");

if (formAdmin) {
    var correo = document.getElementById("correoAdmin");
    var contrasena = document.getElementById("contrasenaAdmin");
    var errorCorreo = document.getElementById("errorCorreoAdmin");
    var errorContrasena = document.getElementById("errorContrasenaAdmin");

    formAdmin.onsubmit = function (evento) {
        evento.preventDefault();

        var valido = true;
        var correoLimpio = correo.value.trim();

        if (correoLimpio === "") {
            mostrarError(correo, errorCorreo, "Escribe el correo electrónico.");
            valido = false;
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correoLimpio)) {
            mostrarError(correo, errorCorreo, "Escribe un correo con formato válido, por ejemplo usuario@dominio.mx.");
            valido = false;
        } else {
            mostrarValido(correo, errorCorreo);
        }

        if (contrasena.value === "") {
            mostrarError(contrasena, errorContrasena, "Escribe la contraseña.");
            valido = false;
        } else if (contrasena.value.length < 6) {
            mostrarError(contrasena, errorContrasena, "La contraseña debe tener al menos 6 caracteres.");
            valido = false;
        } else {
            mostrarValido(contrasena, errorContrasena);
        }

        if (valido === false) {
            return;
        }

        alert("Sesion Iniciada en: " + correoLimpio);
        formAdmin.reset();
        correo.classList.remove("campo-invalido", "campo-valido");
        contrasena.classList.remove("campo-invalido", "campo-valido");
        errorCorreo.textContent = "";
        errorCorreo.classList.remove("visible");
        errorContrasena.textContent = "";
        errorContrasena.classList.remove("visible");
    };
}
