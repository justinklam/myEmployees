import axios from "axios";

// Retrieve Employee Data
export const getEmployees = () => {
  axios.get("//localhost:8080/api/employees").then((response) => {
    let employeeData = response.data;
    console.log(employeeData);
  });
};

// Employee Dummy Data
export const employeeRows = [
  {
    id: 1,
    lastName: "Lowry",
    firstName: "Kyle",
    code: "F100",
    profession: "Drywall Installer",
    city: "Toronto",
    branch: "Abacus",
    email: "user1@mail.com",
    profile:
      "https://images.pexels.com/photos/1752757/pexels-photo-1752757.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
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
    email: "user1@mail.com",
    profile:
      "https://images.pexels.com/photos/1752757/pexels-photo-1752757.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
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
    email: "user1@mail.com",
    profile:
      "https://images.pexels.com/photos/1752757/pexels-photo-1752757.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
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
    email: "user1@mail.com",
    profile:
      "https://images.pexels.com/photos/1752757/pexels-photo-1752757.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
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
    email: "user1@mail.com",
    profile:
      "https://images.pexels.com/photos/1752757/pexels-photo-1752757.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
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
    email: "user1@mail.com",
    profile:
      "https://images.pexels.com/photos/1752757/pexels-photo-1752757.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
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
    email: "user1@mail.com",
    profile:
      "https://images.pexels.com/photos/1752757/pexels-photo-1752757.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
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
    email: "user1@mail.com",
    profile:
      "https://images.pexels.com/photos/1752757/pexels-photo-1752757.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
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
    email: "user1@mail.com",
    profile:
      "https://images.pexels.com/photos/1752757/pexels-photo-1752757.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    assigned: "True",
  },
];

// export default getEmployees;
