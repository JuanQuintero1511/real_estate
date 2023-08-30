const { Contact } = require('../../routes/models/contactModel');

// Controlador para crear un nuevo contacto
const createContact = async (req, res) => {
    const { name, letsName, phone, comment } = req.body;

    try {
        // Validación de campos
        if (!name || !letsName || !phone || !comment) {
            return res.status(400).json({ error: 'Todos los campos son requeridos.' });
        }

        // Creación de un nuevo contacto en la base de datos (usando Sequelize)
        const newContact = await Contact.create({ name, letsName, phone, comment });
        
        return res.status(201).json(newContact);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};


// Ruta para obtener un contacto por ID
router.get('/:id', async (req, res) => {
    try {
        const contactId = req.params.id;
        const contact = await getContactById(contactId);
        res.json(contact);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Ruta para actualizar un contacto por ID
router.put('/:id', async (req, res) => {
    try {
        const contactId = req.params.id;
        const { name, letsName, phone, comment } = req.body;
        const updatedContact = await updateContact(contactId, name, letsName, phone, comment);
        res.json(updatedContact);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Ruta para eliminar un contacto por ID
router.delete('/:id', async (req, res) => {
    try {
        const contactId = req.params.id;
        await deleteContact(contactId);
        res.status(204).send();
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

module.exports = { 
    createContact
};
