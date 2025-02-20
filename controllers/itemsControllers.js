const Item = require("../models/item");

// Add a new item
const addItem = async (req, res) => {
    try {
        const { name, age } = req.body;
        if (!name || !age) {
            return res.status(400).send("Name and Age are required.");
        }
        const newItem = new Item({ name, age });
        await newItem.save();
        res.status(201).send("Data added successfully!");
    } catch (error) {
        res.status(500).send("An error occurred: " + error.message);
    }
};

// Get all items
const getItems = async (req, res) => {
    try {
        const items = await Item.find();
        res.status(200).json(items);
    } catch (err) {
        res.status(500).send("An error occurred: " + err.message);
    }
};

// Get a single item by ID
const getItemById = async (req, res) => {
    try {
        const item = await Item.findById(req.params.id);
        if (!item) return res.status(404).send("Item not found");
        res.json(item);
    } catch (err) {
        res.status(400).json({ err: `Error: ${err.message}` });
    }
};

// Update an item
const updateItem = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, age } = req.body;
        const updatedItem = await Item.findByIdAndUpdate(id, { name, age }, { new: true });
        if (!updatedItem) return res.status(404).send("Item not found");
        res.status(200).json(updatedItem);
    } catch (error) {
        res.status(500).send("An error occurred: " + error.message);
    }
};

// Delete an item
const deleteItem = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedItem = await Item.findByIdAndDelete(id);
        if (!deletedItem) return res.status(404).send("Item not found");
        res.status(200).send("Item deleted successfully!");
    } catch (error) {
        res.status(500).send("An error occurred: " + error.message);
    }
};

module.exports = { addItem, getItems, getItemById, updateItem, deleteItem };
