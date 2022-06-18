const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

// Data
const employees = require("./data/employees.json");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// // Routers
// const employeeRouter = require("./routes/employeesRoutes");

// // Use Routes
// app.use("/api/employees", employeeRouter);

const corsOptions = {
  origin: "http://localhost:3000",
  optionsSuccessStatus: 200,
};

// retrieve employees
app.get("/api/employees", cors(corsOptions), (req, res, next) => {
  console.log("get - /api/employees");
  res.setHeader("Content-Type", "application/json");
  res.status(200);
  res.send(JSON.stringify(employees, null, 2));
});

app.listen(8080, () => console.log("Job Dispatch API running on port 8080!"));

module.exports = app;
