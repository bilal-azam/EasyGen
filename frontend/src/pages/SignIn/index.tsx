import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signIn } from '../../api/api';
import { useAuth } from '../../context/AuthContext';
import {
  Container,
  Title,
  Form,
  Label,
  Input,
  Button,
  Img
} from './SignIn.style';

const SignIn: React.FC = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [form, setForm] = useState({ email: '', password: '' });
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const { data } = await signIn(form);
      login(data.access_token);
      navigate('/profile');
    } catch (err: any) {
      setError(err.response?.data?.message || 'Login failed');
    }
  };

  return (
    <>  
      <Img src='/logo.png' alt='Easygenerator' />
      <Container>
        <Title>Sign in</Title>
        {error && <p>{error}</p>}
        <Form onSubmit={handleSubmit}>
          <div>
            <Label htmlFor="email">Email</Label>
            <Input name="email" type="email" onChange={handleChange} placeholder="me@example.com" required />
          </div>
          <div>
            <Label htmlFor="password">Password</Label>
            <Input name="password" type="password" onChange={handleChange} placeholder="password" required />
          </div>
          <Button type="submit">Sign in</Button>
        </Form>
      </Container>
    </>
  );
};

export default SignIn;
