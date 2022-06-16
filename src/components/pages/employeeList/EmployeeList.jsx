import React from "react";
import "./employeeList.css";

import { DataGrid } from "@mui/x-data-grid";

const EmployeeList = () => {
  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "firstName", headerName: "First Name", width: 130 },
    { field: "lastName", headerName: "Last Name", width: 130 },
    { field: "code", headerName: "Code", width: 70 },
    { field: "profession", headerName: "Profession", width: 130 },
    { field: "city", headerName: "City", width: 130 },
    { field: "branch", headerName: "Branch", width: 130 },
    { field: "assigned", headerName: "Assigned", width: 70 },
    // {
    //   field: "age",
    //   headerName: "Age",
    //   type: "number",
    //   width: 90,
    // },
    {
      field: "fullName",
      headerName: "Full Name",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 160,
      valueGetter: (params) =>
        `${params.row.firstName || ""} ${params.row.lastName || ""}`,
    },
  ];

  const rows = [
    {
      id: 1,
      lastName: "Lowry",
      firstName: "Kyle",
      code: "F100",
      profession: "Drywall Installer",
      city: "Toronto",
      branch: "Abacus",
      assigned: "True",
    },
    {
      id: 2,
      lastName: "DeRozan",
      firstName: "DeMar",
      code: "F102",
      profession: "Drywall Installer",
      city: "Brampton",
      branch: "Pillsworth",
      assigned: "True",
    },
    {
      id: 3,
      lastName: "Van Vleet",
      firstName: "Fred",
      code: "F103",
      profession: "Drywall Installer",
      city: "Bolton",
      branch: "Abacus",
      assigned: "True",
    },
    {
      id: 4,
      lastName: "Valanciunas",
      firstName: "Jonas",
      code: "F104",
      profession: "Drywall Installer",
      city: "Bolton",
      branch: "Abacus",
      assigned: "True",
    },
    {
      id: 5,
      lastName: "Bosh",
      firstName: "Chris",
      code: "F105",
      profession: "Drywall Installer",
      city: "Brampton",
      branch: "Abacus",
      assigned: "True",
    },
    {
      id: 6,
      lastName: "Camby",
      firstName: "Marcus",
      code: "F106",
      profession: "Drywall Installer",
      city: "Brampton",
      branch: "Abacus",
      assigned: "True",
    },
    {
      id: 7,
      lastName: "Carter",
      firstName: "Vince",
      code: "F107",
      profession: "Drywall Installer",
      city: "Toronto",
      branch: "Abacus",
      assigned: "True",
    },
    {
      id: 8,
      lastName: "Frances",
      firstName: "Rossini",
      code: "F108",
      profession: "Drywall Installer",
      city: "Toronto",
      branch: "Abacus",
      assigned: "True",
    },
    {
      id: 9,
      lastName: "Roxie",
      firstName: "Harvey",
      code: "F109",
      profession: "Drywall Installer",
      city: "Toronto",
      branch: "Abacus",
      assigned: "True",
    },
  ];

  return (
    <div className="employeeList">
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
};

export default EmployeeList;
