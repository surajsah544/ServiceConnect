const express = require("express");
const db = require("./config/mongoose-connection");
const employerRoutes = require("./routes/employer/employerRoutes");
const employeeRoutes = require("./routes/employee/employeeRoutes");
const AuthRoutes = require("./routes/employer/AuthRoutes");
const cookieParser = require("cookie-parser");
const app = express();
require("dotenv").config();

app.use(cookieParser());
app.use(express.json());
app.use("/serviceconnect/employer", employerRoutes);
app.use("/serviceconnect/employee", employeeRoutes);
app.use("/serviceconnect/employer/auth", AuthRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Server is running on localhost:${process.env.PORT}`);
});
