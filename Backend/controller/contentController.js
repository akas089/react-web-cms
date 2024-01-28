const Content = require("../models/contentModel");
const path = require("path");
const fs = require("fs");

const getItems = async (req, res) => {
  try {
    const response = await Content.findAll();
    res.json(response);
  } catch (err) {
    console.error(err.message);
  }
};

const getItemsById = async (req, res) => {
  try {
    const response = await Content.findOne({
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
  if (req.files === null)
    return res.status(400).json({ msg: "No File Uploaded" });

  const file = req.files.file;
  const fileSize = file.data.length;
  const ext = path.extname(file.name);
  const fileName = file.md5 + ext;
  const _url = `${req.protocol}://${req.get("host")}/images/${fileName}`;
  const allowedType = [".png", ".jpg", ".jpeg"];
  const _menu = req.body._menu;
  const _heading = req.body._heading;
  const _sub_heading = req.body._sub_heading;
  const _title = req.body._title;
  const _sub_title = req.body._sub_title;
  const _description = req.body._description;
  const _button = req.body._button;
  const _link = req.body._link;
  const _serial = req.body._serial;
  const _status = req.body._status;

  if (!allowedType.includes(ext.toLocaleLowerCase()))
    return res.status(422).json({ msg: "Invaild Images" });
  if (fileSize > 6000000)
    return res.status(422).json({ msg: "Image must be less than 5 MB" });

  file.mv(`./public/images/${fileName}`, async (err) => {
    if (err) return res.status(500).json({ msg: err.message });

    try {
      await Content.create({
        _menu,
        _heading,
        _sub_heading,
        _title,
        _sub_title,
        _description,
        _button,
        _link,
        _image: fileName,
        _url,
        _serial,
        _status,
      });
      res.status(201).json({ msg: "Item Created Successfully" });
    } catch (error) {
      console.log(error.message);
      res.status(500).json({ msg: "Internal Server Error" });
    }
  });
};

const updateItems = async (req, res) => {
  const content = await Content.findOne({
    where: {
      _id: req.params.id,
    },
  });
  if (!content) return res.status(404).json({ msg: "No Data Found" });

  let fileName = "";
  if (req.files === null) {
    fileName = content.image;
  } else {
    const file = req.files.file;
    const fileSize = file.data.length;
    const ext = path.extname(file.name);
    fileName = file.md5 + ext;
    const allowedType = [".png", ".jpg", ".jpeg"];

    if (!allowedType.includes(ext.toLowerCase()))
      return res.status(422).json({ msg: "Invalid Images" });
    if (fileSize > 6000000)
      return res.status(422).json({ msg: "Image must be less than 5 MB" });

    const filepath = `./public/images/${content.image}`;
    fs.unlinkSync(filepath);

    file.mv(`./public/images/${fileName}`, (err) => {
      if (err) return res.status(500).json({ msg: err.message });
    });
  }

  const _menu = req.body._menu;
  const _heading = req.body._heading;
  const _sub_heading = req.body._sub_heading;
  const _title = req.body._title;
  const _sub_title = req.body._sub_title;
  const _description = req.body._description;
  const _button = req.body._button;
  const _link = req.body._link;
  const _url = `${req.protocol}://${req.get("host")}/images/${fileName}`;

  try {
    await Content.update(
      {
        _menu,
        _heading,
        _sub_heading,
        _title,
        _sub_title,
        _description,
        _button,
        _link,
        _image: fileName,
        _url,
      },
      {
        where: {
          _id: req.params.id,
        },
      }
    );
    res.status(200).json({ msg: "Content Info Item Updated Successfuly" });
  } catch (error) {
    console.log(error.message);
  }
};

const deleteItems = async (req, res) => {
  try {
    const rowsDeleted = await Content.destroy({
      where: { _id: req.params.id },
    });

    if (rowsDeleted > 0) {
      res.status(200).json({ msg: "Item Deleted Successfully" });
    } else {
      res.status(404).json({ msg: "Item Not Found" });
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
