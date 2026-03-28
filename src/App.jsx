import { useState } from "react";
import EmployeeList from "./components/EmployeeList";
import EmployeeForm from "./components/EmployeeForm";

function App() {
  const [employees, setEmployees] = useState([
    {
      id: 1,
      name: "Jean Dupont",
      position: "Manager",
      department: "RH",
      status: "Actif",
    },
    {
      id: 2,
      name: "Marie Claire",
      position: "Développeur",
      department: "IT",
      status: "Actif",
    },
  ]);

  const addEmployee = (newEmployee) => {
    const employeeWithId = {
      ...newEmployee,
      id: Date.now(),
      status: "Actif",
    };

    setEmployees([...employees, employeeWithId]);
  };

  return (
    <div>
      <h1>Gestion des Employés</h1>

      { <EmployeeForm addEmployee={addEmployee} />}
      <EmployeeList employees={employees} />
    </div>
  );
}

export default App;