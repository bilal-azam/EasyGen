import styled from 'styled-components';

export const Container = styled.div`
  width: 400px;
  margin: auto;
  padding: 36px 48px 48px 48px;
  background-color: #e5e0df;
  border-radius: 11px;
  box-shadow: 0 2.4rem 4.8rem rgba(0, 0, 0, 0.15);
`;

export const Img = styled.img`
  width: 300px;
  margin: 25px auto;
  display: block;
`;

export const H1 = styled.h1`
  text-align: center;
`;

export const P = styled.p`
  text-align: center;
`;

export const Button = styled.button`
  display: block;
  margin: auto;
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