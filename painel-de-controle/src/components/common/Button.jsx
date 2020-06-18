import React from 'react'; 
import './Button.css';

const direcionaPage = () => window.open('http://www.google.com.br')

const Button = () => (
    <button onClick={direcionaPage}>
        Abrir página
    </button>
)

export default Button;