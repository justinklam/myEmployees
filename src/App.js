import React, { useEffect, useState } from "react";
const axios = require("axios").default;

function App() {
  const [employees, setEmployees] = useState([]);
  // state = {
  //   employees: [],
  // };

  const getEmployeeData = async () => {
    await axios
      .get(`//localhost:8080/api/employees`)
      .then((response) => response.json())
      .then((employees) => this.setEmployees({ employees }));
    // const employeeData = response.json;
    // setEmployees(employeeData);
  };

  useEffect(() => {
    getEmployeeData();
  }, []);

  console.log(JSON.stringify(employees, null, 2));

  // axios return. loop over the variables below

  // const getEmployees = () => {
  //   return axios.post("//localhost:8080/api/employees");
  // };

  // console.log(getEmployees);

  // const { employees } = this.state;

  // console.log(this.state);

  return (
    <div className="App">
      <h1>Plexxis Employees</h1>
      {employees.map((employee) => (
        <div key={employee.id}>
          {Object.keys(employee).map((key) => (
            <span key={key}>
              {key}:{employee[key]}
            </span>
          ))}
        </div>
      ))}
    </div>
  );
}

export default App;
