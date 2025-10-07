# Guía Paso a Paso: Procesamiento de Datos para Dashboard Steam

## 📋 Fase 1: Preparación Inicial de Datos

### Paso 1: Análisis Exploratorio del Dataset
```
Acciones a realizar:
1. Abrir el archivo CSV en Excel/Google Sheets
2. Revisar la estructura de datos:
   - Identificar tipos de datos (texto, número, fecha)
   - Detectar valores nulos o vacíos
   - Revisar inconsistencias en formato
3. Documentar hallazgos iniciales
```

**Campos a revisar específicamente:**
- `release_date`: ¿Formato consistente?
- `genres`: ¿Separados por ";" ?
- `owners`: ¿Todos en formato rango?
- `price`: ¿Valores decimales correctos?

### Paso 2: Limpieza Básica de Datos
```
Acciones en Excel/Sheets:
1. Eliminar filas con appid duplicados
2. Reemplazar valores nulos en campos críticos:
   - price = 0 si está vacío (Free to Play)
   - ratings = 0 si están vacíos
3. Estandarizar texto:
   - Eliminar espacios extra
   - Unificar mayúsculas/minúsculas en developers
```

## 🔧 Fase 2: Transformación de Datos

### Paso 3: Normalización de Géneros (CRÍTICO)

**Problema actual:** 
```
genres = "Action;Strategy;RPG"
```

**Solución - Opción A (Recomendada): Crear tabla separada**
1. Crear nueva hoja "games_genres"
2. Columnas: `appid`, `genre`, `is_primary`
3. Usar función SPLIT o manualmente separar

**Ejemplo de transformación:**
```
Original:
appid=10, genres="Action;FPS;Multiplayer"

Transformado:
appid=10, genre="Action", is_primary=TRUE
appid=10, genre="FPS", is_primary=FALSE  
appid=10, genre="Multiplayer", is_primary=FALSE
```

**Solución - Opción B: Columnas booleanas**
1. Crear columnas: `is_action`, `is_strategy`, `is_rpg`, etc.
2. Marcar TRUE/FALSE según contenga el género

### Paso 4: Normalización de Precios

**Crear nueva columna `price_category`:**
```
IF price = 0 THEN "Free"
ELSE IF price <= 9.99 THEN "Budget"  
ELSE IF price <= 29.99 THEN "Standard"
ELSE IF price <= 59.99 THEN "Premium"
ELSE "AAA"
```

**En Excel:**
```
=IF(H2=0,"Free",IF(H2<=9.99,"Budget",IF(H2<=29.99,"Standard",IF(H2<=59.99,"Premium","AAA"))))
```

### Paso 5: Conversión de Owners a Valores Numéricos

**Problema actual:**
```
owners = "10000000-20000000"
```

**Solución - Crear columna `owners_numeric`:**
```
"0-20000" → 10000
"20000-50000" → 35000  
"50000-100000" → 75000
"100000-200000" → 150000
"200000-500000" → 350000
"500000-1000000" → 750000
"1000000-2000000" → 1500000
"2000000-5000000" → 3500000
"5000000-10000000" → 7500000
"10000000-20000000" → 15000000
"20000000-50000000" → 35000000
"50000000-100000000" → 75000000
"100000000-200000000" → 150000000
```

**En Excel (función BUSCARV o IF anidados):**
```
=IF(Q2="0-20000",10000,IF(Q2="20000-50000",35000,IF(Q2="50000-100000",75000,...)))
```

### Paso 6: Normalización de Fechas

**Crear nuevas columnas:**
1. `release_year` = `YEAR(release_date)`
2. `release_month` = `MONTH(release_date)`  
3. `release_quarter` = `ROUNDUP(MONTH(release_date)/3,0)`
4. `days_since_release` = `TODAY() - release_date`
5. `is_recent` = `IF(days_since_release <= 730, TRUE, FALSE)` (últimos 2 años)

## 📊 Fase 3: Creación de Campos Calculados

### Paso 7: KPIs Calculados

**1. Satisfaction Ratio:**
```
satisfaction_ratio = positive_ratings / (positive_ratings + negative_ratings)
```
En Excel: `=N2/(N2+O2)`

**2. Success Score:**
```
success_score = (positive_ratings * 0.7) + (average_playtime * 0.3)
```
En Excel: `=(N2*0.7)+(P2*0.3)`

**3. Price Value Ratio:**
```
price_value_ratio = satisfaction_ratio / MÁXIMO(price, 0.01)
```
En Excel: `=satisfaction_ratio/MAX(H2,0.01)`

### Paso 8: Agregaciones por Género

**Crear hoja "genre_stats" con:**
1. `genre` (único por fila)
2. `total_games` = CONTAR juegos por género
3. `avg_satisfaction` = PROMEDIO satisfaction_ratio
4. `avg_playtime` = PROMEDIO average_playtime  
5. `avg_price` = PROMEDIO price
6. `saturation_index` = total_games / avg_satisfaction

## 🚀 Fase 4: Preparación para Looker Studio

### Paso 9: Estructurar Tablas Finales

**Tabla 1: games_main.csv**
```
Columnas: appid, name, release_date, release_year, developer, publisher, 
platforms, price, price_category, owners_numeric, positive_ratings, 
negative_ratings, average_playtime, satisfaction_ratio, success_score
```

**Tabla 2: games_genres.csv**
```
Columnas: appid, genre, is_primary
```

**Tabla 3: genre_stats.csv**
```
Columnas: genre, total_games, avg_satisfaction, avg_playtime, 
saturation_index, market_opportunity_score
```

### Paso 10: Validación de Datos

**Checklist antes de subir a Looker Studio:**
- [ ] Sin valores nulos en campos críticos
- [ ] Formatos de fecha consistentes (YYYY-MM-DD)
- [ ] Números sin caracteres especiales
- [ ] Géneros normalizados correctamente
- [ ] Rangos de precios categorizados
- [ ] Owners convertidos a numéricos

### Paso 11: Subida a Looker Studio

**Proceso:**
1. Subir games_main.csv como fuente principal
2. Subir games_genres.csv y conectar por appid
3. Subir genre_stats.csv para métricas agregadas
4. Configurar relaciones entre tablas
5. Verificar que los campos se reconozcan correctamente

## 📈 Fase 5: Construcción del Dashboard

### Paso 12: Campos Calculados en Looker Studio

**Crear campos calculados adicionales:**

**Market Opportunity Score:**
```
CASE 
  WHEN Saturation Index < 30 AND Avg Satisfaction > 0.8 THEN "High Opportunity"
  WHEN Saturation Index < 50 AND Avg Satisfaction > 0.7 THEN "Medium Opportunity"  
  ELSE "Low Opportunity"
END
```

**Success Prediction:**
```
(Avg Satisfaction * 0.4) + (Avg Playtime * 0.3) + (Market Share * 0.3)
```

### Paso 13: Configurar Filtros Principales

**Filtros a implementar:**
1. **Fecha**: release_year (desde 2015 hasta actual)
2. **Precio**: price_category 
3. **Plataforma**: platforms (checkboxes)
4. **Género**: genre (de tabla normalizada)
5. **Engagement**: average_playtime (rangos)

### Paso 14: Crear Visualizaciones Core

**Dashboard Layout:**

**1. Header con KPIs principales (Cards):**
- Total juegos analizados
- Género con mayor oportunidad 
- Precio promedio recomendado
- Score de éxito proyectado

**2. Gráfico 1: Mapa de Calor Géneros vs Precios**
- Dimensión 1: Genre
- Dimensión 2: Price Category  
- Métrica: AVG(Satisfaction Ratio)
- Color: Escala verde (bajo) a rojo (alto)

**3. Gráfico 2: Scatter Plot Precio vs Engagement**
- Eje X: Price
- Eje Y: Average Playtime
- Tamaño burbuja: Owners Numeric
- Color: Genre

**4. Gráfico 3: Barras Top Géneros**
- Dimensión: Genre
- Métrica 1: AVG(Average Playtime) 
- Métrica 2: COUNT(Games) como línea secundaria

**5. Tabla Detalle de Oportunidades**
- Columnas: Genre, Total Games, Avg Satisfaction, Market Opportunity Score
- Ordenado por Market Opportunity Score DESC

## ✅ Checklist Final

### Antes de la Presentación:
- [ ] Datos validados y consistentes
- [ ] Dashboard funcional en Looker Studio
- [ ] KPIs calculados correctamente
- [ ] Visualizaciones claras y legibles
- [ ] Filtros funcionando
- [ ] Insights documentados
- [ ] Recomendaciones estratégicas definidas

### Documentar Insights Clave:
1. ¿Qué género muestra mayor oportunidad?
2. ¿Cuál es el rango de precio óptimo?
3. ¿Qué características tienen los juegos más exitosos?
4. ¿Qué recomiendas para el nuevo juego de PixelCraft?

---

**💡 Tip Final:** Siempre mantén copias de respaldo de tus datos transformados y documenta cada paso de transformación por si necesitas revertir cambios.