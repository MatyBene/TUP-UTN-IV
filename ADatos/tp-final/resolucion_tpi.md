# Resolución del Trabajo Práctico Integrador - Steam Analytics

## 1. Kickoff del proyecto

**IndieDreams Studio** es un estudio de desarrollo independiente conformado por 2 programadores sin experiencia previa en la industria del gaming. Inspirados por el éxito meteórico de **Balatro** (un juego de cartas roguelike que se convirtió en fenómeno viral), queremos crear nuestro primer juego comercial que capture esa misma magia: mecánicas simples pero profundamente adictivas, estilo visual distintivo y precio accesible.

Nuestro objetivo es analizar específicamente el mercado de juegos indie en Steam, enfocándonos en géneros como Card Game, Roguelike, Strategy y Casual para entender qué hace que un juego indie tenga éxito masivo. Queremos identificar las características exactas que convirtieron a juegos como Balatro en hits inesperados y replicar esa fórmula con nuestro toque único.

## 2. Objetivos: ¿Cuáles son los objetivos que queremos lograr?

### Objetivo 1: Replicar el Éxito de Juegos Indie Virales como Balatro
- **KR 1**: Identificar las características comunes de los 10 juegos indie más exitosos en géneros Card Game, Roguelike y Strategy (con menos de 50 empleados en el desarrollador)
- **KR 2**: Encontrar el "sweet spot" de precio que maximice ventas para juegos indie (análisis específico de juegos entre $5-25 USD)

### Objetivo 2: Crear un Juego con Alto Engagement y Longevidad
- **KR 1**: Analizar juegos indie con más de 1000 horas promedio de playtime para identificar mecánicas que generan adicción
- **KR 2**: Alcanzar un ratio de valoraciones positivas del 90%+ estudiando qué elementos generan reviews extremadamente positivas en el nicho indie

### Objetivo 3: Maximizar Visibilidad con Recursos Limitados
- **KR 1**: Identificar las combinaciones de tags/géneros con menor competencia pero alta demanda para optimizar nuestro posicionamiento
- **KR 2**: Definir una estrategia de lanzamiento que nos permita competir con estudios más grandes, basada en análisis de casos de éxito indie recientes (2020-2025)

## 3. KPIs

### KPI 1: Índice de Oportunidad Indie
- **Definición**: Mide qué tan favorable es un género para desarrolladores indie sin recursos masivos
- **Fórmula**: (Promedio satisfaction ratio del género × Promedio playtime) / (Número de juegos AAA en el género + 1)
- **Unidad**: Score ponderado (0-100)
- **Dimensión**: Género específico y rango de precio indie ($5-25)
- **Objetivo**: Encontrar géneros con score >70 que indiquen alta oportunidad para indies

### KPI 2: Factor de Viralidad Potencial
- **Definición**: Predictor de potencial viral basado en engagement y satisfacción extrema
- **Fórmula**: (Playtime promedio × Ratio reviews positivas²) / Precio
- **Unidad**: Factor de viralidad (mientras más alto, mejor)
- **Dimensión**: Juegos indie exitosos (desarrolladores <50 empleados)
- **Objetivo**: Superar el factor de viralidad promedio de juegos indie exitosos (identificar top 10%)

### KPI 3: Ratio de Dominancia Indie vs AAA
- **Definición**: Qué porcentaje del éxito en un género pertenece a estudios indie
- **Fórmula**: (Suma owners de juegos indie / Suma owners total del género) × 100
- **Unidad**: Porcentaje
- **Dimensión**: Género y año de lanzamiento (2020-2025)
- **Objetivo**: Enfocarse en géneros donde indies tienen >30% de market share

### KPI 4: Índice de Accesibilidad de Mercado
- **Definición**: Qué tan fácil es para un indie nuevo entrar y destacar en un género
- **Fórmula**: (1 / Número de juegos lanzados por mes en el género) × (Promedio reviews de indies exitosos)
- **Unidad**: Score de accesibilidad (0-10)
- **Dimensión**: Género y periodo temporal
- **Objetivo**: Buscar géneros con score >6 que indiquen mercados menos saturados

### KPI 5: Score de Replicabilidad "Estilo Balatro"
- **Definición**: Qué tan replicables son las características de éxito de juegos como Balatro
- **Fórmula**: Promedio ponderado de: (Simplicidad mecánicas × 0.3) + (Precio accesible × 0.3) + (Rejugabilidad × 0.4)
- **Unidad**: Score de replicabilidad (0-10)
- **Dimensión**: Juegos indie exitosos con características similares a Balatro
- **Objetivo**: Identificar elementos con score >8 para implementar en nuestro juego

## 4. Construcción del dashboard

### Gráficos principales a incluir:

1. **Scatter Plot: "El Mapa del Tesoro Indie"**
   - Eje X: Precio (filtro $1-30)
   - Eje Y: Factor de Viralidad Potencial
   - Tamaño burbuja: Número de owners
   - Color: Género (focus en Card Game, Roguelike, Strategy, Puzzle)
   - Destacar juegos como Balatro, Slay the Spire, Hades

2. **Gráfico de Barras: "Dominancia Indie por Género"**
   - Barras: Ratio de Dominancia Indie vs AAA por género
   - Línea secundaria: Número total de juegos indie exitosos
   - Filtro por años 2020-2025 para tendencias recientes

3. **Heat Map: "Matriz de Oportunidades"**
   - Eje X: Géneros indie-friendly
   - Eje Y: Rangos de precio indie
   - Color: Índice de Oportunidad Indie
   - Anotaciones en casillas con mayor oportunidad

4. **Timeline: "Evolución del Éxito Indie"**
   - Línea temporal de lanzamientos indie exitosos
   - Destacar patrones estacionales
   - Identificar ventanas de menor competencia

5. **Benchmark Table: "Casos de Éxito Estilo Balatro"**
   - Top 20 juegos indie con Score de Replicabilidad más alto
   - Columnas: Nombre, Género, Precio, Playtime, Reviews, Características clave

---

## Datos a Normalizar para Looker Studio

Para implementar correctamente nuestro dashboard enfocado en el éxito indie, necesitamos normalizar y preparar los siguientes campos:

### Campos Principales Específicos para Análisis Indie:

#### 1. **Clasificación de Desarrolladores**
- `developer` → Crear campo `developer_type`:
  - "Indie" (desarrolladores pequeños/desconocidos)
  - "AA" (desarrolladores medianos conocidos)  
  - "AAA" (desarrolladores grandes como Valve, EA, Ubisoft)
- `is_indie_dev` → Booleano basado en lista de desarrolladores conocidos

#### 2. **Filtros Específicos Estilo Balatro**
- `genres` → Priorizar y separar: Card Game, Roguelike, Strategy, Puzzle, Casual
- `is_card_game` → Booleano para juegos de cartas
- `is_roguelike` → Booleano para mecánicas roguelike
- `has_deck_building` → Detección en tags de deck building

#### 3. **Segmentación de Precios Indie**
- `price_indie_tier`:
  - "Super Budget" ($0.99-4.99)
  - "Indie Sweet Spot" ($5.00-14.99) ← Rango de Balatro
  - "Premium Indie" ($15.00-24.99)
  - "Expensive Indie" ($25.00+)

#### 4. **Métricas de Viralidad**
- `viral_potential = (average_playtime × positive_ratings²) / MAX(price, 1)`
- `review_velocity = positive_ratings / days_since_release`
- `engagement_ratio = average_playtime / median_playtime`

#### 5. **Datos Temporales Específicos**
- `launch_period`:
  - "Pre-Indie Boom" (antes 2015)
  - "Indie Growth" (2015-2019)
  - "Indie Golden Age" (2020-2025) ← Era de Balatro
- `launch_quarter` → Para identificar ventanas de menor competencia

### Transformaciones Específicas para Indie Focus:

#### 1. **Identificación de Desarrolladores Indie**
```
Crear lista de desarrolladores AAA conocidos:
- Valve, EA, Ubisoft, Activision, Bethesda, etc.
- Si developer NO está en lista AAA → marcar como Indie
```

#### 2. **Score de Replicabilidad Balatro**
```
Puntos por característica:
- Precio $5-20: +3 puntos
- Género Card Game/Roguelike: +3 puntos  
- Playtime >500 min: +2 puntos
- Reviews ratio >90%: +2 puntos
- Score total: 0-10
```

#### 3. **Filtro de Casos de Estudio**
```
Juegos indie de referencia a destacar:
- Balatro, Slay the Spire, Hades, Dead Cells, 
- Stardew Valley, Hollow Knight, Among Us
- Filtrar por desarrollador pequeño + precio <$30
```

### Tablas Recomendadas para Análisis Indie:

1. **indie_games_main** (juegos indie filtrados)
2. **success_cases** (top indies como Balatro)
3. **genre_indie_analysis** (análisis por género indie-friendly)
4. **price_performance** (rendimiento por tier de precio indie)
5. **temporal_opportunities** (ventanas de lanzamiento óptimas)

### Campos Calculados Específicos para Looker Studio:

1. `indie_opportunity_score = (satisfaction_ratio × avg_playtime × indie_market_share) / competition_density`
2. `balatro_similarity_score = similarity_points_total / 10`
3. `viral_coefficient = (positive_ratings × playtime_factor) / days_since_launch`
4. `market_accessibility = (1/monthly_releases_in_genre) × avg_indie_success_rate`

### Dashboard KPIs a Destacar:

**Cards principales:**
- "Género con Mayor Oportunidad Indie"
- "Precio Óptimo Estilo Balatro" 
- "Factor de Viralidad Target"
- "Ventana de Lanzamiento Recomendada"
- "Score de Replicabilidad Promedio"

Esta estructura nos permitirá identificar exactamente qué hizo exitoso a Balatro y cómo podemos replicar esa fórmula con nuestros recursos limitados de estudio indie.