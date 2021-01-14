import styled, { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
  }

  body {
    font-family: 'Poppins', sans-serif;
    background: #FAF8F3;
    font-size: 16px;
  }
`;

export const Container = styled.section`
  margin: 0 auto;
  max-width: 95%;
  padding: 2rem 0;
  width: 500px;
`;

export const Header = styled.header`
  height: 50px;
  display: grid;
  grid-gap: 5px;
  grid-template-columns: 1fr 50px;
`;

export const Main = styled.main`
  padding: 1rem 0;
`;

export const Items = styled.ul`
  list-style: none;
  padding: 0;
`;

export const Item = styled.li`
  /* box-shadow: 0px 35px 60px rgba(0, 0, 0, 0.1); */
  text-transform: capitalize;
  border-radius: 40px;
  align-items: center;
  background: #fff;
  cursor: pointer;
  padding: 0 20px;
  display: flex;
  height: 50px;

  :hover {
    transition: 0.3s ease-in-out;
    transform: scale(1.02);
  }

  :not(:last-child) {
    margin-bottom: 0.5rem;
  }
`;

export const Input = styled.input`
  padding: 0 20px;
  background: #fff;
  border-radius: 40px;
  border: none;
`;

export const Button = styled.button`
  border: 1px solid #000;
  place-items: center;
  border-radius: 50%;
  background: #000;
  cursor: pointer;
  display: grid;
`;

export const Message = styled.p`
  text-align: center;
  padding: 2rem 5px;
`;
