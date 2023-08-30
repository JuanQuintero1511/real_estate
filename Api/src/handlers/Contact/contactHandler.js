export const newContact = async (req, res) => {
    try {
        const { name, letsName, phone, comment } = req.body;

        if (!name || !letsName || !phone || !comment) {
            return res.status(400).json({ error: "All fields are required" });
        }

        const newContact = await createNewContact(name, letsName, phone, comment);

        return res.status(201).json({ newContact });
    } catch (error) {
        return res.status(500).json({ error: "Internal server error" });
    }
};
