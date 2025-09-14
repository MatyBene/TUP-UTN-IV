# Tipos de datos

## Dato

Es una representacion simbolica de un atributo o variable cuantitativa o cualitativa. Describen hechos empiricos o eventos.

Por si solos no contienen informacion relevante.

- Las fuentes relacionales proveen datos estructurados (tablas)
- Las fuentes no relacionales proveen datos no-estructurados o datos semi-estructurados

La palabra relacional se debe al hecho de que el principal objetivo es relacionar los datos guardados. Esto es realizado mediante un proceso llamado modelado de datos, conjuntamente con MER (modelo de entidad y relacion)

MER es la parte de las ciencias de la computacion que se encarga de construir estructuras que permitan almacenar y recuperar datos. Los almacenan en filas y columnas.

## Datos estructurados

Son datos agrupados, guardados y almacenados de una forma organizada para que puedan ser recuperados en algun momento. El proceso para almacenar los datos es conocido como persistencia. La unidad donde esos datos son almacenados se conoce como base de datos relacionales.

## Datos no estructurados

Cuando no conseguimos identificar una organizacion de los datos almacenados, concluimos que estos son datos no estructurados.

No poseen estructuras bien definidas, alineadas o que respondan a un patron. Pueden estar compuestos por diversos elementos dentro de un todo. Ej: fotos, audios, videos.

## Datos semi estructurados

Poseen una organizacion bastante heterogenea. La distincion entre estructura y valor es nebulosa. Esto dificulta su consulta y clasificacion. 

No son estrictamente clasificados, no se mantienen en un Sistema de Administracion de Base de Datos, pero si en lo que se conoce como Data Lake.

## Tabla comparativa

|  | Datos estructurados | Datos semi estructurados | Datos no estructurados |
|-----------|-----------|-----------|-----------|
| Caracteristicas  | Organizacion rigida en tablas. Esquema predefinido y fijo. Facil de consultar y analizar con lenguajes como SQL. | Organizacion parcial con etiquetas o formatos flexibles. Heterogeneidad en contenido, estructura ambigua. Almacenamiento en formatos flexibles como JSON o XML  | Ausencia de estructura definida o patron claro. Heterogeneidad completa, datos desorganizados. Dificultad de analisis sin herramientas especializadas  |
| Ejemplos  | Bases de datos relacionales. Hojas de calculo. Archivos CSV  | Archivos JSON, XML, emails, logs del sistema. Documentos con metadatos. Publicaciones en redes sociales con estructura parcial  | Imagenes, videos, audios, publicaciones en redes sociales. Comentarios de clientes en texto libre. Grabaciones de llamadas de atencion al cliente  |
| Implementaciones  | Bases de datos relacionales. Dashboards empresariales que muestran metricas claras. Sistemas ERP p CRM para gestion operativa  | Bases de datos NoSQL. Aplicaciones web, sistemas distribuidos, APIs. Transferencia de datos entre sistemas (ETL)  | Almacenamiento en Data Lakes o sistemas distribuidos. Soluciones de big data. Procesamiento avanzado mediante IA o Machine Learning |
| Ventajas  | Facil de almacenar, consultar y analizar. Alto rendimiento en consultas transaccionales. Ideal para reportes operativos y metricas continuas  | Flexible para manejar datos variados y en evolucion. Compatible con integraciones y sistemas modernos. Mas estructurado que los datos no estructurados  | Captura informacion rica y detallada de multiples formatos. Gran volumen de datos disponible para analisis profundos. Crucial para analisis de tendencias y percepcion  |
| Desventajas  | Rigidez en la estructura, poco adaptable a cambios. Limitado a tipos de datos predefinidos. Menor riqueza en detalles frente a otros tipos  | Consultas menos eficientes que en datos estructurados. Menor compatibilidad con bases relacionales. Requiere herramientas especificas para procesamiento  | Dificultad para clasificar y analizar sin herramientas avanzadas. Altos costos en almacenamiento y procesamiento. Tiempo y complejidad en sus analisis  |

## Conclusiones

Cada tipo de dato tiene su proposito y mejor contexto de uso:

- Los datos estructurados son ideales para transacciones y reportes operativos
- Los datos semi estructurados ofrecen flexibilidad en entornos con diversidad de formatos y necesidades dinamicas
- Los datos no estructurados permiten capturar informacion compleja y rica en detalles, pero requieren tecnologias avanzadas para procesarlos