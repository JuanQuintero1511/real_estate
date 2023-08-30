const { createContact } = require("../../controllers/contactController/contactController");

const createHandlerContac = async (req, res) => {

        const { name, letsName, phone, comment } = req.body;

    try {

        if (!name || !letsName || !phone || !comment) {
            return res.status(400).json({ error: "All fields are required" });
        }

        const newContact = await createContact(name, letsName, phone, comment);

        return res.status(201).json({ message: "Created Comment", newContact });
    } catch (error) {
    }
};


module.exports = {
    createHandlerContac
}
