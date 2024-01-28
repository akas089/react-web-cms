const express = require("express");
const {
  getItems,
  getItemsById,
  createItems,
  updateItems,
  deleteItems,
} = require("../controller/reviewController");
const router = express.Router();

router.get("/info", getItems);
router.get("/info/:id", getItemsById);
router.post("/info", createItems);
router.patch("/info/:id", updateItems);
router.delete("/info/:id", deleteItems);

module.exports = router;
