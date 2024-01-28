const Menu = require("../models/menuModel");

const getItems = async (req, res) => {
  try {
    const response = await Menu.findAll({
      order: [["_id", "ASC"]],
    });
    res.json(response);
  } catch (err) {
    console.error(err.message);
  }
};

const getItemsById = async (req, res) => {
  try {
    const response = await Menu.findOne({
      where: {
        _id: req.params.id,
      },
    });
    res.json(response);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ msg: "Internal Server Error" });
  }
};

const createItems = async (req, res) => {
  const _menu = req.body._menu;
  const _parentId = req.body._parentId;
  const _slug = req.body._slug;
  const _sort = req.body._sort;
  const _active = req.body._active;
  const _isTitle = req.body._isTitle;

  try {
    await Menu.create({
      _menu,
      _parentId,
      _slug,
      _sort,
      _active,
      _isTitle,
    });
    res.status(201).json({ msg: "Item Created Successfully" });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ msg: "Internal Server Error" });
  }
};

const updateItems = async (req, res) => {
  const updatedData = {
    _menu: req.body._menu,
    _parentId: req.body._parentId,
    _slug: req.body._slug,
    _sort: req.body._sort,
    _active: req.body._active,
    _isTitle: req.body._isTitle,
  };

  try {
    const rowsUpdated = await Menu.update(updatedData, {
      where: { _id: req.params.id },
    });

    if (rowsUpdated > 0) {
      const updatedItem = await Menu.findByPk(req.params.id);
      res.status(200).json({ msg: "Item Updated Successfully", updatedItem });
    } else {
      res.status(404).json({ msg: "Item Not Found" });
    }
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ msg: "Internal Server Error" });
  }
};

const deleteItems = async (req, res) => {
  try {
    const rowsDeleted = await Menu.destroy({
      where: { _id: req.params.id },
    });

    if (rowsDeleted > 0) {
      res.status(200).json({ msg: "Product Deleted Successfully" });
    } else {
      res.status(404).json({ msg: "Product Not Found" });
    }
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ msg: "Internal Server Error" });
  }
};

module.exports = {
  getItems,
  getItemsById,
  createItems,
  updateItems,
  deleteItems,
};
//Menu Items variable decliar
