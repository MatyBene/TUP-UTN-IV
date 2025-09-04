# EJERCICIO 4: PAGO EN CAFETERÍA LATTE&CODE

## ENUNCIADO
El cliente confirma un pedido. El sistema calcula el total, aplica un cupón si corresponde, y envía el monto final al medio de pago elegido (tarjeta/transferencia/mercadoPago). El pago devuelve confirmación y se actualiza el estado del pedido.

## OBJETOS IDENTIFICADOS
- **Cliente** (Actor): Usuario que realiza el pedido
- **Pedido** (Objeto de Entidad): Pedido con productos seleccionados
- **Sistema** (Objeto de Control): Lógica de negocio de la cafetería
- **Cupon** (Objeto de Entidad): Descuento aplicable
- **MedioPago** (Objeto de Control): Procesador de pagos

## MÉTODOS
- `confirmarPedido()`: Cliente confirma su orden
- `calcularTotal()`: Sistema calcula el monto total
- `aplicarCupon()`: Aplica descuento si hay cupón válido
- `validar()`: Valida el cupón de descuento
- `procesarPago()`: Procesa el pago con el medio elegido
- `actualizarEstado()`: Actualiza el estado del pedido

## DIAGRAMA DE SECUENCIA

```
   Cliente    Pedido    Sistema    Cupon    MedioPago
      |          |         |        |          |
      |--confirmarPedido()->|        |          |
      |          |         |        |          |
      |          |<-calcularTotal()--|        |          |
      |          |         |        |          |
      |          |         |--validar()------->|
      |          |         |        |          |
      |          |         |<---esValido()-----|
      |          |         |        |          |
      |          |         |--aplicarCupon()-->|
      |          |         |        |          |
      |          |         |--procesarPago()---------->|
      |          |         |        |          |
      |          |         |<----confirmación-----------|
      |          |         |        |          |
      |          |<--actualizarEstado()--|      |          |
      |          |         |        |          |
      |<-------confirmación-|        |          |
      |          |         |        |          |
```

## DESCRIPCIÓN DEL FLUJO
1. Cliente confirma su pedido en la cafetería
2. Sistema calcula el total de los productos seleccionados
3. Si hay un cupón, el sistema lo valida
4. Se aplica el descuento del cupón si es válido
5. Sistema envía el monto final al medio de pago seleccionado
6. El medio de pago procesa la transacción y devuelve confirmación
7. Sistema actualiza el estado del pedido a "pagado"
8. Cliente recibe confirmación del pago exitoso

## ESCENARIOS ALTERNATIVOS
- **Cupón inválido**: No se aplica descuento, continúa con precio original
- **Pago rechazado**: Medio de pago rechaza la transacción
- **Error de conexión**: No se puede procesar el pago temporalmente
- **Sin cupón**: Se procede directamente al pago sin descuentos
