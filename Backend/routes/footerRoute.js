const express = require("express");
const {
  getItems,
  getItemsById,
  createItems,
  updateItems,
  deleteItems,
} = require("../controller/footerController");
const router = express.Router();

router.get("/item", getItems);
router.get("/item/:id", getItemsById);
router.post("/item", createItems);
router.patch("/item/:id", updateItems);
router.delete("/item/:id", deleteItems);

module.exports = router;
