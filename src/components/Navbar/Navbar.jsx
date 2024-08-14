import './Navbar.css'

const Navbar = ({ selectedIndex }) => {
    return (
        <nav class="navbar navbar-expand-lg shadow-sm rounded p-2" id="efeito-vidro">
            <a className={`navbar-brand ${selectedIndex == 0 ? `active` : ``}`} href="/PortifolioReact">Vander</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Alterna navegação">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav">                
                <a className={`nav-link ${selectedIndex == 1 ? `active` : ``}`} href="/PortifolioReact/#/curriculo">Currículo</a>
                <a className={`nav-link ${selectedIndex == 2 ? `active` : ``}`} href="/PortifolioReact/#/portifolio">Portifólio</a>
                </div>
            </div>
            <div class="d-flex justify-content-end">
                <div class="btn-group">
                    <a class="btn btn-outline-dark rounded-pill d-flex align-items-center me-2" id="git" href="https://github.com/Vanderluizsj" target="_blank">
                        <i class="fa fa-github"></i>
                        <strong>Github</strong>
                    </a>
                    <a class="btn btn-outline-primary rounded-pill d-flex align-items-center" id="link" href="https://www.linkedin.com/in/vanderluiz/" target="_blank">                     
                        <strong>Linked</strong>
                        <i class="fa fa-linkedin"></i>
                    </a>
                </div>
            </div>

        </nav>
    )
}
export default Navbar