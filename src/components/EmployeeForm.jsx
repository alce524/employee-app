import { useState } from "react";
import "./EmployeeForm.css";

export default function EmployeeForm({ addEmployee }) {
  const [formData, setFormData] = useState({
    name: "",
    position: "",
    department: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.position || !formData.department) {
      alert("Veuillez remplir tous les champs");
      return;
    }

    addEmployee(formData);

    // Reset form
    setFormData({
      name: "",
      position: "",
      department: "",
    });
  };

  return (
    <form className="employee-form" onSubmit={handleSubmit}>
      <h2>Ajouter un employé</h2>

      <input
        type="text"
        name="name"
        placeholder="Nom"
        value={formData.name}
        onChange={handleChange}
      />

      <input
        type="text"
        name="position"
        placeholder="Poste"
        value={formData.position}
        onChange={handleChange}
      />

      <input
        type="text"
        name="department"
        placeholder="Département"
        value={formData.department}
        onChange={handleChange}
      />

      <button type="submit">Ajouter</button>
    </form>
  );
}