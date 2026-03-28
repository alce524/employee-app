
import "./EmployeeCard.css";
export default function EmployeeCard({ employee }) {
  return (
    <div className="card">
      <h3>{employee.name}</h3>
      <p><strong>Poste:</strong> {employee.position}</p>
      <p><strong>Département:</strong> {employee.department}</p>
      <p>
        <strong>Statut:</strong>{" "}
        <span style={{ color: employee.status === "Actif" ? "green" : "red" }}>
          {employee.status}
        </span>
      </p>
    </div>
  );
}