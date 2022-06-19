import React, { useEffect, useState } from "react";
import axios from "axios";
import "./app.css";

// React Router Dom
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
import TopNav from "./components/topnav/TopNav";
import Sidebar from "./components/sidebar/Sidebar";
import Home from "./pages/home/Home";
import EmployeeList from "./pages/employeeList/EmployeeList";
import Employee from "./pages/employee/Employee";
import NewEmployee from "./pages/newEmployee/NewEmployee";
// import User from "./components/user/User";

const App = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    axios
      .get("//localhost:8080/api/employees")
      .then((res) => {
        // console.log("api-data", res.data);
        setEmployees(res.data);
      })
      .catch((err) => {
        console.log("Error", err);
      });
  }, []);

  return (
    <Router>
      <TopNav />
      <div className="container">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/employees"
            element={<EmployeeList employees={employees} />}
          />
          <Route
            path="/employee/:employeeId"
            element={<Employee employees={employees} />}
          />
          <Route path="/newEmployee" element={<NewEmployee />} />
        </Routes>
      </div>
      {/* <User /> */}
    </Router>
  );
};

export default App;
