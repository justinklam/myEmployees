import React, { useEffect, useState } from "react";
import axios from "axios";

const Employees = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    axios.get("//localhost:8080/api/employees").then((response) => {
      setEmployees(response.data);
      // console.log("res", employees);
    });
  }, []);

  return (
    <div className="employee">
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
};

export default Employees;
