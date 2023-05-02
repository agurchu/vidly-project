import React from "react";

export default function Input({ name, label, error, ...rest }) {
  return (
    <div className="form-group mb-3">
      <label className="mb-2" htmlFor={name}>
        {label}
      </label>
      <input
        {...rest}
        autoFocus
        name={name}
        id={name}
        className="form-control"
      />

      {error && <div className="alert alert-danger mt-2">{error}</div>}
    </div>
  );
}
