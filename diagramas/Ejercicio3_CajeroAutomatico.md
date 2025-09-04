# EJERCICIO 3: CAJERO AUTOMÁTICO (ATM)

## ENUNCIADO
El cliente inserta su tarjeta. El cajero valida la tarjeta con el banco. Si es válida, pide el PIN. El cliente ingresa el PIN, el banco valida. Si es correcto, permite retirar dinero.

## OBJETOS IDENTIFICADOS
- **Cliente** (Actor): Usuario del cajero automático
- **Cajero** (Objeto de Control): Sistema ATM
- **Banco** (Objeto de Control): Sistema bancario que valida
- **Tarjeta** (Objeto de Entidad): Tarjeta del cliente

## MÉTODOS
- `validarTarjeta()`: Verificar que la tarjeta sea válida
- `ingresarPIN()`: Cliente introduce su código PIN
- `validarPIN()`: Banco verifica el PIN ingresado
- `retirarDinero()`: Proceso de retiro de efectivo

## DIAGRAMA DE SECUENCIA

```
     Cliente          Cajero            Banco           Tarjeta
        |                |                |                |
        |--insertarTarjeta()------------->|                |
        |                |                |                |
        |                |--validarTarjeta()------------->|
        |                |                |                |
        |                |<-----------confirmación---------|
        |                |                |                |
        |<--solicitarPIN()-|                |                |
        |                |                |                |
        |--ingresarPIN()-->|                |                |
        |                |                |                |
        |                |--validarPIN()-->|                |
        |                |                |                |
        |                |<---confirmación--|                |
        |                |                |                |
        |<--permitirRetiro-|                |                |
        |                |                |                |
        |--retirarDinero()->|                |                |
        |                |                |                |
```

## DESCRIPCIÓN DEL FLUJO
1. Cliente inserta la tarjeta en el cajero automático
2. Cajero solicita validación de la tarjeta al banco
3. Si la tarjeta es válida, el cajero solicita el PIN al cliente
4. Cliente ingresa su PIN
5. Cajero envía PIN al banco para validación
6. Si el PIN es correcto, se permite el retiro de dinero
7. Cliente procede a retirar la cantidad deseada

## ESCENARIOS ALTERNATIVOS
- **Tarjeta inválida**: Cajero rechaza la tarjeta y la devuelve
- **PIN incorrecto**: Sistema solicita reingresar PIN (máximo 3 intentos)
- **Saldo insuficiente**: Banco rechaza la transacción
- **Cajero sin efectivo**: No se puede realizar el retiro
