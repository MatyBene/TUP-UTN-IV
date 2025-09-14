# Proceso ETL

## Extraccion

Se recolectan datos de diversas fuentes. Es posible que esos datos no se encuentren en el formato adecuado, con campos en blanco, campos obligatorios vacios, etc.

### Caracteristicas

- Tiene que ver con la recoleccion de los sistemas de origen (Data Sources o Sistemas Operacionales)
- Puede ser realizada por el propio sistema de origen, fuente de los datos, o por cualquier herramienta ETL.
- En la propia extraccion pueden existir reglas de negocio aplicadas.

### Tipos

- Extraccion por lote/total: Se extraen todos los datos que se ajustan a la regla de extraccion.
- Actualizacion incremental: Compara lo que ya ha extraido con la fuente de datos. Puede identificar y extraer solo de nuevo.
- Actualizacion automatica: El DS notifica modificaciones y se extrae unicamente la modificacion. (Push, Webhook, Callback, HTTP Request)
- Extraccion continua: Se envian constantemente los nuevos datos. (Streaming de datos)

## Transformacion

Se realiza la limpieza, la manipulacion y la transformacion de los datos, convirtiendolos en un marco estandarizado y organizado. Se debe garantizar que la estructura de los datos que seran cargados, se encuentren dentro de una normalidad esperada por quienes luego realizaran el analisis final.

- Etapas: estandarizacion, limpieza, calidad, consolidacion e integridad.
- Debido al gran numero de fases, el mayor peso del proceso ETL, esta aqui.
- La velocidad del proceso dependera de la herramienta utilizada.

### Transformaciones basicas

- Liempieza de datos
- Estandarizacion de formatos
- Remocion de duplicados
- Filtrado de datos

### Tranformaciones avanzadas

- Univer archivos / tablas
- Division archivos / tablas
- Campos de calculo
- Enriquecimiento datos / campos
- Division o consolidacion de campos
- Unidades de conversion
- Transformacion de llaves
- Modificacion de encoding

## Carga

Los datos finalmente se cargan en un datawarehouse, otras veces en un data lake, y muchas veces directamente en los repositorios de las herramientas de visualizacion que estemos utilizando.

- Se encuentra condicionado y debe orientarse al tipo de archivos o datos de destino.
- Es extremadamente estrategico.
- Grandes volumenes de datos, son almacenados en un datawarehouse o un data lake.
- Conjuntos chicos de datos, se pueden cargar directamente en el repositorio de la herramienta de Data Analytics.

## Conclusiones

- Se conectan a diversas fuentes de informacion
- Son robustos
- Disponen de sistemas de programacion de actualizacion de datos
- Validan la consistencia de las operaciones de carga de datos
- Entregan la informacion adquirida y procesada a un almacen de datos
- Son muy importantes para poder consolidar y unificar datos que vienen de muchas fuentes de informacion que tienen estructuras diferentes entre si


