import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns
import plotly.express as px
import plotly.graph_objects as go
from plotly.subplots import make_subplots
import numpy as np
import warnings
warnings.filterwarnings('ignore')

# Configuración de estilo
plt.style.use('seaborn-v0_8')
sns.set_palette("husl")

class SteamDashboard:
    def __init__(self, excel_file):
        """
        Inicializa el dashboard de Steam con los datos del archivo Excel
        """
        self.df = pd.read_excel(excel_file)
        self.clean_data()
        self.calculate_kpis()
    
    def clean_data(self):
        """
        Limpia y prepara los datos para el análisis
        """
        # Convertir columnas numéricas
        numeric_columns = ['positive_ratings', 'negative_ratings', 'average_playtime', 
                          'median_playtime', 'price', 'required_age', 'achievements']
        
        for col in numeric_columns:
            if col in self.df.columns:
                self.df[col] = pd.to_numeric(self.df[col], errors='coerce')
        
        # Limpiar y convertir la columna owners
        if 'owners' in self.df.columns:
            # Extraer el valor medio del rango de propietarios
            self.df['owners_numeric'] = self.df['owners'].str.extract('(\d+)').astype(float)
        
        # Convertir fecha de lanzamiento
        if 'release_date' in self.df.columns:
            self.df['release_date'] = pd.to_datetime(self.df['release_date'], errors='coerce')
            self.df['release_year'] = self.df['release_date'].dt.year
        
        # Limpiar géneros y categorías
        if 'genres' in self.df.columns:
            self.df['genres'] = self.df['genres'].fillna('Unknown')
        
        # Rellenar valores nulos
        self.df['price'] = self.df['price'].fillna(0)
        self.df['required_age'] = self.df['required_age'].fillna(0)
        
    def calculate_kpis(self):
        """
        Calcula los KPIs definidos en la solución
        """
        # KPI 1: Índice de Popularidad por Género
        genre_stats = self.df.groupby('genres').agg({
            'owners_numeric': 'mean',
            'average_playtime': 'mean',
            'positive_ratings': 'sum',
            'negative_ratings': 'sum',
            'name': 'count'
        }).reset_index()
        
        # Normalizar y calcular índice de popularidad
        max_owners = genre_stats['owners_numeric'].max()
        max_playtime = genre_stats['average_playtime'].max()
        
        genre_stats['popularity_index'] = (
            (genre_stats['owners_numeric'] / max_owners * 60) + 
            (genre_stats['average_playtime'] / max_playtime * 40)
        )
        
        self.genre_popularity = genre_stats.sort_values('popularity_index', ascending=False)
        
        # KPI 2: Ratio de Satisfacción del Usuario
        self.df['satisfaction_ratio'] = (
            self.df['positive_ratings'] / 
            (self.df['positive_ratings'] + self.df['negative_ratings']) * 100
        ).fillna(0)
        
        # KPI 3: Efectividad de Precio
        self.df['price_effectiveness'] = np.where(
            self.df['price'] > 0,
            self.df['owners_numeric'] / self.df['price'],
            self.df['owners_numeric']  # Para juegos gratuitos
        )
        
        # KPI 4: Índice de Retención (usando median vs average playtime)
        self.df['retention_index'] = np.where(
            self.df['average_playtime'] > 0,
            (self.df['median_playtime'] / self.df['average_playtime'] * 100),
            0
        )
    
    def create_dashboard(self):
        """
        Crea el dashboard principal con múltiples visualizaciones
        """
        # Crear figura con subplots
        fig = make_subplots(
            rows=3, cols=2,
            subplot_titles=(
                'Top 10 Géneros por Popularidad',
                'Relación Precio vs Propietarios',
                'Distribución de Satisfacción por Género',
                'Evolución de Lanzamientos por Año',
                'Distribución por Rango Etario',
                'Top Desarrolladores por Cantidad de Juegos'
            ),
            specs=[[{"type": "bar"}, {"type": "scatter"}],
                   [{"type": "box"}, {"type": "scatter"}],
                   [{"type": "pie"}, {"type": "bar"}]]
        )
        
        # 1. Top 10 géneros por popularidad
        top_genres = self.genre_popularity.head(10)
        fig.add_trace(
            go.Bar(x=top_genres['genres'][::-1], 
                   y=top_genres['popularity_index'][::-1],
                   name='Índice de Popularidad',
                   marker_color='lightblue'),
            row=1, col=1
        )
        
        # 2. Relación precio vs propietarios
        sample_data = self.df.dropna(subset=['price', 'owners_numeric']).sample(min(1000, len(self.df)))
        fig.add_trace(
            go.Scatter(x=sample_data['price'], 
                      y=sample_data['owners_numeric'],
                      mode='markers',
                      name='Juegos',
                      marker=dict(size=5, opacity=0.6)),
            row=1, col=2
        )
        
        # 3. Distribución de satisfacción por género (box plot)
        top_5_genres = self.genre_popularity.head(5)['genres'].tolist()
        satisfaction_data = self.df[self.df['genres'].isin(top_5_genres)]
        
        for i, genre in enumerate(top_5_genres):
            genre_data = satisfaction_data[satisfaction_data['genres'] == genre]['satisfaction_ratio']
            fig.add_trace(
                go.Box(y=genre_data, name=genre, showlegend=False),
                row=2, col=1
            )
        
        # 4. Evolución de lanzamientos por año
        if 'release_year' in self.df.columns:
            yearly_releases = self.df.groupby('release_year').size().reset_index(name='count')
            yearly_releases = yearly_releases[yearly_releases['release_year'] >= 2000]
            fig.add_trace(
                go.Scatter(x=yearly_releases['release_year'], 
                          y=yearly_releases['count'],
                          mode='lines+markers',
                          name='Lanzamientos por Año'),
                row=2, col=2
            )
        
        # 5. Distribución por rango etario
        age_distribution = self.df['required_age'].value_counts().head(6)
        fig.add_trace(
            go.Pie(labels=[f'{age} años' for age in age_distribution.index], 
                   values=age_distribution.values,
                   name="Distribución Etaria"),
            row=3, col=1
        )
        
        # 6. Top desarrolladores
        if 'developer' in self.df.columns:
            top_developers = self.df['developer'].value_counts().head(10)
            fig.add_trace(
                go.Bar(x=top_developers.values[::-1], 
                       y=top_developers.index[::-1],
                       orientation='h',
                       name='Cantidad de Juegos',
                       marker_color='lightgreen'),
                row=3, col=2
            )
        
        # Actualizar layout
        fig.update_layout(
            height=1200,
            title_text="Dashboard de Análisis Steam - SteamAnalytics",
            title_x=0.5,
            showlegend=False
        )
        
        # Actualizar ejes
        fig.update_xaxes(title_text="Géneros", row=1, col=1)
        fig.update_yaxes(title_text="Índice de Popularidad", row=1, col=1)
        fig.update_xaxes(title_text="Precio ($)", row=1, col=2)
        fig.update_yaxes(title_text="Número de Propietarios", row=1, col=2)
        fig.update_yaxes(title_text="Ratio de Satisfacción (%)", row=2, col=1)
        fig.update_xaxes(title_text="Año", row=2, col=2)
        fig.update_yaxes(title_text="Número de Lanzamientos", row=2, col=2)
        fig.update_xaxes(title_text="Cantidad de Juegos", row=3, col=2)
        
        return fig
    
    def create_kpi_summary(self):
        """
        Crea un resumen de los KPIs principales
        """
        summary = {
            'Total de Juegos Analizados': len(self.df),
            'Precio Promedio': f"${self.df['price'].mean():.2f}",
            'Satisfacción Promedio': f"{self.df['satisfaction_ratio'].mean():.1f}%",
            'Tiempo Promedio de Juego': f"{self.df['average_playtime'].mean():.0f} min",
            'Género Más Popular': self.genre_popularity.iloc[0]['genres'],
            'Desarrollador Más Prolífico': self.df['developer'].value_counts().index[0] if 'developer' in self.df.columns else 'N/A'
        }
        return summary
    
    def generate_matplotlib_charts(self):
        """
        Genera gráficos adicionales usando matplotlib para análisis detallado
        """
        fig, axes = plt.subplots(2, 3, figsize=(18, 12))
        fig.suptitle('Análisis Detallado de Steam - Dashboard Complementario', fontsize=16)
        
        # 1. Distribución de precios
        axes[0, 0].hist(self.df[self.df['price'] > 0]['price'], bins=50, alpha=0.7, color='skyblue')
        axes[0, 0].set_title('Distribución de Precios')
        axes[0, 0].set_xlabel('Precio ($)')
        axes[0, 0].set_ylabel('Frecuencia')
        
        # 2. Correlación entre variables
        corr_vars = ['price', 'positive_ratings', 'negative_ratings', 'average_playtime', 'achievements']
        corr_data = self.df[corr_vars].corr()
        sns.heatmap(corr_data, annot=True, cmap='coolwarm', center=0, ax=axes[0, 1])
        axes[0, 1].set_title('Matriz de Correlación')
        
        # 3. Tiempo de juego vs Satisfacción
        sample_df = self.df.dropna(subset=['average_playtime', 'satisfaction_ratio']).sample(min(1000, len(self.df)))
        axes[0, 2].scatter(sample_df['average_playtime'], sample_df['satisfaction_ratio'], alpha=0.6)
        axes[0, 2].set_title('Tiempo de Juego vs Satisfacción')
        axes[0, 2].set_xlabel('Tiempo Promedio (min)')
        axes[0, 2].set_ylabel('Ratio de Satisfacción (%)')
        
        # 4. Distribución de logros
        if 'achievements' in self.df.columns:
            achievement_data = self.df[self.df['achievements'] > 0]['achievements']
            axes[1, 0].hist(achievement_data, bins=30, alpha=0.7, color='lightgreen')
            axes[1, 0].set_title('Distribución de Logros por Juego')
            axes[1, 0].set_xlabel('Número de Logros')
            axes[1, 0].set_ylabel('Frecuencia')
        
        # 5. Top géneros por tiempo de juego
        genre_playtime = self.df.groupby('genres')['average_playtime'].mean().sort_values(ascending=False).head(10)
        axes[1, 1].barh(range(len(genre_playtime)), genre_playtime.values)
        axes[1, 1].set_yticks(range(len(genre_playtime)))
        axes[1, 1].set_yticklabels(genre_playtime.index)
        axes[1, 1].set_title('Top 10 Géneros por Tiempo de Juego')
        axes[1, 1].set_xlabel('Tiempo Promedio (min)')
        
        # 6. Evolución de precios por año
        if 'release_year' in self.df.columns:
            yearly_prices = self.df[self.df['price'] > 0].groupby('release_year')['price'].mean()
            yearly_prices = yearly_prices[yearly_prices.index >= 2000]
            axes[1, 2].plot(yearly_prices.index, yearly_prices.values, marker='o')
            axes[1, 2].set_title('Evolución del Precio Promedio')
            axes[1, 2].set_xlabel('Año')
            axes[1, 2].set_ylabel('Precio Promedio ($)')
        
        plt.tight_layout()
        return fig
    
    def save_dashboard(self, filename='steam_dashboard.html'):
        """
        Guarda el dashboard interactivo como archivo HTML
        """
        dashboard = self.create_dashboard()
        dashboard.write_html(filename)
        print(f"Dashboard guardado como {filename}")
    
    def print_kpi_report(self):
        """
        Imprime un reporte de KPIs en formato texto
        """
        print("="*60)
        print("REPORTE DE KPIs - STEAMANALYTICS")
        print("="*60)
        
        summary = self.create_kpi_summary()
        for key, value in summary.items():
            print(f"{key}: {value}")
        
        print("\n" + "="*60)
        print("TOP 5 GÉNEROS POR POPULARIDAD")
        print("="*60)
        for i, row in self.genre_popularity.head(5).iterrows():
            print(f"{row['genres']}: {row['popularity_index']:.2f} puntos")
        
        print("\n" + "="*60)
        print("ANÁLISIS DE SATISFACCIÓN")
        print("="*60)
        satisfaction_stats = self.df['satisfaction_ratio'].describe()
        print(f"Promedio: {satisfaction_stats['mean']:.2f}%")
        print(f"Mediana: {satisfaction_stats['50%']:.2f}%")
        print(f"Desviación Estándar: {satisfaction_stats['std']:.2f}%")

# Función principal para ejecutar el dashboard
def main():
    """
    Función principal para ejecutar el análisis completo
    """
    try:
        # Cargar datos
        dashboard = SteamDashboard('Datos - Juegos en steam.xlsx')
        
        # Generar reporte de KPIs
        dashboard.print_kpi_report()
        
        # Crear y guardar dashboard interactivo
        dashboard.save_dashboard('steam_dashboard_interactive.html')
        
        # Crear gráficos con matplotlib
        matplotlib_fig = dashboard.generate_matplotlib_charts()
        matplotlib_fig.savefig('steam_analysis_detailed.png', dpi=300, bbox_inches='tight')
        plt.show()
        
        # Mostrar dashboard interactivo
        plotly_fig = dashboard.create_dashboard()
        plotly_fig.show()
        
        print("\n¡Análisis completado exitosamente!")
        print("Archivos generados:")
        print("- steam_dashboard_interactive.html (Dashboard interactivo)")
        print("- steam_analysis_detailed.png (Gráficos detallados)")
        
    except FileNotFoundError:
        print("Error: No se encontró el archivo 'Datos - Juegos en steam.xlsx'")
        print("Asegúrate de que el archivo esté en el directorio actual.")
    except Exception as e:
        print(f"Error durante el análisis: {str(e)}")

if __name__ == "__main__":
    main()