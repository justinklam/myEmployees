import React from "react";
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
  return (
    <Router>
      <TopNav />
      <div className="container">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/employees" element={<EmployeeList />} />
          <Route path="/employee/:employeeId" element={<Employee />} />
          <Route path="/newEmployee" element={<NewEmployee />} />
        </Routes>
      </div>
      {/* <User /> */}
    </Router>
  );
};

export default App;
