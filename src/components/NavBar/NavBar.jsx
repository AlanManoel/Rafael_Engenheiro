import './NavBar.css';

function NavBar() {
    return (
        <nav className={"nav"}>
            <a href="#" className={"logo"}>
                Rafael<span>.</span>Castro
            </a>
            <ul className={"links"}>
                <li><a href="#sobre">Sobre</a></li>
                <li><a href="#projetos">Projetos</a></li>
                <li><a href="#processo">Processo</a></li>
                <li><a href="#contato">Contato</a></li>
            </ul>
            <a href="#contato" className={`btn-primary navCta`}>
                Solicitar orçamento
            </a>
        </nav>
    );
}

export default NavBar;
