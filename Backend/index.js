const express = require("express");
const dotevn = require("dotenv");
const router = require("./routes/register");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const privateRoute = require("./routes/posts");
dotevn.config();
const cors = require("cors");
const app = express();

//Middlewares
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
//Connnect to db
mongoose.connect(
  process.env.DB_CONNECTION,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("Connected to db");
  }
);

app.use("/api/auth", router);
app.use('/api/posts',privateRoute);
app.listen(process.env.PORT, () => {
  console.log(`Server Running on port ${process.env.PORT}`);
});
