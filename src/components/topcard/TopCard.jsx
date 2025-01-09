import React from "react";

const TopCard = ({ icon: Icon, count, label, color }) => {
  return (
    <div style={{ 
      display: "flex", 
      alignItems: "center", 
      padding: "20px", 
      backgroundColor: "#fff", 
      borderRadius: "8px", 
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", 
      margin: "10px", 
      flex: "1"
    }}>
      <div style={{ fontSize: "2rem", marginRight: "15px", color: color }}>
        <Icon />
      </div>
      <div>
        <h3 style={{ margin: "0", fontSize: "1.5rem" }}>{count}</h3>
        <p style={{ margin: "0", color: "#666" }}>{label}</p>
      </div>
    </div>
  );
};

export default TopCard;
