import styled from 'styled-components';

export const Container = styled.div`
  width: 400px;
  margin: auto;
  padding: 36px 48px 48px 48px;
  background-color: #e5e0df;
  border-radius: 11px;
  box-shadow: 0 2.4rem 4.8rem rgba(0, 0, 0, 0.15);
`;

export const Title = styled.h2`
  padding: 15px;
  font-size: 22px;
  font-weight: 600;
  text-align: center;
`;

export const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr;
  row-gap: 16px;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 8px;
`;

export const Input = styled.input`
  width: 90%;
  padding: 1.2rem;
  border-radius: 9px;
  border: none;
  &:focus {
    outline: none;
    box-shadow: 0 0 0 4px rgba(253, 242, 233, 0.5);
  }
`;

export const Button = styled.button`
  background-color: #f48982;
  color: #fdf2e9;
  padding: 8px;
  border-radius: 9px;
  border: none;
  font-size: 20px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;
  &:hover {
    background-color: #fdf2e9;
    color: #f48982;
  }
`;

export const Img = styled.img`
  width: 300px;
  margin: 25px auto;
  display: block;
`;