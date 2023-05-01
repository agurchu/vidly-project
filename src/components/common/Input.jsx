import React from "react";

export default function Input({ name, label, value, onChange, type }) {
  return (
    <div className="form-group mb-3">
      <label className="mb-2" htmlFor={name}>
        {label}
      </label>
      <input
        value={value}
        onChange={onChange}
        autoFocus
        name={name}
        id={name}
        type={type}
        className="form-control"
      />
    </div>
  );
}
