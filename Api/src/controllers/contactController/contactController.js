const {contactHandler} = require ("../../handlers/Contact/contactHandler");


const createNewContac = async (name, lastName, phone, id_contact, comment) => {
    const newContact = await contactHandler.create({name, lastName, phone, id_contact, comment});
    return newContact;
}


module.exports = {
    createNewContac,
}