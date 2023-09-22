const Contact = require('../models/contact');

// Create a new Contact
const createContact = async(req, res) => {
    const email = req.body.email;
    const findContact = await Contact.findOne({email: email});
    if (!findContact) {
        const newContact = await Contact.create(req.body);
        res.status(201).json({ acknowledged:true, insertedId: newContact.id });
    } else {
        throw new Error('Contact Already Exists');
    }
};

// get all contacts
const getAllContact = async (req, res) => {
  try {
    const contacts = await Contact.find({});
    res.json(contacts);
  } catch (error) {
    throw new Error(error);
}
};

// get a contact by id
const getContact = async (req, res) => {
  const { id } = req.params;
  try {
    const contact = await Contact.findById(id);
    if (!contact) {
        throw new Error('Contact not found');
    }
    res.json(contact);
  } catch (error) {
    throw new Error(error);
}
};

// Update a user
const UpdateContact = async (req, res) => {
  const { id } = req.params;
  const updateData = req.body;

  try {
    const updateContact = await Contact.findByIdAndUpdate(id, updateData, {
      new: true, // This option returns the updated document
    });

    if (!updateContact) {
        throw new Error('Contact not found');
    }

    res.status(204).json(updateContact);
  } catch (error) {
    throw new Error(error);
}
};


// delete a contact by id
const deleteContact = async (req, res) => {
  const { id } = req.params;

  try {
    const deleteContact = await Contact.findByIdAndDelete(id);

    if (!deleteContact) {
        throw new Error('Contact not found');
    }

    res.status(200).json({ message: "Contact deleted successfully" });
  } catch (error) {
    throw new Error(error);
}
};



module.exports = {
    getAllContact, 
    getContact,
    createContact,
    UpdateContact,
    deleteContact
};
