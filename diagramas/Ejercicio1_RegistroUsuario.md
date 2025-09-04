# EJERCICIO 1: REGISTRO DE USUARIO

## ENUNCIADO
Un usuario ingresa al sistema y completa un formulario de registro. El sistema valida los datos, guarda el nuevo usuario en la base de datos y devuelve un mensaje de confirmación.

## OBJETOS IDENTIFICADOS
- **Usuario** (Actor): Persona que se registra en el sistema
- **Formulario** (Objeto de Interfaz): Interfaz para capturar datos
- **Sistema** (Objeto de Control): Lógica de validación y control
- **BD** (Objeto de Datos): Base de datos para almacenar usuarios

## MÉTODOS
- `completarFormulario()`: Usuario llena los datos del formulario
- `validarDatos()`: Sistema verifica la información ingresada
- `guardarUsuario()`: Almacena el usuario en la base de datos
- `confirmarRegistro()`: Envía confirmación al usuario

## DIAGRAMA DE SECUENCIA

```
     Usuario          Formulario         Sistema            BD
        |                 |                |                |
        |--completarFormulario()---------->|                |
        |                 |                |                |
        |                 |             validarDatos()      |
        |                 |                |                |
        |                 |                |--guardarUsuario()-->|
        |                 |                |                |
        |                 |                |<----confirmación----|
        |                 |                |                |
        |<--------confirmarRegistro()------|                |
        |                 |                |                |
```

## DESCRIPCIÓN DEL FLUJO
1. El usuario completa el formulario con sus datos personales
2. El sistema valida formato de email, fortaleza de contraseña y campos obligatorios
3. Si la validación es exitosa, se guarda el usuario en la base de datos
4. El sistema confirma el registro exitoso al usuario

## ESCENARIOS ALTERNATIVOS
- **Validación fallida**: Sistema retorna error sin guardar
- **Error en BD**: Base de datos no puede guardar el usuario
- **Email duplicado**: El email ya existe en el sistema
