import React from "react";
import "./app.css";

// Components
import TopNav from "./components/topnav/TopNav";
import Sidebar from "./components/sidebar/Sidebar";
import Home from "./components/pages/home/Home";
// import Employees from "./components/employee/Employees";

const App = () => {
  return (
    <>
      <TopNav />
      <div className="container">
        <Sidebar />
        <Home />
        {/* <div className="other-area">Other Pages</div> */}
      </div>
      {/* <Employees /> */}
    </>
  );
};

export default App;
