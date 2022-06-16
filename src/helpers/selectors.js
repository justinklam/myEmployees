import axios from "axios";

// Retrieve employee data
const getEmployees = () => {
  axios.get("//localhost:8080/api/employees").then((response) => {
    let employeeData = response.data;
    console.log(employeeData);
  });
};

export default getEmployees;
