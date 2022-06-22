const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const fs = require("fs");

// Data
const employees = require("./data/employees.json");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

const corsOptions = {
  origin: "http://localhost:3000",
  optionsSuccessStatus: 200,
};

// Retrieve Employees
app.get("/api/employees", cors(corsOptions), (req, res) => {
  console.log("get - /api/employees");
  res.setHeader("Content-Type", "application/json");
  res.status(200);
  res.send(JSON.stringify(employees, null, 2));
});

// Create Employee
app.post("/api/employees/create", cors(corsOptions), (req, res) => {
  console.log("post-create - /api/employees");
  console.log("post-create", req.body);
  employees.push(req.body);
  // res.json("Employee Created");
  res.send(JSON.stringify(employees, null, 2));
  console.log("after post", employees);

  fs.writeFile(
    employees,
    JSON.stringify(req.body, null, 2),
    function writeJSON(err) {
      if (err) return console.log("Post-Error", err);
      console.log(JSON.stringify(req.body));
      console.log("Adding ", req.body);
    }
  );
});

// Update Employee
app.put("/api/employees/update", cors(corsOptions), (req, res) => {
  console.log("put-update - /api/employees");
});

// Delete Employee
app.delete("/api/employees/delete/:id", cors(corsOptions), (req, res) => {
  console.log("delete - /api/employees");
  const index = employees.indexOf(
    employees.find((value) => value.id === req.params.id.toString())
  );
  employees.splice(index, 1);
  console.log(`Employee deleted successfully`);
  res.status(200);
});

app.listen(8080, () => console.log("Job Dispatch API running on port 8080!"));

module.exports = app;
