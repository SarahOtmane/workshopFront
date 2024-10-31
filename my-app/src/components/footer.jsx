import '../css/frontoffice/footer.css'; 

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                <p className="footer-rights">Tous droits réservés – Retrometroid 2024</p>
                
                <div className="footer-icons">
                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-instagram"></i> Instagram
                    </a>
                    <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-tiktok"></i> Tik-tok
                    </a>
                    <a href="mailto:email@example.com">
                        <i className="fas fa-envelope"></i> Email
                    </a>
                </div>

                <div className="footer-links">
                    <a href="/mentions-legales">Mentions légales</a>
                    <a href="/conditions-generales">Conditions Générales de vente</a>
                    <a href="/politique-confidentialite">Politique de confidentialité</a>
                </div>
            </div>
        </footer>
    );
}
