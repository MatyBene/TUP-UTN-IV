// Ejercicio 13: Agenda de contactos con métodos para agregar, eliminar, buscar y listar

// Crear objeto literal agenda con arreglo de contactos
const agenda = {
    contactos: [
        { id: 1, nombre: "Juan Pérez", telefono: "123-456-7890" },
        { id: 2, nombre: "María García", telefono: "987-654-3210" },
        { id: 3, nombre: "Carlos López", telefono: "555-123-4567" }
    ],

    // Método para agregar un contacto usando push()
    agregarContacto(contacto) {
        this.contactos.push(contacto);
        console.log(`Contacto ${contacto.nombre} agregado exitosamente.`);
    },

    // Método para eliminar un contacto por id usando filter()
    eliminarContacto(id) {
        const contactosIniciales = this.contactos.length;
        this.contactos = this.contactos.filter(contacto => contacto.id !== id);
        
        if (this.contactos.length < contactosIniciales) {
            console.log(`Contacto con ID ${id} eliminado exitosamente.`);
        } else {
            console.log(`No se encontró contacto con ID ${id}.`);
        }
    },

    // Método para buscar un contacto por nombre usando find()
    buscarContacto(nombre) {
        const contacto = this.contactos.find(contacto => 
            contacto.nombre.toLowerCase().includes(nombre.toLowerCase())
        );
        
        if (contacto) {
            console.log("Contacto encontrado:", contacto);
            return contacto;
        } else {
            console.log(`No se encontró contacto con nombre: ${nombre}`);
            return null;
        }
    },

    // Método para listar todos los contactos
    listarContactos() {
        console.log("\n=== LISTA DE CONTACTOS ===");
        if (this.contactos.length === 0) {
            console.log("No hay contactos en la agenda.");
        } else {
            this.contactos.forEach((contacto, index) => {
                console.log(`${index + 1}. ID: ${contacto.id} | Nombre: ${contacto.nombre} | Teléfono: ${contacto.telefono}`);
            });
        }
        console.log("========================\n");
    }
};

// Ejemplos de uso
console.log("=== EJERCICIO 13: AGENDA DE CONTACTOS ===\n");

// Listar contactos iniciales
agenda.listarContactos();

// Agregar un nuevo contacto
const nuevoContacto = { id: 4, nombre: "Ana Martínez", telefono: "444-555-6666" };
agenda.agregarContacto(nuevoContacto);

// Listar contactos después de agregar
agenda.listarContactos();

// Buscar un contacto
agenda.buscarContacto("María");
agenda.buscarContacto("Pedro"); // No existe

// Eliminar un contacto
agenda.eliminarContacto(2);

// Listar contactos después de eliminar
agenda.listarContactos();

// Intentar eliminar un contacto que no existe
agenda.eliminarContacto(10);

// Agregar otro contacto con ID automático
const otroContacto = { 
    id: Math.max(...agenda.contactos.map(c => c.id)) + 1, 
    nombre: "Roberto Silva", 
    telefono: "777-888-9999" 
};
agenda.agregarContacto(otroContacto);

// Listar contactos finales
agenda.listarContactos();