import React from "react";
import "./app.css";

// React Router Dom
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Components
import TopNav from "./components/topnav/TopNav";
import Sidebar from "./components/sidebar/Sidebar";
import Home from "./components/pages/home/Home";
import EmployeeList from "./components/pages/employeeList/EmployeeList";
// import Employees from "./components/employee/Employees";

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
        </Switch>
      </div>
      {/* <Employees /> */}
    </Router>
  );
};

export default App;
