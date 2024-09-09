import React from 'react';
import './Navbar.css';

const Navbar = ({ selectedIndex, toggleDarkMode }) => {
    return (
        <nav className="navbar navbar-expand-lg shadow-sm rounded p-2" id="efeito-vidro">
            <a className={`navbar-brand ${selectedIndex === 0 ? 'active' : ''}`} href="/PortifolioReact">Vander</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Alterna navegação">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <a className={`nav-link ${selectedIndex === 1 ? 'active' : ''}`} href="/PortifolioReact/#/curriculo">Currículo</a>
                    <a className={`nav-link ${selectedIndex === 2 ? 'active' : ''}`} href="/PortifolioReact/#/portifolio">Portifólio</a>
                </div>
            </div>
            <div className="d-flex justify-content-end">
                <div className="btn-group">
                    <a className="btn btn-outline-dark rounded-pill d-flex align-items-center me-2" id="git" href="https://github.com/Vanderluizsj" target="_blank" rel="noopener noreferrer">
                        <i className="fa fa-github"></i>
                        <strong>Github</strong>
                    </a>
                    <a className="btn btn-outline-primary rounded-pill d-flex align-items-center" id="link" href="https://www.linkedin.com/in/vanderluiz/" target="_blank" rel="noopener noreferrer">
                        <strong>Linked</strong>
                        <i className="fa fa-linkedin"></i>
                    </a>
                </div>
                <button className="btn btn-outline-light rounded-pill ms-2" onClick={toggleDarkMode}>
                    Alternar Modo Escuro
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
