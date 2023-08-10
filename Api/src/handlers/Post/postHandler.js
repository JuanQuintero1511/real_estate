const newPost = (req, res) => {

    let newPost = {title, img, body, details, characteristics, description};

    try {
        const {title, img, body, details, characteristics, description} = req.body
           
            if (!title && !img && !body && !details && !characteristics && !description) {
                throw new Error ("Data is required");
                
            } else if (newPost) {
                await = createNewPost (
                    title, 
                    img, 
                    body, 
                    details,
                    characteristics,
                    description
                );

                return res.status(201).json ({newPost});
            }

    } catch (error) {
        return res.status(400).json({error: error.message});
    }
}