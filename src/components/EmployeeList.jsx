import EmployeeCard from "./EmployeeCard";
import "./EmployeeList.css";

export default function EmployeeList({ employees }) {
  return (
    <div>
      <h2>Liste des employés</h2>
      {employees.length === 0 ? (
        <p>Aucun employé</p>
      ) : (
        employees.map((emp) => (
          <EmployeeCard key={emp.id} employee={emp} />
        ))
      )}
    </div>
  );
}