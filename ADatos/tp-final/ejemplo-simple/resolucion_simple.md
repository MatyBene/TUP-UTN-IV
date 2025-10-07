# TPI Steam - Versión Simple

## 1. Kickoff del proyecto

Somos **SimpleGames**, un estudio indie de 2 personas que quiere hacer un juego de cartas como Balatro. Necesitamos analizar Steam para ver qué funciona y qué precio poner.

## 2. Objetivos

### Objetivo 1: Encontrar el mejor género para nuestro juego
- **KR 1**: Identificar si Card Games o Puzzle games tienen más éxito
- **KR 2**: Ver qué precio usan los juegos exitosos similares

### Objetivo 2: Hacer un juego que enganche
- **KR 1**: Encontrar juegos con más de 500 minutos de playtime promedio
- **KR 2**: Conseguir más del 85% de reviews positivas

## 3. KPIs

### KPI 1: Popularidad por Género
- **Qué mide**: Cuántos juegos hay vs cuántas reviews positivas tienen
- **Fórmula**: Promedio de reviews positivas por género
- **Meta**: Géneros con más de 5000 reviews promedio

### KPI 2: Tiempo de Juego
- **Qué mide**: Cuánto tiempo juega la gente en promedio
- **Fórmula**: Promedio de minutos jugados por género
- **Meta**: Más de 300 minutos promedio

### KPI 3: Precio vs Satisfacción
- **Qué mide**: Si vale la pena el precio que cobran
- **Fórmula**: Reviews positivas dividido precio
- **Meta**: Más de 1000 reviews por dólar

## 4. Dashboard

Haremos 3 gráficos simples:

1. **Barras**: Géneros vs Reviews Promedio
2. **Scatter**: Precio vs Tiempo de Juego 
3. **Tabla**: Top 10 juegos de cartas exitosos

---

## Datos que necesitamos limpiar

De la tabla Excel, vamos a usar solo:

### Campos principales:
- `name` (nombre del juego)
- `genres` (separar por ";")
- `price` (precio)
- `positive_ratings` (reviews buenas)
- `negative_ratings` (reviews malas)
- `average_playtime` (minutos jugados)

### Transformaciones simples:

1. **Calcular satisfacción**:
   ```
   satisfaction = positive_ratings / (positive_ratings + negative_ratings)
   ```

2. **Separar géneros**:
   ```
   Si genres = "Card Game;Strategy"
   Crear filas separadas o columnas is_card_game = TRUE
   ```

3. **Categorizar precios**:
   ```
   Free (0), Barato (1-10), Normal (11-25), Caro (26+)
   ```

4. **Filtrar juegos relevantes**:
   ```
   Solo: Card Game, Puzzle, Strategy, Casual
   Solo: Precio menos de $30
   Solo: Más de 100 reviews
   ```

### Pasos en Excel:

1. Filtrar datos relevantes
2. Crear columna `satisfaction = N2/(N2+O2)`
3. Crear columna `price_category` con IF
4. Crear columna `is_card_game` buscando "Card" en géneros
5. Subir a Looker Studio y hacer gráficos

**Resultado esperado**: Saber si hacer un Card Game a $15 es buena idea o no.