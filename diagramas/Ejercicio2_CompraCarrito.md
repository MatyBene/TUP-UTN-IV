# EJERCICIO 2: COMPRA EN CARRITO

## ENUNCIADO
Un cliente selecciona un producto y lo agrega al carrito. El carrito recalcula el total y muestra el nuevo importe.

## OBJETOS IDENTIFICADOS
- **Cliente** (Actor): Usuario que realiza la compra
- **Producto** (Objeto de Entidad): Artículo a comprar
- **Carrito** (Objeto de Control): Gestor de productos seleccionados
- **Pantalla** (Objeto de Interfaz): Muestra información al cliente

## MÉTODOS
- `seleccionarProducto()`: Cliente elige un producto específico
- `agregarProducto()`: El producto se añade al carrito
- `calcularTotal()`: El carrito recalcula el importe total
- `mostrarTotal()`: La pantalla presenta el nuevo total

## DIAGRAMA DE SECUENCIA

```
     Cliente          Producto          Carrito          Pantalla
        |                |                |                |
        |--seleccionarProducto()--------->|                |
        |                |                |                |
        |                |<--agregarProducto()-------------|
        |                |                |                |
        |                |             calcularTotal()     |
        |                |                |                |
        |                |                |----mostrarTotal()-->|
        |                |                |                |
        |<-------------------------------|                |
        |                |                |                |
```

## DESCRIPCIÓN DEL FLUJO
1. El cliente selecciona un producto del catálogo
2. El carrito agrega el producto a la lista de compras
3. El carrito recalcula automáticamente el total (precio + impuestos + descuentos)
4. La pantalla muestra el total actualizado al cliente

## ESCENARIOS ALTERNATIVOS
- **Producto sin stock**: Carrito informa que no hay disponibilidad
- **Límite de cantidad**: Se alcanza el máximo permitido por producto
- **Aplicación de descuentos**: Cupones o promociones especiales
