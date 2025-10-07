# Guía Paso a Paso: Análisis Indie Estilo Balatro para Steam

## 📋 Fase 1: Preparación Específica para Análisis Indie

### Paso 1: Filtrado Inicial - Enfoque Indie
```
Objetivo: Identificar juegos indie relevantes para nuestro análisis
Acciones:
1. Filtrar dataset por precio: $0.99 - $30.00
2. Excluir desarrolladores AAA conocidos (crear lista negra)
3. Enfocarse en años 2015-2025 (era moderna indie)
4. Priorizar géneros: Card Game, Roguelike, Strategy, Puzzle
```

**Lista de Desarrolladores AAA a Excluir:**
```
Valve, Electronic Arts, Ubisoft, Activision, Bethesda, 
2K Games, Square Enix, Bandai Namco, Capcom, Sony, 
Microsoft, Nintendo, Epic Games, Blizzard
```

### Paso 2: Identificación de Casos de Éxito Indie
```
Buscar en el dataset juegos similares a Balatro:
- Precio: $5-20
- Géneros: Card Game, Roguelike, Strategy
- Ratings: >5000 positivos
- Playtime: >300 minutos promedio
- Desarrollador: No AAA
```

## 🎯 Fase 2: Transformaciones Específicas para Indie Focus

### Paso 3: Crear Campo "Developer Type"

**En Excel/Sheets, nueva columna `developer_type`:**
```
=IF(OR(
  SEARCH("Valve",F2)>0,
  SEARCH("Electronic Arts",F2)>0,
  SEARCH("Ubisoft",F2)>0,
  SEARCH("Activision",F2)>0,
  SEARCH("Bethesda",F2)>0,
  SEARCH("2K",F2)>0
), "AAA", "Indie")
```

### Paso 4: Segmentación de Precios Indie

**Crear columna `price_indie_tier`:**
```
=IF(R2=0,"Free",
  IF(R2<=4.99,"Super Budget",
    IF(R2<=14.99,"Indie Sweet Spot",
      IF(R2<=24.99,"Premium Indie","Expensive Indie"))))
```

### Paso 5: Identificación de Géneros Indie-Friendly

**Crear columnas booleanas específicas:**

**Card Game Detection:**
```
=IF(OR(SEARCH("Card",J2)>0,SEARCH("Deck",J2)>0,SEARCH("Trading",J2)>0),TRUE,FALSE)
```

**Roguelike Detection:**
```
=IF(OR(SEARCH("Roguelike",J2)>0,SEARCH("Rogue-like",J2)>0,SEARCH("Procedural",K2)>0),TRUE,FALSE)
```

**Indie-Friendly Tags:**
```
=IF(OR(SEARCH("Indie",K2)>0,SEARCH("Puzzle",J2)>0,SEARCH("Strategy",J2)>0),TRUE,FALSE)
```

### Paso 6: Cálculo de Métricas de Viralidad

**Factor de Viralidad Potencial:**
```
=IF(R2=0,0,(P2*N2*N2)/MAX(R2,1))
```
*Fórmula: (playtime × positive_ratings²) / precio*

**Review Velocity (reviews por día desde lanzamiento):**
```
=(N2+O2)/MAX((TODAY()-C2),1)
```

**Engagement Ratio:**
```
=IF(Q2=0,0,P2/Q2)
```
*Ratio average_playtime / median_playtime*

## 🎮 Fase 3: Análisis Específico Estilo Balatro

### Paso 7: Score de Replicabilidad Balatro

**Crear sistema de puntuación (0-10):**

**Precio Óptimo (3 puntos máximo):**
```
=IF(AND(R2>=5,R2<=20),3,IF(AND(R2>=1,R2<=30),1,0))
```

**Género Target (3 puntos máximo):**
```
=IF(OR(is_card_game=TRUE,is_roguelike=TRUE,SEARCH("Strategy",J2)>0),3,
  IF(OR(SEARCH("Puzzle",J2)>0,SEARCH("Casual",J2)>0),2,0))
```

**Engagement Alto (2 puntos máximo):**
```
=IF(P2>1000,2,IF(P2>500,1,0))
```

**Reviews Excelentes (2 puntos máximo):**
```
=IF(satisfaction_ratio>0.95,2,IF(satisfaction_ratio>0.90,1,0))
```

**Score Total Balatro:**
```
=precio_points + genero_points + engagement_points + reviews_points
```

### Paso 8: Identificar Competencia Directa

**Filtros para competencia:**
```
1. developer_type = "Indie"
2. price_indie_tier = "Indie Sweet Spot" 
3. (is_card_game = TRUE OR is_roguelike = TRUE)
4. release_year >= 2020
5. positive_ratings >= 1000
```

### Paso 9: Análisis de Ventanas de Lanzamiento

**Crear campo `launch_month_category`:**
```
=IF(MONTH(C2) IN (1,2,12),"Winter",
  IF(MONTH(C2) IN (3,4,5),"Spring",
    IF(MONTH(C2) IN (6,7,8),"Summer","Fall")))
```

**Contar lanzamientos por mes/año para identificar saturación:**
```
TABLA DINÁMICA:
Filas: release_year, release_month
Valores: COUNT(appid) 
Filtros: developer_type="Indie", price<=30
```

## 📊 Fase 4: Creación de Datasets para Looker Studio

### Paso 10: Tabla Principal Indie

**indie_games_main.csv** - Campos esenciales:
```
appid, name, release_date, release_year, release_month,
developer, developer_type, price, price_indie_tier,
positive_ratings, negative_ratings, satisfaction_ratio,
average_playtime, median_playtime, engagement_ratio,
is_card_game, is_roguelike, indie_friendly_tags,
viral_potential, balatro_score, owners_numeric
```

### Paso 11: Tabla de Casos de Éxito

**success_cases_indie.csv** - Top performers:
```
Filtros aplicados:
- balatro_score >= 7
- positive_ratings >= 5000
- developer_type = "Indie"
- release_year >= 2015

Incluir campos adicionales:
- success_rank, key_features, similar_mechanics
```

### Paso 12: Tabla de Análisis Competitivo

**competition_analysis.csv**:
```
Campos por género/precio:
genre, price_tier, total_games, avg_satisfaction, 
avg_playtime, avg_viral_potential, competition_density,
opportunity_score, market_share_indie
```

## 🚀 Fase 5: Dashboard Específico para Indie Success

### Paso 13: Configurar Filtros Clave en Looker Studio

**Filtros principales:**
1. **Developer Type**: Indie (solo), AAA (comparación)
2. **Price Range**: $1-30 (enfoque indie)
3. **Release Year**: 2018-2025 (tendencias recientes)
4. **Género**: Card Game, Roguelike, Strategy, Puzzle
5. **Balatro Score**: 6-10 (casos de éxito)

### Paso 14: Visualizaciones Específicas Indie

**1. "El Mapa del Tesoro Indie" (Scatter Plot)**
```
X: Price
Y: Viral Potential
Size: Owners
Color: Balatro Score (gradient)
Filtro: Developer Type = Indie
Annotations: Destacar casos como Balatro, Slay the Spire
```

**2. "Oportunidades por Género" (Heat Map)**
```
X: Genre (Card, Roguelike, Strategy, Puzzle, Casual)
Y: Price Tier (Super Budget, Sweet Spot, Premium)
Color: Opportunity Score
Anotaciones: Celdas con mayor oportunidad
```

**3. "Timeline de Éxitos Indie" (Line Chart)**
```
X: Release Date (by quarter)
Y: Number of Successful Indies (score >7)
Lines: Different genres
Identify seasonal patterns
```

**4. "Benchmark Table"**
```
Columns: Game Name, Genre, Price, Playtime, 
         Satisfaction, Viral Potential, Balatro Score
Filters: Top 20 by Balatro Score
Sortable by all metrics
```

### Paso 15: KPIs Cards Específicos

**Métricas destacadas:**
```
1. "Mejor Género para Indie": Género con mayor opportunity score
2. "Precio Óptimo Indie": Promedio de precios top performers
3. "Factor Viral Target": Viral potential promedio exitosos
4. "Competencia Actual": Número de lanzamientos indie/mes
5. "Score Balatro Objetivo": Score mínimo para top 10%
```

## 🎯 Fase 6: Insights y Recomendaciones

### Paso 16: Análisis de Resultados

**Preguntas clave a responder:**
1. ¿Qué precio maximiza viral potential en indie card games?
2. ¿Cuál es la mejor ventana de lanzamiento (mes/temporada)?
3. ¿Qué combinación género/precio tiene menos competencia?
4. ¿Qué características específicas hacen exitoso a Balatro?
5. ¿Podemos identificar el próximo nicho "pre-Balatro"?

### Paso 17: Recomendaciones Estratégicas

**Template de recomendaciones:**
```
1. GÉNERO RECOMENDADO: [Basado en opportunity score]
2. PRECIO OBJETIVO: $[X.XX] (basado en análisis)
3. MECÁNICAS CLAVE: [De casos de éxito similares]
4. VENTANA DE LANZAMIENTO: [Mes/temporada óptima]
5. COMPETENCIA ESPERADA: [Número de indies similares]
6. EXPECTATIVAS REALISTAS: [Proyección basada en datos]
```

## ✅ Checklist Final para Indie Success

### Validación Pre-Lanzamiento:
- [ ] Género validado con opportunity score >70
- [ ] Precio en rango óptimo para viral potential
- [ ] Mecánicas similares a casos de éxito identificados
- [ ] Ventana de lanzamiento con menor competencia
- [ ] Expectativas realistas basadas en benchmarks indie
- [ ] Strategy diferenciada de competencia directa

### Dashboard Operativo:
- [ ] Filtros indie funcionando correctamente
- [ ] Casos de éxito destacados visualmente
- [ ] Métricas de viralidad calculadas
- [ ] Comparaciones AAA vs Indie disponibles
- [ ] Timeline de oportunidades actualizado

---

**💡 Insight Clave:** El éxito de Balatro no fue casualidad - combinó precio accesible ($15), mecánicas familiares pero innovadoras (póker + roguelike), y lanzamiento en ventana de menor competencia. Nuestro análisis debe identificar la próxima combinación ganadora similar.