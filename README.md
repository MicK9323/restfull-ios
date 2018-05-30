# API REST

API Rest construida con NodeJS y MongoDB e implementada en Azure para el proyecto de Aplicaciones Moviles II (iOS).
!(http://www.mcaproyectos.com/public_images/mongo.jpg)
***

## RUTAS
A continuación se describen las rutas que emplearemos, recomiendo probarlas en la aplicación POSTMAN

### BASE
La ruta base del proyecto es: 

<https://mongoios-services.azurewebsites.net/api>

### TEST
Para comprobar que el servidor esta oyendo las peticiones que realizamos se puede testear haciendo una peticion GET al siguiente endpoint:

<https://mongoios-services.azurewebsites.net/api/test>

Deberia mostrar lo siguiente como respuesta:
~~~
{
    "success": true,
    "mensaje": "Api a la espera de peticiones!!"
}
~~~

## USUARIOS
***
### LOGIN
Para autenticar un usuario en la aplicación se deberá hacer una petición POST al siguiente endpoint:

<https://mongoios-services.azurewebsites.net/api/usuarios/login>

Enviando en el cuerpo de la peticion los parametros correo y clave.

- Si se realiza la autenticación exitosamente, el cuerpo de la respuesta sera el siguiente.
~~~
{
    "success": true,
    "mensaje": "Usuario Autenticado",
    "usuario": {
        "_id": "5b09ccba75396136dc2da8bf",
        "dni": "70417573",
        "nombre": "Miguel",
        "apellido": "Cortegana",
        "direccion": "Comas",
        "correo": "mcortegana93@gmail.com",
        "clave": "12345",
        "__v": 0
    }
}
~~~

- Si las credenciales son invalidas, el cuerpo de la respuesta será el siguiente:

~~~
{
    "success": false,
    "mensaje": "Credenciales incorrectas"
}
~~~

### REGISTRO
Para registrar un nuevo usuario la petición POST deberá apuntar al endpoint:

<https://mongoios-services.azurewebsites.net/api/usuarios>

Deberemos enviar los atributos dni, nombre, apellido, direccion, correo y clave en el cuerpo de la petición.

El cuerpo de la respuesta al registrar un nuevo usuario sera:

~~~
{
    "success": true,
    "mensaje": "Registro exitoso",
    "usuario": {
        "_id": "5b0e607b8d47ae2688892f62",
        "dni": "54128521",
        "nombre": "Jane",
        "apellido": "Doe",
        "direccion": "Comas",
        "correo": "jane-doe@gmail.com",
        "clave": "45612",
        "__v": 0
    }
}
~~~
