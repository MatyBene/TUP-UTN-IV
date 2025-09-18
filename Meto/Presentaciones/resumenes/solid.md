# SOLID

Son cinco principios ideados para hacer que los diseños de software sean mas comprensibles, flexibles y faciles de entender.

# S (Single Responsibility Principle)

Principio de responsabilidad unica. Una clase solo debe tener una razon para cambiar.

Cada clase es responsable de una unica parte de la funcionalidad proporcionada por el software, esa responsabilidad tiene que quedar totalmente encapsulada por la clase. Se busca reducir la complejidad.

# O (Open/Closed Principle)

Principio de abierto/cerrado. Las clases deben estar abiertas a la extension pero cerradas a la modificacion.

La idea fundamental de este principio es evitar que el codigo existente se descomponga cuando se implementan nuevas funciones.

# L (Liskov Substitution Principle)

Principio de sustitucion de Liskov. Al extender una clase se debe tener la capacidad de pasar objetos de las subclases en lugar de objetos de la clase padre, sin descomponer el codigo cliente.

# I (Interface Segregation Principle)

Principio de segregacion de la interfaz. No se debe forzar a los clientes a depender de metodos que no utilizan.

Interfaces estrechas para que las clases del cliente no tengan que implementar comportamientos que no necesitan.

# D (Dependency Inversion Principle)

Principio de inversion de la dependencia. Las clases de alto nivel no deben depender de clases de bajo nivel. Ambas deben depender de abstracciones. Las abstracciones no deben depender de detalles. Los detalles deben depender de abstracciones.

Las clases de bajo nivel implementan operaciones basicas, como conectar con una base de datos.

Las clases de alto nivel contienen la logica de negocio compleja que ordena a las clases de bajo nivel que hagan algo.