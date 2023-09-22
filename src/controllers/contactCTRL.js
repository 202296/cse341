const Contact = require('../models/contact');


const createContact = async(req, res) => {
    const email = req.body.email;
    const findUser = await Contact.findOne({email: email});
    if (!findUser) {
        // Create a new Contact
        const newUser = await Contact.create(req.body);
        res.json(newUser)
    } else {
        // Contact already exists
        throw new Error('Contact Already Exists');
    }
};

// GET all contacts
const getAllContact = async (req, res) => {
  try {
    const contacts = await Contact.find({});
    res.json(contacts);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// GET a single contact by ID
const getContact = async (req, res) => {
  const { id } = req.params;
  try {
    const contact = await Contact.findById(id);
    if (!contact) {
      return res.status(404).json({ error: "Contact not found" });
    }
    res.json(contact);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = {getAllContact, getContact, createContact};
