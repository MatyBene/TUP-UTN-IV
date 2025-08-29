const contacts = require("./data/contacts");

const agenda = {
    contactos: contacts,

    addContact(contact) {
        this.contacts.push(contact);
        console.log(`Contacto ${contact.nombre} agregado exitosamente.`);
    },

    deleteContact(id) {
        const iContacts = this.contacts.length;
        this.contacts = this.contacts.filter(contact => contact.id !== id);
        
        if (this.contacts.length < iContacts) {
            console.log(`Contacto con ID ${id} eliminado exitosamente.`);
        } else {
            console.log(`No se encontró contacto con ID ${id}.`);
        }
    },

    searchContact(name) {
        const contact = this.contacts.find(contact => 
            contact.name.toLowerCase().includes(name.toLowerCase())
        );
        
        if (contact) {
            console.log("Contacto encontrado:", contact);
            return contact;
        } else {
            console.log(`No se encontró contacto con nombre: ${name}`);
            return null;
        }
    },

    showContacts() {
        console.log("\n=== LISTA DE CONTACTOS ===");
        if (this.contacts.length === 0) {
            console.log("No hay contactos en la agenda.");
        } else {
            this.contacts.forEach((contact, index) => {
                console.log(`${index + 1}. ID: ${contact.id} | Nombre: ${contact.name} | Teléfono: ${contact.phone}`);
            });
        }
        console.log("========================\n");
    }
};