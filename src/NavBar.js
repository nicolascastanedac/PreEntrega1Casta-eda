import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'; // Importa los estilos de Bootstrap
import CartWidget from './CartWidget';

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container">
        <a className="navbar-brand" href="#">PALMAR</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link" href="#">Botes</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Apartamentos</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Experiencias</a>
            </li>
          </ul>
          <CartWidget />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;