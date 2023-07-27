import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'; // Importa los estilos de Bootstrap
import CartWidget from './CartWidget';
import { Link } from 'react-router-dom'; // Importa Link desde react-router-dom

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container">
        {/* En lugar de <a>, utilizamos <Link> */}
        <Link className="navbar-brand" to="/">PALMAR</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            {/* En lugar de <a>, utilizamos <Link> */}
            <li className="nav-item">
              <Link className="nav-link" to="/category/botes">Botes</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/category/apartamentos">Apartamentos</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/category/experiencias">Experiencias</Link>
            </li>
          </ul>
          <CartWidget />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

