# 2 Examen 

Importante:

    - Crear un proyecto nuevo en el disco D.
    - Agregar un comentario con su nombre, apellido, DNI y numero de comision al inicio del app.html
    - Recordar guardar las actualizaciones de codigo o activar el Auto Save de VSC. Es responsabilidad del alumno verificar que version del proyecto se entrega. Una vez enviado el examen, no se aceptaran cambios sin excepcion.
    - Todo codigo comentado no sera corregido sin excepcion.
    - Luego de crear el proyecto, agregar el archivo db.json.

## Consigna

Se debera desarrollar una aplicacion en Angular que permita gestionar un listado de clientes, utilizando el debido enrutamiento, servicios HTTPClient con JSON Server y formularios reactivos con validaciones. Para ello, se solicita:

## 1. 10 Puntos

Crear un Modelo llamado Cliente que cuente con los atributos: id, nombre, empresa, email, telefono y comentarios.

## 2. 10 Puntos

Crear todos los componentes necesarios y realizar el correspondiente enrutamiento.

## 3. 10 Puntos

El/los formularios utilizados deben ser formularios reactivos e implementar las siguientes validaciones:

- nombre: obligatorio, minimo 3 caracteres.
- empresa: obligatorio.
- email: obligatorio, maximo 300 caracteres.
- telefono: obligatorio, solo numeros (Validators.pattern('^[0-9]+$)), minimo 8 caracteres.
- comentarios: opcional, maximo 200 caracteres.

Para cada input invalido se debera mostrar un mensaje personalizado que indique el dato incorrecto.

## 4. 10 Puntos

Crear un servicio que utilice HttpClient para realizar las 4 peticiones http (get - post - put - delete).

## 5. 40 Puntos

Utilizar el servicio mencionado en el inciso anterior para lograr que dichas peticiones se visualicen y completen su funcionamiento en los componentes correspondientes. Para ello, se especifica que: 

- El metodo GET debe mostrar la lista de clientes junto a los botones, 'editar', 'eliminar' y 'ver detalle'.
- El metodo POST debe permitir cargar un nuevo cliente solo si todos los datos ingresados son correctos. Si algun dato es invalido, no solo no se debera cargar, sino que tambien se debera notificar al usuario cual es el dato erroneo.
- El metodo DELETE, debera permitir eliminar un cliente preexistente y al hacerlo, debera notificar al usuario de este cambio exitoso mediante un alert() y redirigir al usuario a la lista nuevamente.
- El metodo PUT debera permitir editar un cliente preexistente, con todas las validaciones ya mencionadas para el post. En caso de no cumplir con algun campo, no permitir la edicion y notificar al usuario el campo erroneo. En caso de cumplir con la edicion, notificar al usuario con un alert() y redireccionar a la lista de clientes.

## 6. 10 Puntos

En el listado de Clientes, agregar un boton 'ver detalle' que muestre todos los detalles de un cliente especifico.

## 7. 10 Puntos

Garantizar que todo el codigo se encuentre con un correcto maquetado semantico. Ademas, manipular adecuadamente cada posibilidad de error utilizando los alert() como medio para notificar al usuario si algo salio mal. Hacer un codigo prolijo, correctamente indentado, y agregar comentarios de ser necesario.

## Datos a recordar

- Para ejecutar el json-server deberan colocar en la terminal: json-server --watch db.json --port 3000
- Para utilizar formularios reactivos deben importar 'ReactiveFormsModule' en el .ts correspondiente
- Para utilizar HTTPClient deben agregar 'provideHttpClient()' en app.config.ts