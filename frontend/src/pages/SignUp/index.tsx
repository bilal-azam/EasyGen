import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signUp } from '../../api/api';
import {
  Container,
  Title,
  Form,
  Label,
  Input,
  Button,
  Img
} from './SignUp.style';

const SignUp: React.FC = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: '', name: '', password: '' });
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await signUp(form);
      navigate('/signin');
    } catch (err: any) {
      setError(err.response?.data?.message || 'Signup failed');
    }
  };

  return (
    <>
      <Img src='/logo.png' alt='Easygenerator' />
      <Container>
        <Title>Sign Up</Title>
        {error && <p>{error}</p>}
        <Form onSubmit={handleSubmit}>
          <div>
            <Label htmlFor="name">Name</Label>
            <Input name="name" type="text" onChange={handleChange} placeholder="Eren Buruk" required />
          </div>
          <div>
            <Label htmlFor="email">Email</Label>
            <Input name="email" type="email" onChange={handleChange} placeholder="me@example.com" required />
          </div>
          <div>
            <Label htmlFor="password">Password</Label>
            <Input name="password" type="password" onChange={handleChange} placeholder="password" required />
          </div>
          <Button type="submit">Sign Up</Button>
        </Form>
      </Container>
    </>
  );
};

export default SignUp;
