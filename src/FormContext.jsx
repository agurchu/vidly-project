import React, { createContext, useState } from "react";
import Joi from "joi-browser";

const FormContext = createContext();

export default function FormProvider({ children, schema, onSubmit }) {
  const [data, setData] = useState({});
  const [errors, setErrors] = useState({});

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
    onSubmit();
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
    <FormContext.Provider
      value={{ data, errors, handleChange, handleSubmit, validate }}
    >
      {children}
    </FormContext.Provider>
  );
}

export { FormContext };
