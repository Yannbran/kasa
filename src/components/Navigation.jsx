
import { useMatch, Link } from 'react-router-dom';
import '../style/header.scss';


export default function Navigation() {
    const matchAccueil = useMatch("/");
    const matchAbout = useMatch("/src/pages/About");

    return (
        <nav>
            <div className='nav'>
                <Link to="/" className='link'>
                    <p className={matchAccueil ? 'link-text link-acceuil' : 'link-text'}>Accueil</p>
                </Link>
                <Link to="/src/pages/About" className='link'>
                    <p className={matchAbout ? 'link-text link-about' : 'link-text'}>À propos</p>
                </Link>
            </div>
        </nav>
    )
};