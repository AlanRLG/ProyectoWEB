# Tienda ESCOM — Sistema de Control de Inventario

Prototipo funcional para la Unidad de Aprendizaje **Tecnologías para el Desarrollo de Aplicaciones Web**, grupo 4CM5.

## Cómo abrir el proyecto

1. Conserva completa la carpeta `ProyectoWEB`.
2. Abre `index.html` en un navegador moderno.
3. Usa la barra superior para recorrer los cinco módulos.

No requiere servidor ni conexión a Internet: Bootstrap 5.3.3 está guardado dentro de `vendor/`.

## Páginas

- `index.html`: carrusel de cuatro ofertas y una sección informativa con accesos al catálogo, al inventario y al registro.
- `catalogo.html`: catálogo responsivo con 16 productos e ilustraciones SVG propias.
- `inventario.html`: tabla general y sección de existencias bajas; en pantallas angostas la tabla se convierte en fichas.
- `registro.html`: formulario de productos con validaciones y presentación de los datos capturados.
- `admin.html`: inicio de sesión simulado que muestra una confirmación de acceso.

## Estructura

```text
ProyectoWEB/
├── index.html
├── catalogo.html
├── inventario.html
├── registro.html
├── admin.html
├── css/
│   └── estilos.css
├── js/
│   └── validaciones.js
├── img/
│   ├── logos/
│   └── productos/
├── vendor/
│   └── bootstrap/
├── docs/
├── evidencias/
└── .gitignore
```

La carpeta `docs/` y la carpeta `evidencias/` se excluyen del control de versiones mediante `.gitignore`; se conservan localmente como apoyo para la entrega.

## Pruebas rápidas

### Registro inválido

1. Entra a `registro.html`.
2. Pulsa **Registrar producto** sin llenar el formulario.
3. Deben aparecer mensajes de error junto a cada campo obligatorio.

### Registro válido

Llena el formulario, por ejemplo:

- Código: `ESC-017`
- Nombre: `Bufanda ESCOM`
- Categoría: `Ropa`
- Precio: `180`
- Existencias: `6`
- Descripción: `Bufanda azul con logotipo bordado de ESCOM.`
- Imagen: cualquier JPG, JPEG, PNG, SVG o WEBP.

Al enviar deben mostrarse la confirmación y todos los datos capturados. Como las existencias son menores que 10, el estado debe ser **Existencia baja**.

### Admin

- Un correo sin `@` debe rechazarse.
- Una contraseña menor de 6 caracteres debe rechazarse.
- Cualquier correo con formato válido y contraseña de 6 o más caracteres debe mostrar la confirmación del acceso simulado con el correo ingresado.

## Alcance

Es un prototipo de interfaz. Los datos son demostrativos y no se guardan en una base de datos.
