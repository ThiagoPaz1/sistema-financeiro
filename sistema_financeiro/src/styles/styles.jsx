import styled from "styled-components";

export const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f8f8f8;
`;

export const Form = styled.form`
  background-color: var(--white);
  width: 29rem;
  height: 30rem;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding-bottom: 3rem;
  padding-top: 2rem;
  gap: 10px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
`;

export const Input = styled.input`
  width: 22rem;
  flex: 1;
  height: 2.5rem;
  border: 1px solid var(--gray-300);
  border-radius: 8px;
  padding-left: 1rem;
  &:focus {
    outline: transparent;
    box-shadow: 0 0 0 2px var(--green-100);
    transition: box-shadow 0.3s;
  }
`;

export const Button = styled.button`
  width: 22.5rem;
  height: 3rem;
  background-color: var(--green-100);
  border: none;
  border-radius: 8px;
  color: var(--white);
  margin-top: 2rem;
  transition: all 0.3s;
  &:hover {
    background-color: var(--green-400);
  }
`;

export const Title = styled.h1`
  margin-bottom: 3rem;
  font-size: 1.5rem;
`;

export const Label = styled.label`
  display: flex;
  margin-bottom: 0.5rem;
  font-weight: bold;
`;

export const Line = styled.span`
  display: block;
  width: 22.3rem;
  border: 0.1rem solid var(--gray-300);
  margin: 2rem 0;
`;

export const A = styled.a`
  text-decoration: none;
  color: var(--gray-400);
  font-size: 0.875rem;
  display: block;
  margin-top: 0.5rem;
  padding: 0.1rem;
  &:hover {
    color: var(--green-100);
  }
`;
