import React, { useState } from "react";
import "./newEmployee.css";

const NewEmployee = () => {
  const [newEmp, setNewEmp] = useState({
    id: "",
    lastName: "",
    firstName: "",
    profile: "",
    email: "",
    code: "",
    profession: "",
    city: "",
    branch: "",
    assigned: "True",
  });

  const handleChange = (e) => {
    const value = e.target.value;
    console.log("value", value.lastName);
    setNewEmp({
      ...newEmp,
      [e.target.name]: value,
    });
    console.log("newData---", newEmp);
  };

  return (
    <div className="newEmployee">
      <h1 className="newEmployeeTitle">New Employee</h1>
      <form className="newEmployeeForm">
        <div className="newEmployeeItem">
          <label>First Name</label>
          <input
            type="text"
            name="firstName"
            value={newEmp.firstName}
            onChange={handleChange}
            placeholder="First Name"
          />
        </div>
        <div className="newEmployeeItem">
          <label>Last Name</label>
          <input
            type="text"
            name="lastName"
            value={newEmp.lastName}
            onChange={handleChange}
            placeholder="Last Name"
          />
        </div>
        <div className="newEmployeeItem">
          <label>Profile</label>
          <input
            type="text"
            name="profile"
            value={newEmp.profile}
            onChange={handleChange}
            placeholder="Profile"
          />
        </div>
        <div className="newEmployeeItem">
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={newEmp.email}
            onChange={handleChange}
            placeholder="Email"
          />
        </div>
        <div className="newEmployeeItem">
          <label>Code</label>
          <input
            type="text"
            name="code"
            value={newEmp.code}
            onChange={handleChange}
            placeholder="Code"
          />
        </div>
        <div className="newEmployeeItem">
          <label>Profession</label>
          <input
            type="text"
            name="profession"
            value={newEmp.profession}
            onChange={handleChange}
            placeholder="Profession"
          />
        </div>
        <div className="newEmployeeItem">
          <label>City</label>
          <input
            type="text"
            name="city"
            value={newEmp.city}
            onChange={handleChange}
            placeholder="City"
          />
        </div>
        <div className="newEmployeeItem">
          <label>Branch</label>
          <input
            type="text"
            name="branch"
            value={newEmp.branch}
            onChange={handleChange}
            placeholder="Branch"
          />
        </div>
        <div className="newEmployeeItem">
          <label>Assigned</label>
          <select
            name="assigned"
            id="assigned"
            value={newEmp.assigned}
            className="newEmployeeAssign"
            onChange={handleChange}
          >
            <option value="true">True</option>
            <option value="false">False</option>
          </select>
        </div>
        <button className="newEmployeeBtn" onClick={handleChange}>
          Create New Employee
        </button>
      </form>
    </div>
  );
};

export default NewEmployee;
