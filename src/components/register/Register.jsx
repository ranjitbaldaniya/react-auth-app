import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Form, FormGroup, Label, Input, Button } from "reactstrap";

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "employee",
    location: "",
  });

  const { name, email, password, role, location } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    // Add your registration logic here
    console.log(formData);
    navigate("/login");
  };

  return (
    <Container>
      <h1 className="text-center">Register</h1>
      <Form onSubmit={onSubmit}>
        <FormGroup>
          <Label for="name">Name</Label>
          <Input
            type="text"
            name="name"
            value={name}
            onChange={onChange}
            required
          />
        </FormGroup>
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
        <FormGroup>
          <Label for="role">Role</Label>
          <Input
            type="select"
            name="role"
            value={role}
            onChange={onChange}
            required
          >
            <option value="employee">Employee</option>
            <option value="manager">Manager</option>
          </Input>
        </FormGroup>
        <FormGroup>
          <Label for="location">Location</Label>
          <Input
            type="text"
            name="location"
            value={location}
            onChange={onChange}
            required
          />
        </FormGroup>
        <Button type="submit" color="primary">
          Register
        </Button>
      </Form>
    </Container>
  );
};

export default Register;
