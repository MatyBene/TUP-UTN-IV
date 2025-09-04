# EJERCICIO 8: BIBLIOTECA EN LÍNEA

## ENUNCIADO
El alumno busca un libro en la biblioteca online. El sistema consulta el catálogo, verifica disponibilidad y devuelve al usuario el estado ("disponible" o "prestado").

## OBJETOS IDENTIFICADOS
- **Alumno** (Actor): Usuario que busca libros
- **Sistema** (Objeto de Control): Sistema de gestión bibliotecaria
- **Catalogo** (Objeto de Control): Base de datos de libros
- **Libro** (Objeto de Entidad): Libro específico en la colección

## MÉTODOS
- `buscarLibro(titulo)`: Alumno busca un libro específico
- `consultarCatalogo(titulo)`: Sistema busca en el catálogo
- `obtenerLibro(titulo)`: Catálogo localiza el libro
- `verificarDisponibilidad()`: Sistema verifica si está disponible
- `mostrarResultado()`: Sistema muestra el estado al alumno

## DIAGRAMA DE SECUENCIA

```
   Alumno     Sistema     Catalogo      Libro
      |          |           |           |
      |--buscarLibro(titulo)->|           |
      |          |           |           |
      |          |--consultarCatalogo()-->|
      |          |           |           |
      |          |           |--obtenerLibro()-->|
      |          |           |           |
      |          |           |<--datosLibro()-----|
      |          |           |           |
      |          |<--libroEncontrado()---|           |
      |          |           |           |
      |          |--verificarDisponibilidad()------>|
      |          |           |           |
      |          |<--estado()---------------------------|
      |          |           |           |
      |<--mostrarResultado()-|           |           |
      |          |           |           |
```

## DESCRIPCIÓN DEL FLUJO
1. Alumno ingresa el título del libro que desea buscar
2. Sistema consulta el catálogo con el título proporcionado
3. Catálogo busca y obtiene los datos del libro solicitado
4. Si el libro existe, catálogo devuelve la información al sistema
5. Sistema verifica la disponibilidad actual del libro (disponible/prestado)
6. Sistema muestra al alumno el resultado de la búsqueda con el estado

## ESCENARIOS ALTERNATIVOS
- **Libro no encontrado**: Catálogo no tiene el libro en su colección
- **Múltiples coincidencias**: Varios libros coinciden con la búsqueda
- **Libro reservado**: Está disponible pero reservado por otro usuario
- **Libro en mantenimiento**: Temporalmente no disponible
- **Búsqueda vacía**: Alumno no proporciona término de búsqueda
- **Error de conexión**: No se puede acceder al catálogo
