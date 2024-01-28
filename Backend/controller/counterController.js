const CounterInfo = require("../models/counterModel");
const path = require("path");
const fs = require("fs");

const getItems = async (req, res) => {
  try {
    const response = await CounterInfo.findAll();
    res.json(response);
  } catch (err) {
    console.error(err.message);
  }
};

const getItemsById = async (req, res) => {
  try {
    const response = await CounterInfo.findOne({
      where: {
        id: req.params.id,
      },
    });
    res.json(response);
  } catch (error) {
    console.log(error.message);
  }
};

const createItems = (req, res) => {
  if (req.files === null)
    return res.status(400).json({ msg: "No File Uploaded" });
  const file = req.files.file;
  const fileSize = file.data.length;
  const ext = path.extname(file.name);
  const fileName = file.md5 + ext;
  const url = `${req.protocol}://${req.get("host")}/images/${fileName}`;
  const allowedType = [".png", ".jpg", ".jpeg"];
  const heading = req.body.heading;
  const sub_heading = req.body.sub_heading;
  const count = req.body.count;
  const title = req.body.title;
  const sub_title = req.body.sub_title;
  const menu = req.body.menu;

  if (!allowedType.includes(ext.toLowerCase()))
    return res.status(422).json({ msg: "Invalid Images" });
  if (fileSize > 6000000)
    return res.status(422).json({ msg: "Image must be less than 5 MB" });

  file.mv(`./public/images/${fileName}`, async (err) => {
    if (err) return res.status(500).json({ msg: err.message });
    try {
      await CounterInfo.create({
        image: fileName,
        url,
        heading,
        sub_heading,
        count,
        title,
        sub_title,
        menu,
      });
      res.status(201).json({ msg: "Item Created Successfuly" });
    } catch (error) {
      console.log(error.message);
    }
  });
};

const updateItems = async (req, res) => {
  const company = await CounterInfo.findOne({
    where: {
      id: req.params.id,
    },
  });
  if (!company) return res.status(404).json({ msg: "No Data Found" });

  let fileName = "";
  if (req.files === null) {
    fileName = company.image;
  } else {
    const file = req.files.file;
    const fileSize = file.data.length;
    const ext = path.extname(file.name);
    fileName = file.md5 + ext;
    const allowedType = [".png", ".jpg", ".jpeg"];

    if (!allowedType.includes(ext.toLowerCase()))
      return res.status(422).json({ msg: "Invalid Images" });
    if (fileSize > 5000000)
      return res.status(422).json({ msg: "Image must be less than 5 MB" });

    const filepath = `./public/images/${company.image}`;
    fs.unlinkSync(filepath);

    file.mv(`./public/images/${fileName}`, (err) => {
      if (err) return res.status(500).json({ msg: err.message });
    });
  }
  const url = `${req.protocol}://${req.get("host")}/images/${fileName}`;
  const heading = req.body.heading;
  const sub_heading = req.body.sub_heading;
  const count = req.body.count;
  const title = req.body.title;

  try {
    await CounterInfo.update(
      {
        image: fileName,
        url,
        heading,
        sub_heading,
        count,
        title,
        sub_title,
        menu,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    res.status(200).json({ msg: "Company Info Item Updated Successfuly" });
  } catch (error) {
    console.log(error.message);
  }
};

const deleteItems = async (req, res) => {
  const company = await CounterInfo.findOne({
    where: {
      id: req.params.id,
    },
  });
  if (!company) return res.status(404).json({ msg: "No Data Found" });

  try {
    const filepath = `./public/images/${company.image}`;
    fs.unlinkSync(filepath);
    await CounterInfo.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ msg: "SocialItem Deleted Successfuly" });
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = {
  getItems,
  getItemsById,
  createItems,
  updateItems,
  deleteItems,
};
