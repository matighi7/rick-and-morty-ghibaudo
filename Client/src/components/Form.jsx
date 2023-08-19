import { styled } from "styled-components";
import styles from "./Card.module.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Form = ({login}) => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    const property = event.target.name;
    const value = event.target.value;
    setForm({ ...form, [property]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    login(form);

  };

  const ErrorSpan = styled.span`
    color: red;
  `;

  const SuccessInput = styled.input`
    border: 1px solid green;
  `;

  const ErrorInput = styled.input`
    border: 1px solid red;
  `;

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Email:</label>
        <input
          type="text"
          name="email"
          value={form.email}
          onChange={handleChange}
          className={errors.email ? styles.error : styles.success}
          as={errors.email ? ErrorInput : SuccessInput}
        />
        {errors.email && <ErrorSpan>{errors.email}</ErrorSpan>}
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          name="password"
          value={form.password}
          onChange={handleChange}
          className={errors.password ? styles.error : styles.success}
          as={errors.password ? ErrorInput : SuccessInput}
        />
        {errors.password && <ErrorSpan>{errors.password}</ErrorSpan>}
      </div>
      <button type="submit">Login</button>
    </form>
  );
};

export default Form;