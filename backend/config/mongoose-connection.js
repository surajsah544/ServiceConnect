const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/serviceConnect")
  .then(() => {
    console.log("App Service Connect is connected to DB");
  })
  .catch((error) => {
    console.log(error.message);
  });

module.exports = mongoose.connection;
