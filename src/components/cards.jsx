// src/components/Card.jsx
import React from "react";
import "./cards.css";

export default function Card({ title, onClick }) {
  return (
    <button type="button" className="card shadow-sm text-center p-4" onClick={onClick}>
      <h4 className="text-primary mb-0">{title}</h4>
    </button>
  );
}
