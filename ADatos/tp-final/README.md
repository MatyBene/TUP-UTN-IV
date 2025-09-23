# 🎮 Trabajo Práctico Integrador - Análisis de Datos Steam

## 📋 Descripción del Proyecto

Este proyecto consiste en un análisis integral de datos de videojuegos de la plataforma Steam, desarrollado como Trabajo Práctico Integrador (TPI) para la materia de Análisis de Datos. El objetivo es aplicar metodologías de análisis de negocio, definir KPIs, OKRs y crear un dashboard interactivo.

## 🏢 Contexto Empresarial

**SteamAnalytics** es una empresa consultora ficticia especializada en análisis de datos para la industria de videojuegos, contratada por Steam para optimizar su plataforma mediante insights basados en datos.

## 📁 Estructura del Proyecto

```
tp-final/
├── consigna.md                 # Consigna original del TPI
├── solucion_tpi.md            # Solución completa desarrollada
├── presentacion_steam.md      # Presentación para exposición
├── dashboard_steam.py         # Código Python del dashboard
├── Datos - Juegos en steam.xlsx # Dataset original
├── README.md                  # Este archivo
└── dashboard.png              # Imagen del dashboard ejemplo
```

## 🎯 Objetivos del Proyecto

### 1. **Optimizar la Experiencia del Usuario**
- Identificar géneros más populares
- Analizar correlación valoraciones vs tiempo de juego

### 2. **Maximizar la Rentabilidad**
- Determinar rangos de precios óptimos
- Evaluar ROI en desarrollo de juegos

### 3. **Expandir Alcance del Mercado**
- Analizar penetración por rangos etarios
- Mapear distribución de desarrolladores

## 📊 KPIs Implementados

| KPI | Descripción | Fórmula | Unidad |
|-----|-------------|---------|---------|
| **Índice de Popularidad** | Popularidad por género | `(Propietarios × 60%) + (Tiempo Juego × 40%)` | 0-100 puntos |
| **Ratio de Satisfacción** | Satisfacción del usuario | `Valoraciones Positivas / Total × 100` | Porcentaje |
| **Efectividad de Precio** | Relación precio-adopción | `Propietarios / Precio × Factor Género` | Propietarios/$ |
| **Índice de Retención** | Engagement de jugadores | `Tiempo Medio / Tiempo Promedio × 100` | Porcentaje |
| **Diversidad Desarrolladores** | Concentración de desarrolladores | `Desarrolladores Únicos / Total Juegos` | Ratio 0-1 |

## 🛠️ Tecnologías Utilizadas

- **Python 3.8+**
- **Pandas**: Procesamiento de datos
- **Matplotlib**: Visualizaciones estáticas
- **Seaborn**: Gráficos estadísticos
- **Plotly**: Dashboard interactivo
- **NumPy**: Cálculos numéricos

## 📦 Instalación y Configuración

### 1. Prerrequisitos
```bash
pip install pandas matplotlib seaborn plotly numpy openpyxl
```

### 2. Ejecución del Dashboard
```bash
python dashboard_steam.py
```

### 3. Archivos Generados
- `steam_dashboard_interactive.html`: Dashboard interactivo
- `steam_analysis_detailed.png`: Gráficos detallados

## 📈 Visualizaciones del Dashboard

### Dashboard Principal (Plotly)
1. **Gráfico de Barras**: Top 10 géneros por popularidad
2. **Scatter Plot**: Relación precio vs propietarios
3. **Box Plot**: Distribución de satisfacción por género
4. **Línea Temporal**: Evolución de lanzamientos
5. **Gráfico Circular**: Distribución por rango etario
6. **Barras Horizontales**: Top desarrolladores

### Análisis Complementario (Matplotlib)
1. **Histograma**: Distribución de precios
2. **Mapa de Calor**: Correlaciones entre variables
3. **Scatter**: Tiempo de juego vs satisfacción
4. **Histograma**: Distribución de logros
5. **Barras**: Géneros por tiempo de juego
6. **Línea**: Evolución de precios

## 📊 Dataset

**Archivo**: `Datos - Juegos en steam.xlsx`

### Columnas Principales:
- `appid`: ID único del juego
- `name`: Nombre del juego
- `release_date`: Fecha de lanzamiento
- `developer`: Desarrollador
- `publisher`: Editor
- `genres`: Géneros del juego
- `price`: Precio en USD
- `positive_ratings`: Valoraciones positivas
- `negative_ratings`: Valoraciones negativas
- `average_playtime`: Tiempo promedio de juego
- `owners`: Rango de propietarios

## 🔍 Metodología de Análisis

### 1. **Limpieza de Datos**
- Tratamiento de valores nulos
- Normalización de formatos
- Conversión de tipos de datos
- Eliminación de outliers

### 2. **Análisis Exploratorio**
- Estadísticas descriptivas
- Análisis de distribuciones
- Identificación de correlaciones
- Detección de patrones temporales

### 3. **Cálculo de KPIs**
- Normalización de métricas
- Ponderación de variables
- Agregación por categorías
- Ranking y clasificación

### 4. **Visualización**
- Gráficos interactivos
- Dashboards dinámicos
- Reportes automatizados
- Métricas de resumen

## 📋 Resultados Principales

### 🏆 Géneros Más Populares
1. **Action**: Máxima popularidad y engagement
2. **Indie**: Alto potencial, menor saturación
3. **Adventure**: Buena retención de usuarios
4. **Casual**: Amplio mercado objetivo
5. **Strategy**: Nicho especializado rentable

### 💰 Insights de Precios
- **Sweet Spot**: $15-25 para géneros mainstream
- **Premium**: $60+ viable para títulos AAA
- **Freemium**: Dominante en mobile/casual

### 👥 Segmentación
- **13+**: Mayor volumen de mercado
- **18+**: Mayor disposición de pago
- **All Ages**: Oportunidad en gaming familiar

## 🎯 Recomendaciones Estratégicas

### Para Steam:
1. Optimizar algoritmos de recomendación
2. Implementar pricing dinámico
3. Fomentar diversidad de desarrolladores

### Para Desarrolladores:
1. Considerar índices de popularidad
2. Aplicar benchmarks de precios
3. Priorizar features de retención

### Para Inversores:
1. Apostar por géneros emergentes
2. Diversificar por demografía
3. Foco en métricas de satisfacción

## 📈 Impacto Esperado

| Métrica | Mejora Esperada |
|---------|----------------|
| Satisfacción Usuario | +15% |
| Tiempo de Sesión | +20% |
| Retención | +25% |
| Revenue por Usuario | +18% |
| Conversión Free-to-Paid | +30% |

## 🚀 Próximos Pasos

1. **Machine Learning**: Modelos predictivos de éxito
2. **Real-time Analytics**: Dashboards en tiempo real
3. **A/B Testing**: Validación de recomendaciones
4. **Expansión Global**: Análisis de mercados internacionales

## 👥 Equipo de Desarrollo

- **Análisis de Datos**: Definición de KPIs y métricas
- **Desarrollo**: Implementación de dashboard y visualizaciones
- **Business Intelligence**: Interpretación de resultados
- **Presentación**: Comunicación de insights

## 📞 Soporte

Para preguntas sobre el proyecto:
- 📧 Consultas técnicas: Revisar código en `dashboard_steam.py`
- 📊 Metodología: Consultar `solucion_tpi.md`
- 🎯 Presentación: Ver `presentacion_steam.md`

## 📄 Licencia

Este proyecto es desarrollado con fines académicos para el TPI de Análisis de Datos.

---

*"Transformando datos gaming en decisiones estratégicas exitosas"* 🎮✨