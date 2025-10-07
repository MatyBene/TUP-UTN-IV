# Datos para Normalizar - Versión Simple

## Solo usaremos estos campos del Excel:

### Campos originales:
- `name` → Mantener tal como está
- `genres` → Separar los que tengan "Card", "Puzzle", "Strategy"  
- `price` → Mantener números
- `positive_ratings` → Mantener números
- `negative_ratings` → Mantener números
- `average_playtime` → Mantener números

### Nuevos campos que crear:

#### 1. satisfaction
```
= positive_ratings / (positive_ratings + negative_ratings)
```

#### 2. price_category  
```
Si price = 0 → "Free"
Si price ≤ 10 → "Barato"  
Si price ≤ 25 → "Normal"
Si price > 25 → "Caro"
```

#### 3. is_card_game
```
Si "Card" aparece en genres → "SÍ"
Si no → "NO"
```

#### 4. is_puzzle_game
```
Si "Puzzle" aparece en genres → "SÍ"  
Si no → "NO"
```

## Filtros aplicar:

1. **Precio**: Solo juegos de $0 a $30
2. **Reviews**: Solo juegos con más de 100 reviews totales
3. **Géneros**: Solo Card, Puzzle, Strategy, Casual

## Resultado final:

Tabla con 8 columnas:
```
name | genres | price | positive_ratings | average_playtime | 
satisfaction | price_category | is_card_game
```

## Para Looker Studio:

Subir esta tabla simple y hacer:
- 1 gráfico de barras (géneros vs reviews)
- 1 scatter plot (precio vs playtime)  
- 1 tabla filtrada (solo card games)

**¡Súper simple y directo al grano!**