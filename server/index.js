const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const fs = require("fs");

// Data
// const employees = require("./data/employees.json");
const employees = [
  {
    id: 1,
    lastName: "Lowry",
    firstName: "Kyle",
    profile:
      "https://images.pexels.com/photos/617278/pexels-photo-617278.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    email: "user1@mail.com",
    code: "F101",
    profession: "Drywall Installer",
    city: "Toronto",
    branch: "Abacus",
    assigned: "True",
  },
  {
    id: 2,
    lastName: "DeRozan",
    firstName: "DeMar",
    profile:
      "https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    email: "user1@mail.com",
    code: "F102",
    profession: "Drywall Installer",
    city: "Brampton",
    branch: "Pillsworth",
    assigned: "True",
  },
  {
    id: 3,
    lastName: "Van Vleet",
    firstName: "Fred",
    profile:
      "https://images.pexels.com/photos/416160/pexels-photo-416160.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    email: "user1@mail.com",
    code: "F103",
    profession: "Drywall Installer",
    city: "Bolton",
    branch: "Abacus",
    assigned: "True",
  },
  {
    id: 4,
    lastName: "Valanciunas",
    firstName: "Jonas",
    profile:
      "https://images.pexels.com/photos/209037/pexels-photo-209037.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    email: "user1@mail.com",
    code: "F104",
    profession: "Drywall Installer",
    city: "Bolton",
    branch: "Abacus",
    assigned: "True",
  },
  {
    id: 5,
    lastName: "Bosh",
    firstName: "Chris",
    profile:
      "https://images.pexels.com/photos/774731/pexels-photo-774731.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    email: "user1@mail.com",
    code: "F105",
    profession: "Drywall Installer",
    city: "Brampton",
    branch: "Abacus",
    assigned: "True",
  },
  {
    id: 6,
    lastName: "Camby",
    firstName: "Marcus",
    profile:
      "https://images.pexels.com/photos/2194261/pexels-photo-2194261.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    email: "user1@mail.com",
    code: "F106",
    profession: "Drywall Installer",
    city: "Brampton",
    branch: "Abacus",
    assigned: "True",
  },
  {
    id: 7,
    lastName: "Carter",
    firstName: "Vince",
    profile:
      "https://images.pexels.com/photos/127028/pexels-photo-127028.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    email: "user1@mail.com",
    code: "F107",
    profession: "Drywall Installer",
    city: "Toronto",
    branch: "Abacus",
    assigned: "True",
  },
  {
    id: 8,
    lastName: "Lin",
    firstName: "Jeremy",
    profile:
      "https://images.pexels.com/photos/96938/pexels-photo-96938.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    email: "user1@mail.com",
    code: "F108",
    profession: "Drywall Installer",
    city: "Toronto",
    branch: "Abacus",
    assigned: "True",
  },
  {
    id: 9,
    lastName: "Siakam",
    firstName: "Pascal",
    profile:
      "https://images.pexels.com/photos/257532/pexels-photo-257532.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    email: "user1@mail.com",
    code: "F109",
    profession: "Drywall Installer",
    city: "Toronto",
    branch: "Abacus",
    assigned: "True",
  },
];

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

  // fs.writeFile(
  //   employees,
  //   JSON.stringify(req.body, null, 2),
  //   function writeJSON(err) {
  //     if (err) return console.log("Post-Error", err);
  //     console.log(JSON.stringify(req.body));
  //     console.log("Adding ", req.body);
  //   }
  // );
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
  res.send(JSON.stringify(employees, null, 2));
});

app.listen(8080, () => console.log("Job Dispatch API running on port 8080!"));

module.exports = app;
