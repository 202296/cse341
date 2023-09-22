const express = require("express");
const router = express.Router();
const asyncHandler = require('express-async-handler');
const {
    getAllContact, 
    getContact, 
    createContact, 
    UpdateContact, 
    deleteContact
    } = require("../controllers/contactCTRL");


// Create contact
router.post("/create", asyncHandler(createContact));

// GET all contacts
router.get("/", asyncHandler(getAllContact));

// GET a single contact by ID
router.get("/:id", asyncHandler(getContact));

// PUT update a contact by ID
router.put("/:id", asyncHandler(UpdateContact));


// DELETE a contact by ID
router.delete("/:id", asyncHandler(deleteContact));


module.exports = router;
