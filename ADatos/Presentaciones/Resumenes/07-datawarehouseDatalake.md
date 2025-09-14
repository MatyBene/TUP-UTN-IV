# Datawarehouse y Data Lake

## Datawarehouse

Es un repositorio de datos que:

- Posee muy facil acceso
- Consolida muchas fuentes de datos, en un unico almacen de datos
- Transforma los datos en grupos de informacion sobre temas especificos de negocios
- Permite realizar facilmente consultas, analisis, reportes para la toma de decisiones

### Objetivos

Brindar una vision unificada y completa de los datos. Ofrece los datos unificados en un unico lugar que representen a las mismas entidades de una manera unificada, sin importar el origen de esos datos.

- Tener informacion accesible (son entendibles, navegables y de rapido acceso)
- Tener informacion consistente
- Tener informacion adaptable y elastica (cambios continuos)
- Proteger la informacion
- Obtener informacion para la toma de decisiones

| Transaccional | Datawarehouse | 
|-----------|-----------|
| Sistemas | Datawarehouse |
| Los modelos de datos estan orientados a ser eficientes en la gestion de las transacciones | El modelo de datos esta orientado y focalizado en ayudarnos a integrar los datos, unificarlos y acceder de manera agil y desde herramientas de visualizacion |
| Prioriza la escritura de datos. Garantiza el registro de los datos | Prioriza la lectura de los datos. Agiliza la consulta de los datos |

### Arquitectura 

1. Aplicaciones fuentes de datos

        Las fuentes de datos son los sistemas transaccionales con los cuales las empresas realizan la registracion de sus transacciones.
        - Aplicaciones formales
        - Aplicaciones externas a la empresa
        - Informacion que no esta formalizada

2. Procesos ETL

        - Extraen informacion
        - Realizan transformaciones 
        - Cargan los datos
        Se ejecutan de forma automatica y periodica y son esenciales para poder mantener la informacion de Datawarehouse actualizada, consistente con los sistemas fuentes, unificada y de calidad.

3. Bases de datos del Datawarehouse

        Es un repositorio de datos modelado especificamente para realizar consultas a grandes volumenes de datos. 

4. Herramientas de visualizacion

        Son las herramientas con las que vamos a presentar la informacion.

## Data Lake

Se trata de una forma distinta de orientar la utilizacion de los datos organizacionales y el reporting y la unica manera de poder responder a consultas sobre el negocio.

- Facilidad para innovar en la utilizacion de los datos de la organizacion
- Mayor agilidad, se adapta a la necesidad del usuario
- Mas capacidad y flexibilidad en un entorno en el que confluyen datos procedentes de la organizacion con informacion proveniente del exterior

## Conclusiones

El Data Lake es el concepto mas moderno para centralizar datos para la toma de decisiones.

Los esquemas de ingesta de datos que se utilizan en los Data Lake, resultan muy eficientes para procesar grandes volumenes de datos.

La posibilidad de almacenar los tres tipos de datos en una misma plataforma, con muy bajo costo es una gran ventaja de los Data Lake.

Sin embargo el Datawarehouse sigue siendo un componente clave para almacenar los datos estructurados mas relevantes para la tomas de decisiones, por su facilidad para disponer un accedo a los datos rapido y seguro.

En una arquitectura moderna, encontraremos al Data Lake y al Datawarehouse integrados, y combinando sus ventajas.
