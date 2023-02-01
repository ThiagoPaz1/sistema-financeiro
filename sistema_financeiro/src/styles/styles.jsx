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
  width: 27rem;
  height: 27rem;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding-bottom: 2rem;
  gap: 10px;
`;

export const Input = styled.input`
  width: 22rem;
  flex: 1;
  height: 2.5rem;
  border: 1px solid var(--gray-300);
  border-radius: 8px;
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
  margin-top: 1rem;
  transition: all 0.3s;
  &:hover {
    background-color: var(--green-400);
  }
`;

export const Title = styled.h1`
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
  border: 1px solid var(--gray-300);
  margin: 2rem 0;
`;
