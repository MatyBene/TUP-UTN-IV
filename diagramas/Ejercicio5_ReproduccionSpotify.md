# EJERCICIO 5: REPRODUCCIÓN EN SPOTIFY

## ENUNCIADO
El usuario elige una canción en una lista de reproducción. El sistema busca la canción, obtiene la URL desde el servidor de música y comienza a reproducirla en el reproductor.

## OBJETOS IDENTIFICADOS
- **Usuario** (Actor): Persona que usa Spotify
- **Lista** (Objeto de Entidad): Lista de reproducción con canciones
- **Sistema** (Objeto de Control): Lógica de Spotify
- **Servidor** (Objeto de Control): Servidor de archivos musicales
- **Reproductor** (Objeto de Control): Componente de reproducción

## MÉTODOS
- `seleccionarCancion()`: Usuario elige una canción específica
- `obtenerCancion(id)`: Lista proporciona datos de la canción
- `buscarCancion(cancion)`: Sistema busca la canción en el servidor
- `obtenerURL(cancion)`: Servidor devuelve la URL del archivo
- `reproducir(url)`: Reproductor inicia la reproducción

## DIAGRAMA DE SECUENCIA

```
   Usuario     Lista     Sistema    Servidor   Reproductor
      |          |         |          |           |
      |--seleccionarCancion()-------->|           |
      |          |         |          |           |
      |          |<--obtenerCancion(id)--|        |
      |          |         |          |           |
      |          |-------->|          |           |
      |          |         |          |           |
      |          |         |--buscarCancion()---->|
      |          |         |          |           |
      |          |         |<--obtenerURL()-------|
      |          |         |          |           |
      |          |         |--reproducir(url)----------->|
      |          |         |          |           |
      |<---------reproduciendo---------|          |           |
      |          |         |          |           |
```

## DESCRIPCIÓN DEL FLUJO
1. Usuario selecciona una canción de su lista de reproducción
2. Lista proporciona al sistema los datos de la canción (ID, título, artista)
3. Sistema busca la canción en el servidor de música
4. Servidor devuelve la URL donde está almacenado el archivo de audio
5. Sistema envía la URL al reproductor para iniciar la reproducción
6. Reproductor comienza a reproducir la canción y notifica al usuario

## ESCENARIOS ALTERNATIVOS
- **Canción no encontrada**: Servidor no tiene el archivo disponible
- **Error de conexión**: No se puede conectar al servidor de música
- **Sin conexión a internet**: Usuario en modo offline
- **Canción no disponible en región**: Restricciones geográficas
- **Suscripción vencida**: Usuario sin acceso premium
