const express = require("express");
const router = express.Router();
const {getAllContact, getContact, createContact} = require("../controllers/contactCTRL");

// Create contact
router.post("/create", createContact);

// GET all contacts
router.get("/", getAllContact);

// GET a single contact by ID
router.get("/:id", getContact);

module.exports = router;
