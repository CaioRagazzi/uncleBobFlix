import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from '../../assets/img/Logo.png';
import Button from '../Button';
import './Menu.css';

function Menu() {
  const location = useLocation();
  return (
    <nav className="Menu">
      <Link to="/">
        <img className="Logo" src={Logo} alt="Logo Header" />
      </Link>
      {
          location.pathname.includes('cadastro/video')
            ? (
              <Button as={Link} className="ButtonLink" to="/cadastro/categoria">
                Nova Categoria
              </Button>
            )
            : (
              <Button as={Link} className="ButtonLink" to="/cadastro/video">
                Novo Video
              </Button>
            )
      }
    </nav>
  );
}

export default Menu;
