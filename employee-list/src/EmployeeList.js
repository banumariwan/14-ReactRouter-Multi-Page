import React, { useState, useEffect } from "react";

function EmployeeList() {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://dummyjson.com/users")
      .then((res) => {
        if (!res.ok) throw new Error("Network response was not ok");
        return res.json();
      })
      .then((data) => {
        setEmployees(data.users);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p style={styles.loading}>Loading employees...</p>;
  if (error) return <p style={styles.error}>Error: {error}</p>;

  return (
    <div style={styles.container}>
      <h2>👔 Employee Directory</h2>
      <div style={styles.grid}>
        {employees.map((emp) => (
          <div key={emp.id} style={styles.card}>
            <img src={emp.image} alt={emp.firstName} style={styles.avatar} />
            <h3>
              {emp.firstName} {emp.lastName}
            </h3>
            <p>📧 {emp.email}</p>
            <p>💼 {emp.company?.title || "No Title"}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  container: {
    textAlign: "center",
    fontFamily: "Arial, sans-serif",
    marginTop: "40px",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "20px",
    padding: "20px",
  },
  card: {
    backgroundColor: "#f4f4f4",
    borderRadius: "10px",
    padding: "20px",
    boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
    textAlign: "center",
  },
  avatar: {
    width: "80px",
    height: "80px",
    borderRadius: "50%",
    objectFit: "cover",
    marginBottom: "10px",
  },
  loading: {
    textAlign: "center",
    marginTop: "60px",
    fontSize: "18px",
  },
  error: {
    color: "red",
    textAlign: "center",
    marginTop: "60px",
  },
};

export default EmployeeList;
