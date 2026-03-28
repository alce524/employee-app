import { useState } from "react";
import EmployeeForm from "./components/EmployeeForm";

function App() {
  const [employees, setEmployees] = useState([]);

  const addEmployee = (employee) => {
    setEmployees((prev) => [...prev, employee]);
  };

  return (
    <div>
      <EmployeeForm addEmployee={addEmployee} />
    </div>
  );
}

export default App;