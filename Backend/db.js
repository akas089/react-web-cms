const express = require("express");
const FileUpload = require("express-fileupload");
const cors = require("cors");
const menuRoutes = require("./routes/menuRoute");
const socialRoutes = require("./routes/socialRoute");
const contentRoutes = require("./routes/contentRoute");
const companyInfoRoutes = require("./routes/companyInfoRoute");
const reviewInfoRoutes = require("./routes/reviewRoute");
const counterInfoRoutes = require("./routes/counterRouter");
const footerInfoRoutes = require("./routes/footerRoute");

const app = express();

app.use(express.json());
app.use(cors());
app.use(FileUpload());
app.use(express.static("public"));

app.use("/header", menuRoutes);
app.use("/social", socialRoutes);
app.use("/section", contentRoutes);
app.use("/company", companyInfoRoutes);
app.use("/review", reviewInfoRoutes);
app.use("/counter", counterInfoRoutes);
app.use("/footer", footerInfoRoutes);

app.listen(8000, () => {
  console.log(`server runing at 8000 port`);
});
