import React, { useState } from "react";
import Input from "./common/Input";
import Joi from "joi-browser";
import { Link } from "react-router-dom";
import FormProvider, { FormContext } from "../FormContext";

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

  return (
    <FormProvider schema={schema} onSubmit={doSubmit}>
      <div>
        <h1>Register</h1>
        <FormContext>
          {({ data, errors, handleChange, handleSubmit, validate }) => (
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
          )}
        </FormContext>
        <p>
          Already registered? <Link to="/login">Login Now!</Link>
        </p>
      </div>
    </FormProvider>
  );
}
