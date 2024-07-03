import { useState } from "react";
import "./App.css";
import Employee from "./components/employee";

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

  return (
    <>
      <div>
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
      </div>

      {/* <div className="m-2 py-8 px-8 max-w-sm bg-white rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
        <img
          className="object-cover rounded-full h-[100px] w-[100px] block mx-auto h-24 rounded-full sm:mx-0 sm:shrink-0"
          src=""
          alt="Woman's Face"
        />
        <div className="text-center space-y-2 sm:text-left">
          <div className="space-y-0.5">
            <p className="text-lg text-black font-semibold">Example</p>
            <p className="text-slate-500 font-medium">ROle</p>
          </div>
          <button className="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">
            Update
          </button>
        </div>
      </div> */}
    </>
  );
}

export default App;
