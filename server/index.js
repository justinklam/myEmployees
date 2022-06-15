const express = require("express");
const cors = require("cors");
const app = express();
const employees = require("./data/employees.json");

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
