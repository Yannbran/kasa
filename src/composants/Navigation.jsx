import { Link } from 'react-router-dom';
import '../style/nav.scss';


export default function Navigation() {
    return (
        <nav className='nav'>
            <Link to="/" className='link'>Acceuil</Link>
            <Link to="/" className='link'>A propos</Link>
        </nav>
    )
};