import React from 'react';
import './Footer.scss';

export default function Footer({ sendData, sended }) {

  return (
    <footer className="footer">
      <label>{ sended && 'Formulário enviado com sucesso!' }</label>
      <button onClick={ sendData } className={ sended ? 'disabled' : '' }>Enviar</button>
    </footer>
  );
}
