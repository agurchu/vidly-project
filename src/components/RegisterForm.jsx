import React, { useState } from "react";
import Input from "./common/Input";
import Joi from "joi-browser";
import { Link } from "react-router-dom";

export default function RegisterForm() {
  const [data, setData] = useState({ username: "", password: "", name: "" });
  const [errors, setErrors] = useState({});

  const schema = {
    username: Joi.string().required().email().label("Username"),
    password: Joi.string().required().min(5).label("Password"),
    name: Joi.string().required().label("Name"),
  };

  const doSubmit = () => {
    // call server
    console.log("submitted");
  };

  const validate = () => {
    const errors = {};
    const options = { abortEarly: false };
    const { error } = Joi.validate(data, schema, options);
    if (!error) return null;

    for (let item of error.details) errors[item.path[0]] = item.message;
    return errors;
  };

  const validateProperty = ({ name, value }) => {
    const obj = { [name]: value };
    const subSchema = { [name]: schema[name] };
    const { error } = Joi.validate(obj, subSchema);
    return error ? error.details[0].message : null;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validate();
    setErrors(errors || {});

    if (errors) return;
    doSubmit();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    const errorMsg = validateProperty(e.target);
    const updatedErrors = { ...errors };
    if (errorMsg) {
      updatedErrors[name] = errorMsg;
    } else {
      delete updatedErrors[name];
    }
    setErrors(updatedErrors);
    setData((prevState) => ({ ...prevState, [name]: value }));
  };

  return (
    <div>
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <Input
          name="username"
          label=" Username"
          onChange={handleChange}
          value={data.username}
          type="text"
          error={errors.username}
        />
        <Input
          name="password"
          label="Password"
          onChange={handleChange}
          type="password"
          value={data.password}
          error={errors.password}
        />
        <Input
          name="name"
          label="Name"
          onChange={handleChange}
          type="name"
          value={data.name}
          error={errors.name}
        />

        <button disabled={validate()} className="btn btn-primary">
          Register
        </button>
      </form>
      <p>
        Already registered? <Link to="/login">Login Now!</Link>
      </p>
    </div>
  );
}
