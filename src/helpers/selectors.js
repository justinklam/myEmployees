import axios from "axios";

// Retrieve Employee Data
export async function getEmployees() {
  const response = await axios
    .get("//localhost:8080/api/employees")
    .then((res) => {
      let employeeData = res.data;
      console.log("employeeData", employeeData);
      return employeeData;
    });
}

// export const getEmployees = () => {
//   axios.get("//localhost:8080/api/employees").then((response) => {
//     let employeeData = response.data;
//     console.log(employeeData);
//   });
// };

// Employee Dummy Data
export const employeeRows = [
  {
    id: 1,
    lastName: "Lowry",
    firstName: "Kyle",
    profile:
      "https://images.pexels.com/photos/5468093/pexels-photo-5468093.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    email: "user1@mail.com",
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
    profile:
      "https://images.pexels.com/photos/1752757/pexels-photo-1752757.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    email: "user1@mail.com",
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
    profile:
      "https://images.pexels.com/photos/1752757/pexels-photo-1752757.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    email: "user1@mail.com",
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
    profile:
      "https://images.pexels.com/photos/1752757/pexels-photo-1752757.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    email: "user1@mail.com",
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
    profile:
      "https://images.pexels.com/photos/1752757/pexels-photo-1752757.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    email: "user1@mail.com",
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
    profile:
      "https://images.pexels.com/photos/1752757/pexels-photo-1752757.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    email: "user1@mail.com",
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
    profile:
      "https://images.pexels.com/photos/1752757/pexels-photo-1752757.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    email: "user1@mail.com",
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
    profile:
      "https://images.pexels.com/photos/1752757/pexels-photo-1752757.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    email: "user1@mail.com",
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
    profile:
      "https://images.pexels.com/photos/1752757/pexels-photo-1752757.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    email: "user1@mail.com",
    code: "F109",
    profession: "Drywall Installer",
    city: "Toronto",
    branch: "Abacus",
    assigned: "True",
  },
];
