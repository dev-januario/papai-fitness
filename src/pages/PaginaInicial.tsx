import React from "react";
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';
import { darkTheme } from '../theme';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${(props) => props.theme.background};
    color: ${(props) => props.theme.text};
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
  }

  h1 {
    color: ${(props) => props.theme.text};
  }
`;

const Button = styled.button`
    background-color: ${(props) => props.theme.primary};
    color: ${(props) => props.theme.text};
    border: none;
    padding: 10px 20px;
    cursor: pointer;
    &:hover {
      background-color: ${(props) => props.theme.secondary};
    }
`;

const PaginaInicial: React.FC = () => {
    return (
        <ThemeProvider theme={darkTheme}>
            <GlobalStyle />
            <h1>Olá, Alysson!</h1>
        </ThemeProvider>
    );
};

export default PaginaInicial;