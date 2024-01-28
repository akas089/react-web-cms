const express = require("express");
const {
  getItems,
  getItemsById,
  createItems,
  updateItems,
  deleteItems,
} = require("../controller/menuController");
const router = express.Router();

router.get("/title", getItems);
router.get("/title/:id", getItemsById);
router.post("/title", createItems);
router.patch("/title/:id", updateItems);
router.delete("/title/:id", deleteItems);

module.exports = router;
