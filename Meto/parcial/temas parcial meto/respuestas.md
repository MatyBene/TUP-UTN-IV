# Respuestas - Examen de Patrones de Diseño y Principios SOLID

## Pregunta 1
**Respuesta: b**
El patrón Decorator añade dinámicamente responsabilidades adicionales a un objeto sin modificar su código original.

## Pregunta 2
**Respuesta: a**
El diagrama de colaboración es más recomendable cuando el énfasis está en qué objetos colaboran y no en el orden exacto de mensajes.

## Pregunta 3
**Respuesta: b**
Definir Cuenta como clase abstracta con calcularComision() y que cada subclase lo implemente respeta tanto OCP (abierto para extensión, cerrado para modificación) como LSP (las subclases pueden sustituir a la clase base).

## Pregunta 4
**Respuesta: c**
Singleton es un patrón creacional.

## Pregunta 5
**Respuesta: b**
Prototype se centra en clonar objetos existentes, mientras que Singleton se centra en restringir la creación a una sola instancia.

## Pregunta 6
**Respuesta: d**
DIP establece que los módulos de alto nivel deben depender de abstracciones, no de implementaciones concretas.

## Pregunta 7
**Respuesta: b**
ISP (Interface Segregation Principle) + DIP (Dependency Inversion Principle) actúan principalmente para reducir el acoplamiento entre módulos.

## Pregunta 8
**Respuesta: c**
Low Coupling busca minimizar el acoplamiento entre clases para aumentar la reutilización y facilidad de mantenimiento.

## Pregunta 9
**Respuesta: b**
Information Expert sugiere asignar la responsabilidad a la clase que tiene la información necesaria para cumplirla.

## Pregunta 10
**Respuesta: a**
Verdadero. Builder permite aplicar el mismo proceso de construcción para generar distintos objetos finales.

## Pregunta 11
**Respuesta: a**
El patrón mostrado en la imagen es Builder.

## Pregunta 12
**Respuesta: a**
Verdadero. Un Observer se suscribe a un sujeto y recibe notificaciones cuando hay cambios.

## Pregunta 13
**Respuesta: a**
Factory Method define una interfaz para crear un objeto pero delega la decisión a las subclases; Abstract Factory crea familias de objetos relacionados.

## Pregunta 14
**Respuesta: a**
ISP intenta evitar que una interfaz obligue a las clases que la implementan a depender de métodos que no usan.

## Pregunta 15
**Respuesta: b**
Template Method define un esqueleto de algoritmo dejando que las subclases redefinan ciertos pasos.

## Pregunta 16
**Respuesta: c**
Observer es útil cuando queremos que un objeto notifique automáticamente a otros cuando cambia su estado.

## Pregunta 17
**Respuesta: d**
Observer es el patrón adecuado para notificar a todos los clientes conectados cuando un usuario envía un mensaje.

## Pregunta 18
**Respuesta: a**
El objetivo central de GRASP es orientar la asignación de responsabilidades en objetos de un sistema orientado a objetos.

## Pregunta 19
**Respuesta: b**
El patrón mostrado en la imagen es Adapter.

## Pregunta 20
**Respuesta: b**
Se viola el Liskov Substitution Principle porque un Cuadrado no puede sustituir completamente a un Rectángulo sin alterar el comportamiento esperado.

## Pregunta 21
**Respuesta: c**
Decorator es el patrón adecuado para agregar marco, filtro y sombreado a una imagen sin cambiar su código original.

## Pregunta 22
**Respuesta: a**
LSP asegura que los objetos de una subclase puedan reemplazar a los de la superclase sin alterar la corrección del programa.

## Pregunta 23
**Respuesta: a**
Verdadero. Decorator puede usarse para extender funcionalidades sin modificar la clase base.

## Pregunta 24
**Respuesta: d**
El patrón mostrado en la imagen es Observer.

## Pregunta 25
**Respuesta: a**
Singleton es un patrón creacional.

## Pregunta 26
**Respuesta: c**
Controller delega responsabilidades de coordinación, Information Expert las asigna al objeto que tiene los datos relevantes.

## Pregunta 27
**Respuesta: a**
Creator establece que una clase que usa intensamente instancias de otra es responsable de crearlas.

## Pregunta 28
**Respuesta: c**
Los diagramas de colaboración muestran más claramente las asociaciones entre objetos que participan en la interacción.

## Pregunta 29
**Respuesta: a**
Strategy respeta OCP porque se pueden añadir nuevos ataques sin modificar el código existente.

## Pregunta 30
**Respuesta: d**
Polymorphism recomienda usar diferentes subclases en lugar de sentencias condicionales para manejar variaciones de comportamiento.

## Pregunta 31
**Respuesta: a**
Facade ofrece una interfaz simplificada a un subsistema complejo sin restringir el acceso a su funcionalidad completa.

## Pregunta 32
**Respuesta: d**
Una flecha asíncrona indica que el remitente no espera la respuesta del receptor para continuar.

## Pregunta 33
**Respuesta: c**
Flyweight es útil cuando se necesitan muchísimos objetos similares y queremos reducir el consumo de memoria compartiendo datos internos.

## Pregunta 34
**Respuesta: d**
Indirection reduce acoplamiento introduciendo un intermediario conceptual, Proxy crea un objeto sustituto que controla el acceso al real.

## Pregunta 35
**Respuesta: b**
Los patrones creacionales resuelven cómo instanciar objetos de manera flexible y controlada.

## Pregunta 36
**Respuesta: a**
Decorator añade responsabilidades dinámicamente, Composite organiza jerárquicamente objetos en estructura árbol.

## Pregunta 37
**Respuesta: d**
Composite es el patrón para representar un árbol de objetos donde hojas y nodos comparten la misma interfaz.

## Pregunta 38
**Respuesta: c**
Decorator se utiliza principalmente para agregar funcionalidades a objetos en tiempo de ejecución.

## Pregunta 39
**Respuesta: b**
Una clase abstracta Usuario con método abstracto calcularMulta() implementado en cada subclase respeta OCP, LSP y mantiene bajo acoplamiento y alta cohesión.

## Pregunta 40
**Respuesta: d**
Chain of Responsibility es adecuado cuando tienes una cadena de objetos y quieres que cada uno tenga la oportunidad de procesar una solicitud.

## Pregunta 41
**Respuesta: d**
El diagrama de secuencia muestra la interacción en orden temporal, el de colaboración enfatiza las relaciones estructurales entre objetos.

## Pregunta 42
**Respuesta: b**
Falso. Observer no requiere que el sujeto conozca en detalle la implementación de sus observadores, solo la interfaz.

## Pregunta 43
**Respuesta: b, c, d**
Protected Variations busca proteger al sistema frente a cambios en elementos externos colocando interfaces o puntos de variación controlados.

## Pregunta 44
**Respuesta: c**
Con Adapter se cumple principalmente el Open/Closed Principle, ya que permite extender funcionalidad sin modificar código existente.

## Pregunta 45
**Respuesta: b**
Observer permite notificar automáticamente a múltiples suscriptores cuando cambia el estado de un sujeto.

## Pregunta 46
**Respuesta: c**
Se violan SRP (múltiples responsabilidades) y DIP (dependencia directa de la base de datos).

## Pregunta 47
**Respuesta: a**
Strategy encapsula algoritmos y permite cambiarlos en tiempo de ejecución.

## Pregunta 48
**Respuesta: c**
Violar SRP hace que una clase sea demasiado grande, difícil de mantener y propensa a cambios múltiples por diferentes razones.

## Pregunta 49
**Respuesta: b**
Modificar una clase cada vez que aparece un nuevo tipo viola OCP (debería estar cerrada para modificación).

## Pregunta 50
**Respuesta: a**
Pure Fabrication sugiere introducir una clase artificial para mantener bajo acoplamiento y alta cohesión.

## Pregunta 51
**Respuesta: a**
Violar SRP y OCP simultáneamente resulta en clases con múltiples responsabilidades y cambios frecuentes que obligan a modificar código.

## Pregunta 52
**Respuesta: a**
El rectángulo en la línea de vida representa un foco de control (activation) indicando que el objeto está ejecutando una operación.

## Pregunta 53
**Respuesta: c**
Un patrón de diseño es una solución probada y reutilizable a un problema común en el diseño de software.

## Pregunta 54
**Respuesta: c**
Strategy encapsula algoritmos intercambiables, State encapsula estados que modifican el comportamiento según la situación interna.

## Pregunta 55
**Respuesta: a**
High Cohesion evita crear clases con demasiadas responsabilidades y fomenta que cada clase tenga un propósito claro.

## Pregunta 56
**Respuesta: b**
Falso. Adapter puede implementarse mediante herencia o composición.

## Pregunta 57
**Respuesta: c**
Una clase abstracta con método general y subclases específicas refleja correcta aplicación de los principios SOLID.

## Pregunta 58
**Respuesta: b**
Flecha llena: mensaje síncrono; Flecha punteada: mensaje de retorno.

## Pregunta 59
**Respuesta: a, b, c**
Adapter permite reutilizar clases existentes, actúa como traductor entre interfaces y hace que el cliente use una interfaz conocida. NO requiere modificar la clase adaptada.

## Pregunta 60
**Respuesta: a**
Decorator permite añadir responsabilidades dinámicamente, mientras que la herencia es estática.

## Pregunta 61
**Respuesta: a**
Protected Variations (GRASP) + DIP para ser flexible ante cambios en APIs externas.

## Pregunta 62
**Respuesta: c**
Singleton garantiza que solo exista una única instancia de la clase en toda la aplicación.

## Pregunta 63
**Respuesta: d**
Adapter es un patrón estructural.

## Pregunta 64
**Respuesta: c**
Indirection se aplica cuando se introduce un objeto intermedio para reducir acoplamiento.