import React, { useEffect, useState } from "react";
import axios from "axios";

// Helper Function
import getEmployees from "../../helpers/selectors.js";

const Employees = () => {
  const [employees, setEmployees] = useState([]);

  // const [employees, setEmployees] = useState([
  //   {
  //     id: response.data.id,
  //     name: response.data.name,
  //     code: response.data.code,
  //     profession: response.data.profession,
  //     color: response.data.color,
  //     city: response.data.city,
  //     branch: response.data.branch,
  //     assigned: response.data.assigned,
  //   },
  // ]);

  useEffect(() => {
    axios.get("//localhost:8080/api/employees").then((response) => {
      setEmployees(response.data);
      // console.log("res", employees);
    });
  }, []);

  return (
    <div className="employees">
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
