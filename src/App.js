import React from "react";
import "./app.css";

// React Router Dom
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Components
import TopNav from "./components/topnav/TopNav";
import Sidebar from "./components/sidebar/Sidebar";
import Home from "./pages/home/Home";
import EmployeeList from "./pages/employeeList/EmployeeList";
import Employee from "./pages/employee/Employee";
// import User from "./components/user/User";

const App = () => {
  return (
    <Router>
      <TopNav />
      <div className="container">
        <Sidebar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/employees">
            <EmployeeList />
          </Route>
          <Route path="/employee/:employeeId">
            <Employee />
          </Route>
        </Switch>
      </div>
      {/* <User /> */}
    </Router>
  );
};

export default App;
