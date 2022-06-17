import React from "react";
import "./employeeList.css";

// MUI
import { DataGrid } from "@mui/x-data-grid";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

// Dummy Data
import { employeeRows } from "../../../helpers/selectors";

const EmployeeList = () => {
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
            <button className="employeeListBtn">
              <EditIcon />
              Edit
            </button>
            <button className="employeeListBtn">
              <DeleteIcon />
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
        rows={employeeRows}
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
