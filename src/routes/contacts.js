// routes.js
const express = require("express");
const router = express.Router();
const asyncHandler = require('express-async-handler');
const contacts = require("../controllers/contactCTRL");

// Create contact
router.post("/create", asyncHandler(contacts.createContact));

// GET all contacts
router.get("/", asyncHandler(contacts.getAllContact));

// GET a single contact by ID
router.get("/:id", asyncHandler(contacts.getContact));

// PUT update a contact by ID
router.put("/:id", asyncHandler(contacts.UpdateContact));

// DELETE a contact by ID
router.delete("/:id", asyncHandler(contacts.deleteContact));

module.exports = router;
