import { useState } from "react";
import EmployeeForm from "./components/EmployeeForm";

function App() {
  return (
    <div>
      <EmployeeForm addEmployee={addEmployee} />
    </div>
  );
}

export default App;