import './App.css'
import Employee from './components/employee'
import { useState } from "react";

function App() {
  const [role, setRole] = useState("dev");

  return (
    <>
      <div>
        <input type="text" onChange={(e) => {
          console.log(e.target.value);
          setRole(e.target.value);
        }} />
        <Employee name="Jude" role="staff" />
        <Employee name="Kate" role={role}/>
        <Employee name="dave"/>
      </div>
    </>
  )
}

export default App
