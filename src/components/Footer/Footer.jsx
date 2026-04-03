import './Footer.css';

function Footer() {
    return (
        <footer className={'footer'}>
            <div className={'logo'}>
                Rafael<span>.</span>Castro
            </div>
            <p className={'copy'}>
                © 2026 Rafael Castro Martins  · CREA 1922963500
            </p>
            <div className={'links'}>
                <a href="https://www.instagram.com/rafael.castro_martins/">Instagram</a>
                <a href="#">WhatsApp</a>
            </div>
        </footer>
    );
}

export default Footer;