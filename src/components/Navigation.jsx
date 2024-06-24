
import { useMatch } from 'react-router-dom';
import '../style/header.scss';


export default function Navigation() {
    const matchAccueil = useMatch("/");
    const matchAbout = useMatch("/src/pages/About");

    return (
        <nav>
            <div className='nav'>
                <a href="/" className='link'>
                    <p className={matchAccueil ? 'link-text link-acceuil' : 'link-text'}>Accueil</p>
                </a>
                <a href="/src/pages/About" className='link'>
                    <p className={matchAbout ? 'link-text link-about' : 'link-text'}>À propos</p>
                </a>
            </div>
        </nav>
    )
};