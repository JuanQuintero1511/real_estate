const express = require('express');
const router = express.Router();
const { createNewContact, getContactById, updateContact, deleteContact } = require('../../handlers/Contact/contactHandler');

// Ruta para crear un nuevo contacto
router.post('/create', async (req, res) => {
    try {
        const { name, letsName, phone, comment } = req.body;
        const newContact = await createNewContact(name, letsName, phone, comment);
        res.status(201).json(newContact);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

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

module.exports = router;
