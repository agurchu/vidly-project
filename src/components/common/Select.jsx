import React from "react";

export default function Select({ name, label, options, error, ...rest }) {
  return (
    <div className="form-group mb-3">
      <label className="mb-2" htmlFor={name}>
        {label}
      </label>
      <select name={name} id={name} {...rest} className="form-control">
        <option value="" />
        {options.map((option) => (
          <option key={option._id} value={option._id}>
            {option.name}
          </option>
        ))}
      </select>
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
}
