import React from "react";
import "./newEmployee.css";

const NewEmployee = () => {
  return (
    <div className="newEmployee">
      <h1 className="newEmployeeTitle">New Employee</h1>
      <form className="newEmployeeForm">
        <div className="newEmployeeItem">
          <label>First Name</label>
          <input type="text" placeholder="First Name" />
        </div>
        <div className="newEmployeeItem">
          <label>Last Name</label>
          <input type="text" placeholder="Last Name" />
        </div>
        <div className="newEmployeeItem">
          <label>Profile</label>
          <input type="text" placeholder="Profile" />
        </div>
        <div className="newEmployeeItem">
          <label>Email</label>
          <input type="email" placeholder="Email" />
        </div>
        <div className="newEmployeeItem">
          <label>Code</label>
          <input type="text" placeholder="Code" />
        </div>
        <div className="newEmployeeItem">
          <label>Profession</label>
          <input type="text" placeholder="Profession" />
        </div>
        <div className="newEmployeeItem">
          <label>City</label>
          <input type="text" placeholder="City" />
        </div>
        <div className="newEmployeeItem">
          <label>Branch</label>
          <input type="text" placeholder="Branch" />
        </div>
        <div className="newEmployeeItem">
          <label>Assigned</label>
          <input type="text" placeholder="Assigned" />
        </div>
      </form>
    </div>
  );
};

export default NewEmployee;
