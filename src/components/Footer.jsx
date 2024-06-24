import Foot from '../assets/images/D_Footer.png'
import '../style/footer.scss';

export default function Footer() {
    return (
        <footer>
            <img src={Foot} alt='pied de page' className='footer'/>
        </footer>
    )
};