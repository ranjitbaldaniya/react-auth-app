import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Form, FormGroup, Label, Input, Button } from "reactstrap";

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    // Add your login logic here
    console.log(formData);
    navigate("/dashboard");
  };

  return (
    <Container>
      <h1 className="text-center">Login</h1>
      <Form onSubmit={onSubmit}>
        <FormGroup>
          <Label for="email">Email</Label>
          <Input
            type="email"
            name="email"
            value={email}
            onChange={onChange}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label for="password">Password</Label>
          <Input
            type="password"
            name="password"
            value={password}
            onChange={onChange}
            required
          />
        </FormGroup>
        <Button type="submit" color="primary">
          Login
        </Button>
      </Form>
    </Container>
  );
};

export default Login;
