import { useState } from "react";
import "./App.css";
import Employee from "./components/employee";
import AddEmployee from "./components/addEmployee";
// import Header from "./components/header";

function App() {
  const [employees, setEmployees] = useState([
    {
      id: 1,
      name: "Jude",
      role: "intern",
      img: "https://i.pinimg.com/564x/6c/58/23/6c58233d5cdee30c3569ed2a03f54e79.jpg",
    },
    {
      id: 2,
      name: "Kate",
      role: "Staff",
      img: "https://i.pinimg.com/236x/0c/91/cd/0c91cdd19ed613323c2fe6e37c3d194e.jpg",
    },
    {
      id: 3,
      name: "Dave",
      role: "Manager",
      img: "https://i.pinimg.com/236x/5f/c2/b8/5fc2b8701042241aaa5909e9ee73af3e.jpg",
    },
    {
      id: 4,
      name: "Sang",
      role: "Admin",
      img: "https://images.pexels.com/photos/3418814/pexels-photo-3418814.jpeg?",
    },
  ]);

  function updateEmployee(id, newName, newRole) {
    console.log("In App: Updating Employee!");

    const updatedEmployees = employees.map((emp) => {
      if (id == emp.id) {
        return { ...emp, name: newName, role: newRole };
      }
      return emp;
    });
    setEmployees(updatedEmployees);
  }

  function addEmployee(name, role, img) {
    const newEmployee = {
      id: employees.length + 1,
      name: name,
      role: role,
      img: img,
    };
    setEmployees([...employees, newEmployee]);
  }

  return (
    <>
      <div className="App">
        {/* <Header /> */}
        <div className="flex flex-wrap justify-center">
          {employees.map((employee) => {
            return (
              <Employee
                key={employee.id}
                id={employee.id}
                name={employee.name}
                role={employee.role}
                img={employee.img}
                updateEmployee={updateEmployee}
              />
            );
          })}
        </div>
        {/* add Btn */}
        <div className="block align-content: center;">
          <AddEmployee
            name="James Bond"
            role="Actor"
            img="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=600"
            addEmployee={addEmployee}
          />
        </div>
      </div>
    </>
  );
}

export default App;
