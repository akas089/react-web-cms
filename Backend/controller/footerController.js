const FooterInfo = require("../models/footerModel");

const getItems = async (req, res) => {
  try {
    const response = await FooterInfo.findAll({
      order: [["id", "ASC"]],
    });
    res.json(response);
  } catch (err) {
    console.error(err.message);
  }
};

const getItemsById = async (req, res) => {
  try {
    const response = await FooterInfo.findOne({
      where: {
        id: req.params.id,
      },
    });
    res.json(response);
  } catch (err) {
    console.err(err.message);
    res.status(500).json({ msg: "Internal server Error" });
  }
};

const createItems = async (req, res) => {
  const header = req.body.header;
  const list = req.body.list;

  try {
    await FooterInfo.create({
      header,
      list,
    });

    res.status(201).json({ msg: "Item Created Successfully" });
  } catch (err) {
    console.err(err.message);
    res.status(500).json({ msg: "Internal Server Error" });
  }
};

const updateItems = async (req, res) => {
  const updateData = {
    header: req.body.header,
    list: req.body.list,
  };

  try {
    const rowsUpdated = await FooterInfo.update(updateData, {
      where: { id: req.params.id },
    });

    if (rowsUpdated > 0) {
      const updatedItem = await FooterInfo.findByPk(req.params.id);
      res.status(200).json({ msg: "Item Updated Successfully", updatedItem });
    } else {
      res.status(404).json({ msg: "Item not found" });
    }
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ msg: "Internal Server error" });
  }
};

const deleteItems = async (req, res) => {
  try {
    const rowsDeleted = await FooterInfo.destroy({
      where: { id: req.params.id },
    });

    if (rowsDeleted > 0) {
      res.status(200).json({ msg: "Items Deleted Successfully" });
    } else {
      res.status(404).json({ msg: "Item Not found" });
    }
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ msg: "Internal Server error" });
  }
};

module.exports = {
  getItems,
  getItemsById,
  createItems,
  updateItems,
  deleteItems,
};
