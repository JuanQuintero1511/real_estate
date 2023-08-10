const newContac = (req, res) => {

    let newContact = {name, letsName, phone, comment};

    try {
        const {name, letsName, phone, comment} = req.body
           
            if (!name && !letsName && !phone && !comment) {
                throw new Error ("Data is required");
                
            } else if (newContact) {
                await = createNewContact (
                    name,
                    letsName,
                    phone,
                    comment
                );

                return res.status(201).json ({newContact});
            }

    } catch (error) {
        return res.status(400).json({error: error.message});
    }
}