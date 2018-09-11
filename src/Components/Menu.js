import React, { Component } from 'react';
import { navigate } from '@reach/router'

class Menu extends Component {

  onClickMenu(event) {
    navigate(event.target.getAttribute('href'));
  }

  render() {
    return (
    <nav className="menu navbar navbar-expand-lg navbar-light bg-light">
<ul className="navbar-nav mr-auto">
  <li className="nav-item active">
    <button className="nav-link" onClick={this.onClickMenu} href="/">Inicio <span className="sr-only">(current)</span></button>
  </li>
  <li className="nav-item">
    <button className="nav-link" onClick={this.onClickMenu} href="contacto">Contacto</button>
  </li>
  <li className="nav-item">
      <button className="nav-link" onClick={this.onClickMenu} href="ubicacion" >Ubicación</button>
    </li>
  <li className="nav-item dropdown">
    <a className="nav-link dropdown-toggle" href="productos.html" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        Productos <span className="badge badge-secondary">New</span>
    </a>
    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
      <a className="dropdown-item" href="productos.html">Todos los productos</a>
      <a className="dropdown-item" href="#">Another action</a>
      <div className="dropdown-divider"></div>
      <a className="dropdown-item" href="#">Something else here</a>
    </div>
  </li>
  <li className="nav-item">
    <a className="nav-link disabled" href="#">En proceso...</a>
  </li>
</ul>
</nav>
    )


  }
}

export default Menu;