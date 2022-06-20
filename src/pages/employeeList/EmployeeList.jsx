import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./employeeList.css";

// MUI
import { DataGrid } from "@mui/x-data-grid";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const EmployeeList = (props) => {
  // const [emps, setEmps] = useState([]);

  const handleDelete = (id) => {
    axios.delete(`//localhost:8080/api/employees/delete/${id}`);
    // setEmps(
    //   // filters through entire employee list
    //   // if item id matches, it removes
    //   emps.filter((emps) => {
    //     return emps.id !== id;
    //   })
    // );

    // const response = await axios
    //   .delete(`//localhost:8080/api/employees/delete/${id}`)
    //   .then((res) => setEmps(res));
    // console.log("response", response);
  };

  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "firstName", headerName: "First Name", width: 130 },
    { field: "lastName", headerName: "Last Name", width: 130 },
    {
      field: "profile",
      headerName: "Profile",
      width: 70,
      description: "Cannot sort this column",
      sortable: false,
      renderCell: (params) => {
        return (
          <div className="employeeListProfile">
            <img className="employeeListImg" src={params.row.profile} alt="" />
          </div>
        );
      },
    },
    { field: "email", headerName: "Email", width: 200 },
    { field: "code", headerName: "Code", width: 70 },
    { field: "profession", headerName: "Profession", width: 130 },
    { field: "city", headerName: "City", width: 130 },
    { field: "branch", headerName: "Branch", width: 130 },
    { field: "assigned", headerName: "Assigned", width: 100 },
    {
      field: "action",
      headerName: "Action",
      width: 200,
      description: "Cannot sort this column",
      sortable: false,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/employee/" + params.row.id}>
              <button className="employeeListEditBtn">
                <EditIcon className="employeeListEdit" />
                Edit
              </button>
            </Link>
            <button
              className="employeeListDeleteBtn"
              onClick={() => handleDelete(params.row.id)}
            >
              <DeleteIcon className="employeeListDelete" />
              Delete
            </button>
          </>
        );
      },
    },
    {
      field: "fullName",
      headerName: "Full Name",
      description: "Cannot sort this column",
      sortable: false,
      width: 200,
      valueGetter: (params) =>
        `${params.row.firstName || ""} ${params.row.lastName || ""}`,
    },
  ];

  return (
    <div className="employeeList">
      <h1 className="employeeListTitle">Employee List</h1>
      <DataGrid
        rows={props.employees}
        columns={columns}
        disableSelectionOnClick
        pageSize={10}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
};

export default EmployeeList;
