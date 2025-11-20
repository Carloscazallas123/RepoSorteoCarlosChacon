# Manual de Empleo de Uso de Cookies
## Cookies seleccionadas:
- Nombre: Nombre del usuario
- Apellidos: Apellidos del usuario
- phone: Telefono del usuario 
- FechaNacimiento: Fecha de Nacmiento del usuario
- email: Correo electronico del usuario 

## Como comprobar la información almacenada en las Cookies

``` javascript
console.log(document.cookie)
```

## Como se implementa cada una de las Cookies
El momento de que el usuario ingrese sus datos, en el codigo de JavaScript hace lo siguiente:

### 1º Recoge el información de cada campo 
``` javascript
let nombrep = document.getElementById('nombre');
    let nombre= nombrep.value;


    let apellidosp = document.getElementById('apellidos');
    let apellidos= apellidosp.value;

    
    let telefonop = document.getElementById('phone');
    let telefono= telefonop.value;

    let emailp = document.getElementById('email');
    let email= emailp.value;

    let fechap = document.getElementById('Nacimiento');
    let fecha= fechap.value;
```

### 2º Se ingresa cada una de las Cookies
``` javascript
 document.cookie = "nombre=" + nombre + "; expires=" + fechaSorteo.toUTCString() + "; path=/";
    "apellidos=" + apellidos + "; expires=" + fechaSorteo.toUTCString() + "; path=/";
    document.cookie = "email=" + email + "; expires=" + fechaSorteo.toUTCString() + "; path=/";
    document.cookie = "telefono=" + telefono + "; expires=" + fechaSorteo.toUTCString() + "; path=/";
    document.cookie = "fechaNacimiento=" + fecha + "; expires=" + fechaSorteo.toUTCString() + "; path=/";
```