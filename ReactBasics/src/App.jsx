import "./App.css";
import Employee from "./components/employee";
// import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function App() {
  // const [role, setRole] = useState("dev");

  const employees = [
    {
      name: "Jude",
      role: "intern",
      img: "https://i.pinimg.com/564x/6c/58/23/6c58233d5cdee30c3569ed2a03f54e79.jpg",
    },
    {
      name: "Kate",
      role: "Staff",
      img: "https://i.pinimg.com/236x/0c/91/cd/0c91cdd19ed613323c2fe6e37c3d194e.jpg",
    },
    {
      name: "Dave",
      role: "Manager",
      img: "https://i.pinimg.com/236x/5f/c2/b8/5fc2b8701042241aaa5909e9ee73af3e.jpg",
    },
    {
      name: "Sang",
      role: "Admin",
      img: "https://images.pexels.com/photos/3418814/pexels-photo-3418814.jpeg?",
    },
  ];

  return (
    <>
      <div>
        <div className="flex flex-wrap justify-center">
          {employees.map((employee) => {
            return (
              <Employee
                key={uuidv4()}
                name={employee.name}
                role={employee.role}
                img={employee.img}
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
