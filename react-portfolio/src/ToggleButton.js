import React, { useState } from "react";

function ToggleButton() {
  const [isReady, setIsReady] = useState(false);

  const handleToggle = () => {
    setIsReady(!isReady);
  };

  const styles = {
    container: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      background: isReady
        ? "linear-gradient(135deg, #00c9ff 0%, #92fe9d 100%)"
        : "linear-gradient(135deg, #ff9a9e 0%, #fad0c4 100%)",
      transition: "background 0.6s ease",
      fontFamily: "Segoe UI, sans-serif",
    },
    heading: {
      color: "#333",
      fontSize: "2rem",
      marginBottom: "1rem",
      textShadow: "1px 1px 3px rgba(0,0,0,0.2)",
    },
    button: {
      background: isReady ? "#4CAF50" : "#F44336",
      color: "white",
      border: "none",
      padding: "12px 30px",
      fontSize: "1.2rem",
      borderRadius: "30px",
      cursor: "pointer",
      transition: "all 0.3s ease",
      boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
    },
    status: {
      marginTop: "20px",
      fontSize: "1.3rem",
      color: isReady ? "#2e7d32" : "#b71c1c",
    },
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Toggle Button</h2>
      <button onClick={handleToggle} style={styles.button}>
        {isReady ? "YES" : "NO"}
      </button>
      <p style={styles.status}>
        The button is <strong>{isReady ? "READY" : "NOT READY"}</strong>.
      </p>
    </div>
  );
}

export default ToggleButton;
