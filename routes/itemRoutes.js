const express = require("express");
const router = express.Router();
const {
    addItem,
    getItems,
    getItemById,
    updateItem,
    deleteItem
} = require("../controllers/itemsControllers");

// Define routes
router.post("/add", addItem);
router.get("/get", getItems);
router.get("/getoneuser/:id", getItemById);
router.put("/update/:id", updateItem);
router.delete("/delete/:id", deleteItem);

module.exports = router;
