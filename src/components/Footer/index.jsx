import React from 'react';
import { FooterBase } from './styles';
import Logo from '../../assets/img/Logo.png';

function Footer() {
  return (
    <FooterBase>
      <a href="https://www.alura.com.br/">
        <img className="Logo" src={Logo} alt="Logo Header" />
      </a>
      <p>
        Orgulhosamente criado por
        {' '}
        <a href="https://www.caioragazzi.com">
          RagazziTech
        </a>
      </p>
    </FooterBase>
  );
}

export default Footer;
