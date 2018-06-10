# API REST

API Rest construida con NodeJS y MongoDB e implementada en Azure para el proyecto de Aplicaciones Moviles II (iOS).
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

## PRODUCTOS
***
### CATEGORIAS
Para listar las categorias existentes, realizar una petición GET al siguiente endpoint

<https://mongoios-services.azurewebsites.net/api/products/categories>
~~~
{
    "success": true,
    "mensaje": null,
    "result": [
        {
            "_id": "5b1cbbec36d4773e4c83ea3c",
            "categoria": "Bebidas"
        },
        {
            "_id": "5b1cbc0c36d4773e4c83ea3d",
            "categoria": "Alimentos"
        }
    ]
}
~~~

### SUBCATEGORIAS
Para listar las subcategorias existentes, realizar una petición GET al siguiente endpoint

<https://mongoios-services.azurewebsites.net/api/products/types>
~~~
{
    "success": true,
    "mensaje": null,
    "result": [
        {
            "_id": "5b1cedf036d4773e4c83eb1f",
            "tipo": "Bebidas de Temporada",
            "categoria": {
                "_id": "5b1cbbec36d4773e4c83ea3c",
                "categoria": "Bebidas"
            }
        },
        {
            "_id": "5b1cedf036d4773e4c83eb20",
            "tipo": "Bebidas A Base De Espresso",
            "categoria": {
                "_id": "5b1cbbec36d4773e4c83ea3c",
                "categoria": "Bebidas"
            }
        },
        {
            "_id": "5b1cedf036d4773e4c83eb21",
            "tipo": "Frappuccino",
            "categoria": {
                "_id": "5b1cbbec36d4773e4c83ea3c",
                "categoria": "Bebidas"
            }
        },
        {
            "_id": "5b1cedf036d4773e4c83eb22",
            "tipo": "Alternativas Al Cafe",
            "categoria": {
                "_id": "5b1cbbec36d4773e4c83ea3c",
                "categoria": "Bebidas"
            }
        },
        {
            "_id": "5b1cedf036d4773e4c83eb23",
            "tipo": "Novedades",
            "categoria": {
                "_id": "5b1cbc0c36d4773e4c83ea3d",
                "categoria": "Alimentos"
            }
        },
        {
            "_id": "5b1cedf036d4773e4c83eb24",
            "tipo": "Sandwiches",
            "categoria": {
                "_id": "5b1cbc0c36d4773e4c83ea3d",
                "categoria": "Alimentos"
            }
        },
        {
            "_id": "5b1cedf036d4773e4c83eb25",
            "tipo": "Postres",
            "categoria": {
                "_id": "5b1cbc0c36d4773e4c83ea3d",
                "categoria": "Alimentos"
            }
        }
    ]
}
~~~

### BUSCAR POR CATEGORIA
Para buscar los productos de una categoria enviar en el body del request POST el id de la categoria mediante un parametro "categoria"   
Endpoint: <https://mongoios-services.azurewebsites.net/api/products/categories>
~~~
{
    "success": true,
    "mensaje": null,
    "result": [
        {
            "_id": "5b1cffea36d47744e4fbb0ad",
            "nombre": "Chiken Panino",
            "imagen": "http://www.mcaproyectos.com/ios/alimentos/muffin.jpg",
            "precio": 2,
            "tipo": {
                "_id": "5b1cedf036d4773e4c83eb23",
                "tipo": "Novedades",
                "categoria": "5b1cbc0c36d4773e4c83ea3d"
            }
        },
        {
            "_id": "5b1cffea36d47744e4fbb0ae",
            "nombre": "Muffin",
            "imagen": "http://www.mcaproyectos.com/ios/alimentos/muffin.jpg",
            "precio": 2,
            "tipo": {
                "_id": "5b1cedf036d4773e4c83eb23",
                "tipo": "Novedades",
                "categoria": "5b1cbc0c36d4773e4c83ea3d"
            }
        },
        {
            "_id": "5b1cffea36d47744e4fbb0af",
            "nombre": "Chicken Ciabatta",
            "imagen": "http://www.mcaproyectos.com/ios/alimentos/muffin.jpg",
            "precio": 2,
            "tipo": {
                "_id": "5b1cedf036d4773e4c83eb24",
                "tipo": "Sandwiches",
                "categoria": "5b1cbc0c36d4773e4c83ea3d"
            }
        },
        {
            "_id": "5b1cffea36d47744e4fbb0b0",
            "nombre": "Capresse Sandwiches",
            "imagen": "http://www.mcaproyectos.com/ios/alimentos/muffin.jpg",
            "precio": 2,
            "tipo": {
                "_id": "5b1cedf036d4773e4c83eb24",
                "tipo": "Sandwiches",
                "categoria": "5b1cbc0c36d4773e4c83ea3d"
            }
        },
        {
            "_id": "5b1cffea36d47744e4fbb0b1",
            "nombre": "Croissant Mixto",
            "imagen": "http://www.mcaproyectos.com/ios/alimentos/muffin.jpg",
            "precio": 2,
            "tipo": {
                "_id": "5b1cedf036d4773e4c83eb24",
                "tipo": "Sandwiches",
                "categoria": "5b1cbc0c36d4773e4c83ea3d"
            }
        },
        {
            "_id": "5b1cffea36d47744e4fbb0b2",
            "nombre": "Triple Pollo Sandwiches",
            "imagen": "http://www.mcaproyectos.com/ios/alimentos/muffin.jpg",
            "precio": 2,
            "tipo": {
                "_id": "5b1cedf036d4773e4c83eb24",
                "tipo": "Sandwiches",
                "categoria": "5b1cbc0c36d4773e4c83ea3d"
            }
        },
        {
            "_id": "5b1cffea36d47744e4fbb0b3",
            "nombre": "Brioche Campesino",
            "imagen": "http://www.mcaproyectos.com/ios/alimentos/muffin.jpg",
            "precio": 2,
            "tipo": {
                "_id": "5b1cedf036d4773e4c83eb24",
                "tipo": "Sandwiches",
                "categoria": "5b1cbc0c36d4773e4c83ea3d"
            }
        },
        {
            "_id": "5b1cffea36d47744e4fbb0b4",
            "nombre": "Panino Vesubio",
            "imagen": "http://www.mcaproyectos.com/ios/alimentos/muffin.jpg",
            "precio": 2,
            "tipo": {
                "_id": "5b1cedf036d4773e4c83eb24",
                "tipo": "Sandwiches",
                "categoria": "5b1cbc0c36d4773e4c83ea3d"
            }
        },
        {
            "_id": "5b1cffea36d47744e4fbb0b5",
            "nombre": "Pavo y Queso",
            "imagen": "http://www.mcaproyectos.com/ios/alimentos/muffin.jpg",
            "precio": 2,
            "tipo": {
                "_id": "5b1cedf036d4773e4c83eb24",
                "tipo": "Sandwiches",
                "categoria": "5b1cbc0c36d4773e4c83ea3d"
            }
        },
        {
            "_id": "5b1cffea36d47744e4fbb0b6",
            "nombre": "Eggmont",
            "imagen": "http://www.mcaproyectos.com/ios/alimentos/muffin.jpg",
            "precio": 2,
            "tipo": {
                "_id": "5b1cedf036d4773e4c83eb24",
                "tipo": "Sandwiches",
                "categoria": "5b1cbc0c36d4773e4c83ea3d"
            }
        },
        {
            "_id": "5b1cffea36d47744e4fbb0b7",
            "nombre": "Cinnamon Roll",
            "imagen": "http://www.mcaproyectos.com/ios/alimentos/muffin.jpg",
            "precio": 2,
            "tipo": {
                "_id": "5b1cedf036d4773e4c83eb25",
                "tipo": "Postres",
                "categoria": "5b1cbc0c36d4773e4c83ea3d"
            }
        },
        {
            "_id": "5b1cffea36d47744e4fbb0b8",
            "nombre": "Muffin de Manzana",
            "imagen": "http://www.mcaproyectos.com/ios/alimentos/muffin.jpg",
            "precio": 2,
            "tipo": {
                "_id": "5b1cedf036d4773e4c83eb25",
                "tipo": "Postres",
                "categoria": "5b1cbc0c36d4773e4c83ea3d"
            }
        },
        {
            "_id": "5b1cffea36d47744e4fbb0b9",
            "nombre": "Muffin de Naranja y chocochips",
            "imagen": "http://www.mcaproyectos.com/ios/alimentos/muffin.jpg",
            "precio": 2,
            "tipo": {
                "_id": "5b1cedf036d4773e4c83eb25",
                "tipo": "Postres",
                "categoria": "5b1cbc0c36d4773e4c83ea3d"
            }
        },
        {
            "_id": "5b1cffea36d47744e4fbb0ba",
            "nombre": "Muffin Berries",
            "imagen": "http://www.mcaproyectos.com/ios/alimentos/muffin.jpg",
            "precio": 2,
            "tipo": {
                "_id": "5b1cedf036d4773e4c83eb25",
                "tipo": "Postres",
                "categoria": "5b1cbc0c36d4773e4c83ea3d"
            }
        },
        {
            "_id": "5b1cffea36d47744e4fbb0bb",
            "nombre": "Croissant francés",
            "imagen": "http://www.mcaproyectos.com/ios/alimentos/muffin.jpg",
            "precio": 2,
            "tipo": {
                "_id": "5b1cedf036d4773e4c83eb25",
                "tipo": "Postres",
                "categoria": "5b1cbc0c36d4773e4c83ea3d"
            }
        },
        {
            "_id": "5b1cffea36d47744e4fbb0bc",
            "nombre": "Galleta de avena & pasas",
            "imagen": "http://www.mcaproyectos.com/ios/alimentos/muffin.jpg",
            "precio": 2,
            "tipo": {
                "_id": "5b1cedf036d4773e4c83eb25",
                "tipo": "Postres",
                "categoria": "5b1cbc0c36d4773e4c83ea3d"
            }
        }
    ]
}
~~~

### BUSCAR POR SUBCATEGORIA
Para buscar los productos de una subcategoria enviar en el body del request de una peticion POST el id de la subcategoria mediante un parametro "tipo".   
Endpoint: <https://mongoios-services.azurewebsites.net/api/products/types>
~~~
{
    "success": true,
    "mensaje": null,
    "result": [
        {
            "_id": "5b1cffea36d47744e4fbb096",
            "nombre": "Cappuccino",
            "imagen": "http://www.mcaproyectos.com/ios/bebidas/cappuccino.jpg",
            "precio": 1.5,
            "tipo": {
                "_id": "5b1cedf036d4773e4c83eb1f",
                "tipo": "Bebidas de Temporada",
                "categoria": "5b1cbbec36d4773e4c83ea3c"
            }
        },
        {
            "_id": "5b1cffea36d47744e4fbb097",
            "nombre": "Manjar Blanco Cappuccino",
            "imagen": "http://www.mcaproyectos.com/ios/bebidas/cappuccino.jpg",
            "precio": 1.5,
            "tipo": {
                "_id": "5b1cedf036d4773e4c83eb1f",
                "tipo": "Bebidas de Temporada",
                "categoria": "5b1cbbec36d4773e4c83ea3c"
            }
        }
    ]
}
~~~

### BUSCAR POR ID
Para buscar un producto por su ID enviar este como un parametro "id" dentro del body de una peticion POST al endpoint:   
<https://mongoios-services.azurewebsites.net/api/products/id>
~~~
{
    "success": true,
    "mensaje": null,
    "result": {
        "_id": "5b1cffea36d47744e4fbb096",
        "nombre": "Cappuccino",
        "descripcion": "cafe con leche y espuma de leche",
        "imagen": "http://www.mcaproyectos.com/ios/bebidas/cappuccino.jpg",
        "precio": 1.5,
        "tipo": {
            "_id": "5b1cedf036d4773e4c83eb1f",
            "tipo": "Bebidas de Temporada",
            "categoria": "5b1cbbec36d4773e4c83ea3c"
        }
    }
}
~~~