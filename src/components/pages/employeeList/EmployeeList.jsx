import React, { useState } from "react";
import "./employeeList.css";
import { Link } from "react-router-dom";

// MUI
import { DataGrid } from "@mui/x-data-grid";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

// Dummy Data
import { employeeRows } from "../../../helpers/selectors";

const EmployeeList = () => {
  const [data, setData] = useState(employeeRows);

  const handleDelete = (id) => {
    // filters through entire employee list
    // if item id matches, it removes
    setData(data.filter((item) => item.id !== id));
  };

  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "firstName", headerName: "First Name", width: 130 },
    { field: "lastName", headerName: "Last Name", width: 130 },
    { field: "code", headerName: "Code", width: 70 },
    { field: "profession", headerName: "Profession", width: 130 },
    { field: "city", headerName: "City", width: 130 },
    { field: "branch", headerName: "Branch", width: 130 },
    { field: "email", headerName: "Email", width: 200 },
    {
      field: "profile",
      headerName: "Profile",
      width: 70,
      renderCell: (params) => {
        return (
          <div className="employeeListProfile">
            <img className="employeeListImg" src={params.row.profile} alt="" />
          </div>
        );
      },
    },
    { field: "assigned", headerName: "Assigned", width: 100 },
    {
      field: "action",
      headerName: "Action",
      width: 200,
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
      <DataGrid
        rows={data}
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
