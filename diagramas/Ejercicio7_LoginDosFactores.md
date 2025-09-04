# EJERCICIO 7: LOGIN CON AUTENTICACIÓN DE DOS PASOS

## ENUNCIADO
El usuario ingresa su email y contraseña. El sistema valida con la base de datos. Luego envía un código de verificación por SMS. El usuario ingresa el código y el sistema valida. Finalmente, el usuario accede.

## OBJETOS IDENTIFICADOS
- **Usuario** (Actor): Persona que intenta acceder al sistema
- **Sistema** (Objeto de Control): Aplicación que gestiona la autenticación
- **BD** (Objeto de Datos): Base de datos con credenciales de usuarios
- **ServicioSMS** (Objeto de Control): Servicio externo de mensajería

## MÉTODOS
- `ingresarCredenciales()`: Usuario ingresa email y contraseña
- `validarUsuario(email, pass)`: Sistema verifica credenciales
- `consultarUsuario(email, pass)`: BD busca y valida usuario
- `enviarCodigo2FA()`: Sistema solicita envío de código
- `enviarCodigo(telefono)`: ServicioSMS envía código por SMS
- `ingresarCodigo()`: Usuario ingresa código recibido
- `validarCodigo()`: Sistema verifica el código 2FA
- `concederAcceso()`: Sistema permite el acceso al usuario

## DIAGRAMA DE SECUENCIA

```
  Usuario    Sistema      BD      ServicioSMS
     |          |         |           |
     |--ingresarCredenciales()------->|
     |          |         |           |
     |          |--validarUsuario()-->|
     |          |         |           |
     |          |<--consultarUsuario()-|
     |          |         |           |
     |          |--enviarCodigo2FA()--------->|
     |          |         |           |
     |          |<----enviarCodigo()----------|
     |          |         |           |
     |<--solicitarCodigo()-|         |           |
     |          |         |           |
     |--ingresarCodigo()-->|         |           |
     |          |         |           |
     |          |--validarCodigo()-->|           |
     |          |         |           |
     |          |<--confirmacion------|           |
     |          |         |           |
     |<--concederAcceso()--|         |           |
     |          |         |           |
```

## DESCRIPCIÓN DEL FLUJO
1. Usuario ingresa su email y contraseña en el formulario de login
2. Sistema valida las credenciales consultando la base de datos
3. Si las credenciales son correctas, sistema solicita envío de código 2FA
4. ServicioSMS envía un código de verificación al teléfono del usuario
5. Sistema solicita al usuario que ingrese el código recibido
6. Usuario ingresa el código de verificación
7. Sistema valida que el código sea correcto y no haya expirado
8. Si todo es válido, sistema concede acceso al usuario

## ESCENARIOS ALTERNATIVOS
- **Credenciales incorrectas**: BD no encuentra usuario o contraseña errónea
- **Código 2FA incorrecto**: Usuario ingresa código inválido
- **Código expirado**: El código 2FA ha vencido (generalmente 5-10 minutos)
- **Error en SMS**: ServicioSMS no puede enviar el mensaje
- **Usuario sin número**: No tiene número de teléfono registrado
- **Múltiples intentos fallidos**: Sistema bloquea temporalmente la cuenta
