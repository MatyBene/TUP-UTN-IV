# EJERCICIO 6: SISTEMA DE DELIVERY

## ENUNCIADO
El cliente hace un pedido. El sistema lo envía al restaurante. El restaurante confirma disponibilidad y asigna un repartidor. El repartidor acepta y el sistema actualiza el estado del pedido.

## OBJETOS IDENTIFICADOS
- **Cliente** (Actor): Usuario que hace el pedido
- **Sistema** (Objeto de Control): Plataforma de delivery
- **Restaurante** (Objeto de Control): Establecimiento que prepara comida
- **Repartidor** (Actor): Persona que entrega el pedido

## MÉTODOS
- `realizarPedido()`: Cliente hace su pedido
- `enviarPedido(restaurante)`: Sistema envía pedido al restaurante
- `confirmarDisponibilidad()`: Restaurante verifica si puede preparar
- `asignarRepartidor()`: Restaurante busca repartidor disponible
- `aceptarPedido()`: Repartidor acepta la entrega
- `actualizarEstado()`: Sistema actualiza estado del pedido

## DIAGRAMA DE SECUENCIA

```
   Cliente    Sistema    Restaurante    Repartidor
      |          |           |             |
      |--realizarPedido()-->|             |
      |          |           |             |
      |          |--enviarPedido()------->|
      |          |           |             |
      |          |<--confirmarDisponibilidad()--|
      |          |           |             |
      |          |           |--asignarRepartidor()-->|
      |          |           |             |
      |          |           |<--aceptarPedido()------|
      |          |           |             |
      |          |<--actualizarEstado()---|             |
      |          |           |             |
      |<--confirmarPedido()--|           |             |
      |          |           |             |
```

## DESCRIPCIÓN DEL FLUJO
1. Cliente realiza un pedido a través de la aplicación
2. Sistema envía el pedido al restaurante seleccionado
3. Restaurante verifica disponibilidad de productos y confirma
4. Restaurante busca y asigna un repartidor disponible
5. Repartidor revisa el pedido y acepta la entrega
6. Sistema actualiza el estado del pedido a "en preparación"
7. Cliente recibe confirmación de que su pedido fue aceptado

## ESCENARIOS ALTERNATIVOS
- **Restaurante sin disponibilidad**: No puede preparar algunos productos
- **Sin repartidores**: No hay repartidores disponibles en la zona
- **Repartidor rechaza**: Debe asignar otro repartidor
- **Cliente cancela**: Pedido se cancela antes de preparación
- **Restaurante cerrado**: No puede recibir pedidos en ese momento
