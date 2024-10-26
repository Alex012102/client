// src/components/MyForm.js
import React from 'react';
import useForm from '../hooks/useForm';

const validate = (values) => {
  const errors = {};
  if (!values.email) {
    errors.email = 'Email is required';
  }
  return errors;
};

const MyForm = () => {
  const { values, errors, handleChange, handleSubmit } = useForm(
    { email: '' },
    validate
  );

  const submitForm = (formData) => {
    console.log('Form submitted:', formData);
  };

  return (
    <form onSubmit={(event) => handleSubmit(event, submitForm)}>
      <input
        type="email"
        name="email"
        value={values.email}
        onChange={handleChange}
        placeholder="Email"
      />
      {errors.email && <span>{errors.email}</span>}
      <button type="submit">Submit</button>
    </form>
  );
};

export default MyForm;
