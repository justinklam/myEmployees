import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./employeeList.css";

// MUI
import { DataGrid } from "@mui/x-data-grid";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

// Dummy Data
// import { getEmployees, employeeRows } from "../../helpers/selectors";

const EmployeeList = () => {
  const [emps, setEmps] = useState([]);

  useEffect(() => {
    axios
      .get("//localhost:8080/api/employees")
      .then((res) => {
        console.log("api-data", res.data);
        setEmps(res.data);
      })
      .catch((err) => {
        console.log("Error", err);
      });
  }, []);

  // useEffect(() => {
  //   getEmployees()
  //     .then((res) => {
  //       console.log("res", res[0]);
  //       if (res.ok) {
  //         return res.json();
  //       }
  //     })
  //     .then((jsonRes) => setEmps(jsonRes));
  // }, []);

  const handleDelete = (id) => {
    // filters through entire employee list
    // if item id matches, it removes
    setEmps(emps.filter((item) => item.id !== id));
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
      <DataGrid
        rows={emps}
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
