# Trabajo Práctico Integrador - Análisis de Datos Steam

## 1. Kickoff del proyecto

**SteamAnalytics** es una empresa consultora especializada en análisis de datos para la industria de videojuegos. Hemos sido contratados por Steam para desarrollar un sistema de análisis integral que les permita optimizar su plataforma y mejorar la experiencia de los usuarios. 

Nuestro proyecto tiene como objetivo principal realizar un análisis profundo de los datos de videojuegos en Steam para identificar patrones de comportamiento de usuarios, tendencias de mercado y oportunidades de crecimiento. A través de este análisis, buscamos proporcionar insights valiosos que permitan a Steam tomar decisiones estratégicas basadas en datos para mejorar su posicionamiento en el mercado de videojuegos digitales.

## 2. Objetivos: ¿Cuáles son los objetivos que queremos lograr?

### Objetivo 1: Optimizar la Experiencia del Usuario en Steam
- **KR 1**: Identificar los 10 géneros de videojuegos más populares basados en número de propietarios y tiempo de juego promedio para mejorar las recomendaciones de la plataforma
- **KR 2**: Analizar la correlación entre valoraciones positivas/negativas y tiempo de juego para establecer métricas de calidad de contenido

### Objetivo 2: Maximizar la Rentabilidad de la Plataforma
- **KR 1**: Identificar el rango de precios óptimo para videojuegos según género y desarrollador que maximice tanto ventas como satisfacción del usuario
- **KR 2**: Analizar la relación entre inversión en desarrollo (medida por cantidad de logros y características) y éxito comercial para guiar políticas de apoyo a desarrolladores

### Objetivo 3: Expandir el Alcance del Mercado
- **KR 1**: Evaluar la penetración de juegos en diferentes rangos etarios para identificar segmentos de mercado desatendidos
- **KR 2**: Analizar la distribución de desarrolladores y publishers para identificar oportunidades de asociación estratégica

## 3. KPIs (Indicadores Clave de Rendimiento)

### KPI 1: Índice de Popularidad por Género
- **Descripción**: Mide la popularidad de cada género basado en número de propietarios y tiempo de juego
- **Fórmula**: (Promedio de Propietarios × Peso 60%) + (Tiempo Promedio de Juego × Peso 40%)
- **Unidad**: Puntuación normalizada (0-100)
- **Dimensiones**: Por género, por año de lanzamiento
- **Meta**: Identificar los 5 géneros con mayor potencial de crecimiento

### KPI 2: Ratio de Satisfacción del Usuario
- **Descripción**: Mide la satisfacción general de los usuarios con los videojuegos
- **Fórmula**: (Valoraciones Positivas / (Valoraciones Positivas + Valoraciones Negativas)) × 100
- **Unidad**: Porcentaje (%)
- **Dimensiones**: Por juego, por género, por desarrollador, por rango de precio
- **Meta**: Mantener un ratio superior al 75% en promedio

### KPI 3: Efectividad de Precio
- **Descripción**: Evalúa la relación entre precio y adopción del juego
- **Fórmula**: (Número de Propietarios / Precio) × Factor de Ajuste de Género
- **Unidad**: Propietarios por dólar
- **Dimensiones**: Por rango de precio, por género, por año
- **Meta**: Identificar el punto dulce de precios para cada categoría

### KPI 4: Índice de Retención de Jugadores
- **Descripción**: Mide qué tan enganchados están los usuarios con los juegos
- **Fórmula**: (Tiempo Medio de Juego / Tiempo Promedio de Juego) × 100
- **Unidad**: Porcentaje (%)
- **Dimensiones**: Por género, por desarrollador, por características del juego
- **Meta**: Superar el 80% de retención en géneros clave

### KPI 5: Diversidad de Desarrolladores
- **Descripción**: Mide la concentración/diversidad de desarrolladores en la plataforma
- **Fórmula**: Número de Desarrolladores Únicos / Total de Juegos
- **Unidad**: Ratio (0-1)
- **Dimensiones**: Por año, por género, por región
- **Meta**: Incrementar la diversidad año tras año para fomentar la innovación

## 4. Construcción del Dashboard

Para el dashboard utilizaremos Python con las librerías Pandas, Matplotlib, Seaborn y Plotly para crear visualizaciones interactivas que muestren:

### Gráficos Principales:
1. **Gráfico de Barras**: Top 10 géneros por popularidad (KPI 1)
2. **Gráfico de Dispersión**: Relación entre precio y número de propietarios
3. **Mapa de Calor**: Matriz de correlación entre variables clave
4. **Gráfico de Líneas**: Evolución temporal de lanzamientos por género
5. **Gráfico Circular**: Distribución de juegos por rango etario
6. **Histograma**: Distribución de valoraciones positivas vs negativas

### Métricas de Resumen:
- Total de juegos analizados
- Precio promedio por género
- Desarrollador más prolífico
- Juego con mayor tiempo de juego promedio
- Porcentaje de juegos gratuitos vs pagos

## 5. Metodología de Análisis

### Limpieza de Datos:
1. Identificación y tratamiento de valores nulos
2. Normalización de formatos de fecha
3. Categorización de variables numéricas
4. Eliminación de duplicados y outliers extremos

### Análisis Exploratorio:
1. Estadísticas descriptivas por variable
2. Análisis de distribuciones
3. Identificación de patrones y tendencias
4. Detección de correlaciones significativas

### Visualización:
1. Gráficos descriptivos para cada KPI
2. Dashboards interactivos
3. Reportes automatizados
4. Alertas para métricas críticas

## 6. Resultados Esperados

### Insights Estratégicos:
- Identificación de géneros con mayor potencial de crecimiento
- Estrategias de precios óptimas por categoría
- Oportunidades de mercado desatendidas
- Benchmarks de calidad para desarrolladores

### Recomendaciones Operativas:
- Mejoras en algoritmos de recomendación
- Políticas de apoyo a desarrolladores emergentes
- Estrategias de marketing segmentado
- Optimización de la experiencia de usuario

### Impacto en el Negocio:
- Incremento en la satisfacción del usuario
- Aumento en la retención de jugadores
- Optimización de ingresos por categoría
- Fortalecimiento del ecosistema de desarrolladores

---

*Este análisis proporciona una base sólida para la toma de decisiones estratégicas en Steam, combinando rigor analítico con aplicabilidad práctica para el crecimiento sostenible de la plataforma.*