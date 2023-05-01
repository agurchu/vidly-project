import React, { useState } from "react";
import Input from "./common/Input";
import Joi from "joi-browser";

export default function LoginForm() {
  const [account, setAccount] = useState({ username: "", password: "" });
  const [errors, setErrors] = useState({});

  const schema = {
    username: Joi.string().required().label("Username"),
    password: Joi.string().required().label("Password"),
  };

  const validate = () => {
    const errors = {};
    const options = { abortEarly: false };
    const { error } = Joi.validate(account, schema, options);
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
    console.log("submitted");
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
    setAccount((prevState) => ({ ...prevState, [name]: value }));
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <Input
          name="username"
          label=" Username"
          onChange={handleChange}
          value={account.username}
          type="text"
          error={errors.username}
        />
        <Input
          name="password"
          label="Password"
          onChange={handleChange}
          type="password"
          value={account.password}
          error={errors.password}
        />

        <button className="btn btn-primary">Login</button>
      </form>
    </div>
  );
}
