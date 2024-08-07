import './Navbar.css'

const Navbar = ({ }) => {
    return (
        <nav class="navbar navbar-expand-lg shadow-sm rounded p-2" data-bs-theme="dark" id="nav">
            <a class="navbar-brand" href="#">Navbar</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Alterna navegação">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                    <a class="nav-item nav-link active" href="#">Home <span class="sr-only">(Página atual)</span></a>
                    <a class="nav-item nav-link" href="#">Destaques</a>
                    <a class="nav-item nav-link" href="#">Preços</a>
                    <a class="nav-item nav-link disabled" href="#">Desativado</a>
                </div>
            </div>
            <div class="d-flex justify-content-end">
                <div class="btn-group">
                    <a class="btn btn-outline-dark rounded-pill d-flex align-items-center me-2" id="git" href="#">
                        <i class="fa fa-github"></i>
                        <strong>Github</strong>
                    </a>
                    <a class="btn btn-outline-primary rounded-pill d-flex align-items-center" id="link" href="#">

                        <strong>Linked</strong>
                        <i class="fa fa-linkedin"></i>
                    </a>
                </div>
            </div>

        </nav>
    )
}
export default Navbar