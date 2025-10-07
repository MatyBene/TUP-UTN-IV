# Guía Súper Simple - Paso a Paso

## Paso 1: Abrir Excel y filtrar
1. Abrir el archivo CSV de Steam
2. Filtrar por `price` menor a 30
3. Filtrar `genres` que contengan: Card, Puzzle, Strategy
4. Borrar filas con menos de 100 reviews totales

## Paso 2: Crear 3 columnas nuevas

### Columna 1: Satisfacción
```
En columna nueva "satisfaction":
=N2/(N2+O2)
```
*Esto divide reviews positivas entre total reviews*

### Columna 2: Categoría de precio
```
En columna nueva "price_category":
=IF(R2=0,"Free",IF(R2<=10,"Barato",IF(R2<=25,"Normal","Caro")))
```

### Columna 3: Es juego de cartas
```
En columna nueva "is_card_game":
=IF(SEARCH("Card",J2)>0,"SÍ","NO")
```

## Paso 3: Hacer tabla resumen

Crear tabla dinámica con:
- **Filas**: Géneros principales (Card Game, Puzzle, Strategy, etc.)
- **Valores**: 
  - Promedio de `positive_ratings`
  - Promedio de `average_playtime`
  - Promedio de `satisfaction`

## Paso 4: Subir a Looker Studio

1. Guardar Excel como CSV
2. En Looker Studio → Crear informe → Subir archivo
3. Hacer 3 gráficos:

### Gráfico 1: Barras por género
- X: Género
- Y: Promedio reviews positivas

### Gráfico 2: Puntos precio vs playtime  
- X: Precio
- Y: Average playtime
- Color: Género

### Gráfico 3: Tabla top juegos de cartas
- Filtrar: is_card_game = "SÍ"
- Mostrar: Nombre, precio, satisfaction, playtime
- Ordenar por: satisfaction (mayor a menor)

## Paso 5: Responder la pregunta

Mirar los gráficos y decidir:
- ¿Los Card Games tienen buenas reviews?
- ¿Qué precio usan los exitosos?
- ¿Cuánto tiempo juega la gente?

**Decisión**: Hacer Card Game a $X precio basado en datos.

---

## Fórmulas de Excel que necesitas:

```excel
Satisfaction: =N2/(N2+O2)
Price Category: =IF(R2=0,"Free",IF(R2<=10,"Barato","Normal"))
Is Card Game: =IF(ISERROR(SEARCH("Card",J2)),"NO","SÍ")
```

## Campos mínimos para Looker:
- name
- genres  
- price
- positive_ratings
- average_playtime
- satisfaction (calculado)
- price_category (calculado)
- is_card_game (calculado)

**¡Listo en 2 horas!**